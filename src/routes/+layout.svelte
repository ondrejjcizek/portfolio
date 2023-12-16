<script lang="ts">
    import '$lib/styles/main.styl'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

    import Cursor from '$lib/components/Cursor.svelte'
    import { onMount, afterUpdate } from 'svelte'
    let cursorColor = 'blue'
    let cursorSize = 28
    let cursorSquare = false
    let cursorMixBlendMode = 'exclusion'
    let cursorShape = 'circle'

    if (cursorSquare) {
        cursorShape = 'square'
    }

    onMount(() => {
        const cursorElement = document.querySelector('.cursor-element')
        const cursorOutput = document.querySelector('.cursor-output')
        if (cursorElement && cursorOutput) {
            cursorOutput.textContent =
                // format the output
                `<Cursor color="${cursorColor}" mixBlendMode="${cursorMixBlendMode}" size="${cursorSize}" />`
        }
    })

    afterUpdate(() => {
        const cursorElement = document.querySelector('.cursor-element')
        const cursorOutput = document.querySelector('.cursor-output')
        if (cursorElement && cursorOutput) {
            cursorOutput.textContent =
                // format the output
                `<Cursor color="${cursorColor}" mixBlendMode="${cursorMixBlendMode}" size="${cursorSize}"  />`
        }
    })
</script>

<main>
    <slot />

    <!-- <Cursor /> -->
</main>

<style lang="stylus">
    main
        padding percentage(100/1920) 0 percentage(200/1920)
        padding-top 0
        overflow hidden
</style>
