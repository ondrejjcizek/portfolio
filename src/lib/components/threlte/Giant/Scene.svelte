<script lang="ts">
    import { spring } from 'svelte/motion'
    import { T } from '@threlte/core'
    import GiantModel from './GiantModel.svelte'
    import {
        ContactShadows,
        Environment,
        Grid,
        OrbitControls,
        interactivity,
        useInteractivity,
    } from '@threlte/extras'
    import CustomRenderer from './CustomRenderer.svelte'
    import { onMount } from 'svelte'

    interactivity()
    const { pointer } = useInteractivity()
    const scale = spring(1, { stiffness: 0.1, damping: 1.5 })
    const rotation = spring(0, { stiffness: 0.06, damping: 1 })
    let clicked = false

    onMount(() => {
        document.body.style.height = '100%'
        document.body.style.overflow = 'hidden'
    })

    function onEnter() {
        $scale = 1
    }

    function onLeave() {
        $scale = 1

        if (!clicked) {
            $rotation = 0
        }
    }

    function onClick() {
        clicked = !clicked
        if (clicked) {
            $rotation = (180 * Math.PI) / 180
        } else {
            $rotation = 0
        }
    }

    let meshBadge: THREE.Mesh
    let isMobile: boolean
    let touchRotation: number
    let modelSize: number
    let innerWidth: number

    $: if (innerWidth >= 768) {
        isMobile = false
        touchRotation = 1
        modelSize = 4
    } else {
        isMobile = true
        touchRotation = 1
        modelSize = 5
    }
</script>

<svelte:window bind:innerWidth />

<T.WebGLRenderer alpha={true} />

<T.PerspectiveCamera position.z={modelSize} makeDefault>
    <!-- <OrbitControls /> -->
</T.PerspectiveCamera>

<T.AmbientLight intensity={3} />
<T.DirectionalLight position={[5, 10, 15]} intensity={4} />
<ContactShadows scale={5} blur={2} far={10} opacity={0.5} />

<T.Group scale={$scale} rotation.y={$rotation}>
    <T.Group rotation.y={-$pointer.x * touchRotation} rotation.x={$pointer.y * 0.5}>
        <GiantModel on:pointerenter={onEnter} on:pointerleave={onLeave} bind:ref={meshBadge} />
    </T.Group>
</T.Group>
<CustomRenderer selectedMesh={meshBadge} />

<Grid
    position.y={-2}
    cellColor="#DFAC6F"
    sectionColor="#DFAC6F"
    sectionThickness={1}
    fadeDistance={20}
    cellSize={2}
/>
