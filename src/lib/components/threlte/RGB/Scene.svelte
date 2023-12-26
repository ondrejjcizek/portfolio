<script lang="ts">
    import { TextureLoader } from 'three'
    import { T } from '@threlte/core'
    import { Grid, OrbitControls } from '@threlte/extras'
    import background from './background-small.jpg'
    import CustomRenderer from './CustomRenderer.svelte'
    let TEXTURE = new TextureLoader().load(background)

    let meshBackground: THREE.Mesh
</script>

<T.PerspectiveCamera makeDefault position={3.6} fov={50}>
    <OrbitControls
        autoRotate={true}
        maxPolarAngle={Math.PI * 0.45}
        minPolarAngle={0.5}
        minAzimuthAngle={-0.95}
        maxAzimuthAngle={Math.PI * 0.3}
        enableZoom={true}
    />
</T.PerspectiveCamera>

<T.Mesh position.x={0} position.Y={0} position.z={0} bind:ref={meshBackground}>
    <T.PlaneGeometry args={[3, 2]} />
    <T.MeshBasicMaterial map={TEXTURE} />
</T.Mesh>

<CustomRenderer selectedMesh={meshBackground} />

<Grid
    position.y={-1}
    cellColor="#F8EBCE"
    sectionColor="white"
    sectionThickness={0}
    fadeDistance={10}
    cellSize={1}
/>
