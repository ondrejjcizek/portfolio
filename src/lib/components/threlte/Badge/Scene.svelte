<script lang="ts">
    import { spring } from 'svelte/motion'
    import { T } from '@threlte/core'
    import BadgeModel from './BadgeModel.svelte'
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

    // function onClick() {
    // 	clicked = !clicked;
    // 	if (clicked) {
    // 		$rotation = (180 * Math.PI) / 180;
    // 	} else {
    // 		$rotation = 0;
    // 	}
    // }

    let meshBadge: THREE.Mesh
</script>

<T.PerspectiveCamera position.z={7} makeDefault>
    <OrbitControls autoRotate={true} enabled={false} autoRotateSpeed={10} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={3} />
<!-- <T.DirectionalLight position={[3, 8, 25]} intensity={1} /> -->
<ContactShadows scale={20} blur={2} far={2.5} opacity={0.5} />

<T.Group scale={$scale} rotation.y={$rotation}>
    <T.Group rotation.y={0} rotation.x={0}>
        <BadgeModel bind:ref={meshBadge} />
    </T.Group>
</T.Group>

<CustomRenderer selectedMesh={meshBadge} />
