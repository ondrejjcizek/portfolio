<script lang="ts">
    import { onMount } from 'svelte'
    let cursor: HTMLDivElement
    let background: HTMLDivElement

    onMount(() => {
        const initCursor = () => {
            document.addEventListener('mousemove', e => {
                console.log(e)
                cursor.style.top = `${e.clientY}px`
                cursor.style.left = `${e.clientX}px`
            })
            const hoverables = document.querySelectorAll('.Card')
            hoverables.forEach(hoverable => {
                hoverable.addEventListener('mouseenter', () => {
                    cursor.classList.add('is-active')
                    background.style.transform = `scale(6)`
                })
                hoverable.addEventListener('mouseleave', () => {
                    cursor.classList.remove('is-active')
                    background.style.transform = `scale(1)`
                })
            })
        }

        initCursor()
    })
</script>

<div class="Cursor" bind:this={cursor}>
    <div class="Cursor-background" bind:this={background}></div>
</div>

<style lang="stylus">
    $easing = cubic-bezier(0.190, 1.000, 0.220, 1.000);

    .Cursor
        position fixed
        top 0
        left 0
        pointer-events none
        z-index 5

        &-background
            border-radius 50%
            background rgba(white, 1)
            width 20px
            height 20px
            transition transform 1s $easing, background 0.6s $easing
            backdrop-filter: blur(0.5px);

            :global(.is-active &)
                background rgba(white, 0.4)
        

        &:before
            position fixed
            content url('view.svg')
            transform translate(-15px, 2px)
            z-index 100
            opacity 0
            transition opacity .3s ease
            transition-delay 0s

        :global(&.is-active)
            &:before
                opacity 1
        // :global(&.is-link)
        //     top -60px
        //     left -60px
        //     transform-origin center 0px
        //     background-color white
        //     width 120px
        //     height 120px

</style>
