<script lang="ts">
    import { onMount } from 'svelte'
    import Bubble from './Bubble.svelte'
    import BubbleWrapper from './BubbleWrapper.svelte'
    import Text from './Text.svelte'
    import Title from './Title.svelte'

    export let title: string
    export let desc: string
    export let src: string
    export let srcset: string
    export let href: string
    export let project: string
    export let technology = 'Vanilla JS'

    let card: any
    let background: any

    onMount(() => {
        card.addEventListener('mouseenter', (event: MouseEvent) => {
            if (navigator.maxTouchPoints > 0) {
                return
            }
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`
            setTimeout(() => {
                const target = event.target as HTMLDivElement
                target.classList.remove('is-leaving')
                target.classList.add('is-active')
                target.classList.remove('is-delayed')
                background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(20)`
            }, 10)
        })

        card.addEventListener('mouseleave', (event: MouseEvent) => {
            if (navigator.maxTouchPoints > 0) {
                return
            }
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(0)`
            const target = event.target as HTMLDivElement
            target.classList.remove('is-active')
            target.classList.remove('is-delayed')
            target.classList.add('is-leaving')
            setTimeout(() => {
                target.classList.add('is-delayed')
            }, 500)
        })

        card.addEventListener('click', (event: MouseEvent) => {
            if (navigator.maxTouchPoints > 0) {
                // event.preventDefault()
            }
        })

        function displayEntry(entry: any) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-obsersved')
                entry.target.classList.remove('out-obsersved')
                // entry.target.classList.remove('is-leaving')
                // entry.target.classList.add('is-active')
                // entry.target.classList.remove('is-delayed')
            } else {
                entry.target.classList.remove('is-obsersved')
                entry.target.classList.add('out-obsersved')
                // entry.target.classList.remove('is-active')
                // entry.target.classList.add('is-leaving')
                // entry.target.classList.remove('is-delayed')
            }
        }

        let callback = function (entries: any, observer: any) {
            if (navigator.maxTouchPoints > 0) {
                entries.forEach((entry: any) => {
                    displayEntry(entry)
                })
            }
        }

        const options = {
            rootMargin: '-48.4% 0% -48.4% 0%',
            threshold: 0,
        }

        let observer = new IntersectionObserver(callback, options)

        observer.observe(card)
    })
</script>

<a {href} class="Card {project}" bind:this={card} target="_blank">
    <div class="Card-wrapper">
        <Title tag="h3" size="md">{title}</Title>
        <Text color="grey">{desc}</Text>
        <BubbleWrapper>
            <Bubble>{technology}</Bubble>
            <Bubble>CSS</Bubble>
            <Bubble>HTML</Bubble>
        </BubbleWrapper>
        <div class="Card-image">
            <img {src} {srcset} alt={title} />
        </div>
    </div>
    <div class="Card-background" bind:this={background}></div>
</a>

<style lang="stylus">
    $easing = cubic-bezier(0.190, 1.000, 0.220, 1.000);

    .Card
        position relative
        background rgba(#19191A, .7)
        outline 1px solid rgba(white, .05)
        padding percentage(47/535) percentage(50/535) percentage(61/535)
        border-radius 20px
        max-height 680px
        height 100%
        overflow hidden
        text-decoration none
        cursor none
        mix-blend-mode difference
        transition border-color .6s ease
        user-select none

        &.is-active, &.is-obsersved
            border-color transparent

            :global(.Text)
                color white

        &.is-obsersved
            .Card-background
                @media (pointer: coarse)
                    opacity 1
                    left calc(50% - 40px)
                    transform translate(-50%, 100%) scale(20)
        
        &.out-obsersved
            .Card-background
                @media (pointer: coarse)
                    opacity 0
                    left calc(50% - 40px)
                    transform translate(-50%, 100%) scale(20)

        &:hover
            +hover()
                :global(.Text)
                    color white

        &-wrapper
            position relative
            z-index 1

        :global(.Title)
            margin-bottom percentage(13/433)
        
        :global(.Text)
            margin-bottom percentage(20/433)
        
        &-image
            aspect-ratio 6/5

            img
                width 100%
            
        &-background
            top -50px
            left -50px
            position absolute
            transform-origin center
            height 100px
            width 100px
            background blue
            border-radius 50%
            opacity 0
            transition transform 0s $easing, opacity 1.3s $easing, filter 1s $easing
            filter blur(3px)

            .is-leaving &
                transition transform 1.3s $easing, opacity 2s $easing
                filter blur(9px)

                @media $small-wide-max
                    transition transform 1.3s $easing, opacity 1s $easing

            .is-active &
                transition transform 1s, opacity 1s $easing
                opacity 1
                animation VisualBackground 18s ease infinite
            
            .is-delayed &
                transition transform 0s $easing, opacity 1s $easing
        
        &.hotel
            .Card-image
                position relative
            
        &.hotel
            .Card-background
                background linear-gradient(135deg, #E62B2B 6.25%, #FF5F03 18.75%, #E62B2B 31.25%, #FF5F03 37.5%, #E62B2B 50%, #FF5F03 56.25%, #E62B2B 68.75%, #FF5F03 81.25%, #E62B2B 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%
        
        &.centre
            .Card-background
                background linear-gradient(225deg, #B62056 6.25%, #E14134 18.75%, #B62056 31.25%, #E14134 37.5%, #B62056 50%, #E14134 56.25%, #B62056 68.75%, #E14134 81.25%, #B62056 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%
    
        &.tereos
            .Card-background
                background linear-gradient(135deg, #1FA01B 6.25%, #6DD651 18.75%, #1FA01B 31.25%, #6DD651 37.5%, #1FA01B 50%, #6DD651 56.25%, #1FA01B 68.75%, #6DD651 81.25%, #1FA01B 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%

        &.ddf
            .Card-background
                background linear-gradient(225deg, #171ED1 6.25%, #29ADCF 18.75%, #171ED1 31.25%, #29ADCF 37.5%, #171ED1 50%, #29ADCF 56.25%, #171ED1 68.75%, #29ADCF 81.25%, #171ED1 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%

        &.barbora
            .Card-background
                background linear-gradient(135deg, #2E4ACD 6.25%, #131C64 18.75%, #2E4ACD 31.25%, #131C64 37.5%, #2E4ACD 50%, #131C64 56.25%, #2E4ACD 68.75%, #131C64 81.25%, #2E4ACD 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%
        
        &.rsts
            .Card-background
                background linear-gradient(225deg, #DE8100 6.25%, #FFD728 18.75%, #DE8100 31.25%, #FFD728 37.5%, #DE8100 50%, #FFD728 56.25%, #DE8100 68.75%, #FFD728 81.25%, #DE8100 93.75%);
                // animation VisualBackground 18s ease infinite
                background-size 400% 100%


    @keyframes VisualBackground
        0%
            background-position 0% 50%
        50%
            background-position 100% 50%
        100%
            background-position 0% 50%
</style>
