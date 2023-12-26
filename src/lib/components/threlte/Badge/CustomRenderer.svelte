<script lang="ts">
    import * as THREE from 'three'
    import { onMount } from 'svelte'
    import { useRender, useThrelte } from '@threlte/core'
    import {
        EffectComposer,
        ShaderPass,
        EffectPass,
        BloomEffect,
        RenderPass,
        KernelSize,
        SMAAEffect,
        SMAAPreset,
    } from 'postprocessing'
    import vertex from '../../../imports/glsl/main.vert'
    import fragment from '../../../imports/glsl/main.frag'

    import { ShaderMaterial, Uniform } from 'three'

    export let selectedMesh: THREE.Mesh

    let uMouse = new THREE.Vector2(0, 0)
    let uTouch = new THREE.Vector2(0, 0)
    let uStart = new THREE.Vector2(0, 0)

    const returnHome = {
        run() {
            setTimeout(() => {
                myShaderPass.fullscreenMaterial.uniforms.uMouse.value = uStart
                console.log('jaja')
            }, 1000)
        },
    }

    onMount(() => {
        document.addEventListener('mousemove', e => {
            uMouse.x = e.clientX / window.innerWidth
            uMouse.y = 1 - e.clientY / window.innerHeight
        })
        document.addEventListener('touchmove', e => {
            uTouch.x = e.touches[0].clientX / window.innerWidth
            uTouch.y = 1.3 - e.touches[0].clientY / window.innerHeight
        })
    })

    // CUSTOM EFFECTS
    const myShaderMaterial = new ShaderMaterial({
        defines: { LABEL: 'value' },
        uniforms: {
            tDiffuse: new Uniform(null),
            resolution: { value: new THREE.Vector2(1, window.innerHeight / window.innerWidth) },
            uMouse: { value: new THREE.Vector2(-10, -10) },
            uVelo: { value: 0 },
        },
        vertexShader: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );}`,
        fragmentShader: `uniform float time;
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        varying vec2 vUv;
        uniform vec2 uMouse;
        float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
          uv -= disc_center;
          uv*=resolution;
          float dist = sqrt(dot(uv, uv));
          return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
        }
        void main()  {
            vec2 newUV = vUv;
            float c = circle(vUv, uMouse, 0.05, 0.2);
            float r = texture2D(tDiffuse, newUV.xy += c * (0.05 * .5)).x;
            float g = texture2D(tDiffuse, newUV.xy += c * (0.05 * .525)).y;
            float b = texture2D(tDiffuse, newUV.xy += c * (0.05 * .55)).z;
            vec4 color = vec4(r, g, b, 1.);

            gl_FragColor = color;
        }`,
    })

    // PASSES
    const myShaderPass = new ShaderPass(myShaderMaterial, 'tDiffuse')

    let bloomEffect = new BloomEffect({
        intensity: 0.5,
        luminanceThreshold: 0.15,
        height: 512,
        width: 512,
        luminanceSmoothing: 0.08,
        mipmapBlur: true,
        kernelSize: KernelSize.MEDIUM,
    })

    let smaaEffect = new SMAAEffect({
        preset: SMAAPreset.HIGH,
    })

    //THRELTE
    const { scene, renderer, camera } = useThrelte()
    renderer?.setPixelRatio(1.5)
    renderer?.setClearColor(0xffffff, 0)

    // COMPOSER
    const composer = new EffectComposer(renderer)

    // SETUP
    const setupEffectComposer = (camera: THREE.Camera, selectedMesh: THREE.Mesh) => {
        composer.addPass(new RenderPass(scene, camera))
        composer.addPass(new EffectPass(camera, bloomEffect))
        composer.addPass(new EffectPass(camera, smaaEffect))
        composer.addPass(myShaderPass)
    }

    $: setupEffectComposer($camera, selectedMesh)
    useRender((_, delta) => {
        if ('ontouchstart' in window) {
            myShaderPass.fullscreenMaterial.uniforms.uMouse.value = uTouch
            bloomEffect.intensity = uTouch.y
        } else {
            bloomEffect.intensity = uMouse.y
            myShaderPass.fullscreenMaterial.uniforms.uMouse.value = uMouse
        }
        composer.render(delta)
    })
</script>
