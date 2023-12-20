<script lang="ts">
    import { onMount } from 'svelte'

    let image: HTMLImageElement

    onMount(() => {
        window.addEventListener('scroll', () => {
            let { scrollY } = window

            // console.log(scrollY)
            // console.log(image)
            image.style.transform = `translateY(${scrollY / 20}px)`
        })
    })
</script>

<div class="Image">
    <img src="oc.jpg" alt="Ondřej Čížek" bind:this={image} />
</div>

<style lang="stylus">
    .Image
        position relative
        aspect-ratio 40/27
        border-radius 20px
        overflow hidden
        max-width 800px
        margin 0 auto percentage(238/1100)

        @media $small-wide-max
            margin 0 auto 96px

        img
            position absolute
            inset 0
            top -20%
            width 100%
            height 120%
            object-fit cover
</style>
