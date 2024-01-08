<script lang="ts">
    import '$lib/styles/main.styl'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
    import { fade } from 'svelte/transition'
    import Lenis from '@studio-freight/lenis'
    import type { LayoutServerData } from './$types'
    import { disableScrollHandling } from '$app/navigation'
    export let data: LayoutServerData

    import Cursor from '$lib/components/Cursor.svelte'
    import { onMount } from 'svelte'

    onMount(() => {
        disableScrollHandling()
        const lenis = new Lenis()

        // lenis.on('scroll', (e: any) => {
        //     console.log(e)
        // })

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
</script>

<svelte:head>
    <title>Frontend Creative Developer</title>
</svelte:head>

{#key data.pathname}
    <main transition:fade={{ delay: 0, duration: 400 }}>
        <slot />
    </main>
    <Cursor />
{/key}

<style lang="stylus">
    main
        padding percentage(100/1920) 0 0
        padding-top 0
        overflow hidden
</style>
