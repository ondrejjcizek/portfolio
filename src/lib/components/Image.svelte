<script lang="ts">
    import { onMount } from 'svelte'

    let image: HTMLImageElement

    onMount(() => {
        window.addEventListener('scroll', () => {
            let { scrollY } = window
            image.style.transform = `translateY(${scrollY / 20}px)`
        })
    })
</script>

<div class="Image">
    <picture>
        <source srcset="oc@2x.webp" type="image/webp" />
        <img src="oc.jpg" srcset="oc@2x.jpg" alt="Ondřej Čížek" bind:this={image} />
    </picture>
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
            top -25%
            width 100%
            height 120%
            object-fit cover
</style>
