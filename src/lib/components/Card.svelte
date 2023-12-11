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

    let card: any
    let background: any

    onMount(() => {
        card.addEventListener('mouseenter', (event: MouseEvent) => {
            if (navigator.maxTouchPoints > 0) {
                return
            }
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`
            setTimeout(() => {
                event.target.classList.remove('is-leaving')
                event.target.classList.add('is-active')
                event.target.classList.remove('is-delayed')
                background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(20)`
            }, 10)
        })

        card.addEventListener('mouseleave', (event: MouseEvent) => {
            if (navigator.maxTouchPoints > 0) {
                return
            }
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(0)`
            event.target.classList.remove('is-active')
            event.target.classList.remove('is-delayed')
            event.target.classList.add('is-leaving')
            setTimeout(() => {
                event.target.classList.add('is-delayed')
            }, 500)
        })

        card.addEventListener('click', event => {
            if (navigator.maxTouchPoints > 0) {
                // event.preventDefault()
            }
        })

        function displayEntry(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-obsersved')
                entry.target.classList.remove('out-obsersved')
                entry.target.classList.remove('is-leaving')
                entry.target.classList.add('is-active')
            } else {
                entry.target.classList.remove('is-obsersved')
                entry.target.classList.add('out-obsersved')
                entry.target.classList.remove('is-active')
                entry.target.classList.add('is-leaving')
            }
        }

        let callback = function (entries, observer) {
            if (navigator.maxTouchPoints > 0) {
                entries.forEach(entry => {
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
            <Bubble>Javascript</Bubble>
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
        border 1px solid rgba(white, .05)
        padding percentage(47/535) percentage(50/535) percentage(61/535)
        border-radius 20px
        max-height 680px
        height 100%
        overflow hidden
        text-decoration none
        cursor none
        mix-blend-mode difference

        &.is-active
            :global(.Text)
                color white

        &.is-obsersved
            .Card-background
                @media (pointer: coarse)
                    opacity 1
                    left calc(50% - 40px)
                    transform translate(-50%, 0) scale(20)
        
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
            transition transform 0s $easing, opacity 0.3s $easing, filter 1s $easing
            filter blur(3px)

            .is-leaving &
                transition transform 1.3s $easing, opacity 2s $easing
                filter blur(9px)

                @media $small-wide-max
                    transition transform 1.3s $easing, opacity 1s $easing

            .is-active &
                transition transform 1s, opacity 1s $easing
                opacity 1
            
            .is-delayed &
                transition transform 0s $easing, opacity 1s $easing
        
        &.hotel
            .Card-image
                position relative
            
        &.hotel
            .Card-background
                // background linear-gradient(135deg, #FF5F03 36%, #E62B2B 60%);
                background linear-gradient(223deg, #E62B2B 6.25%, #FF5F03 18.75%, #E62B2B 31.25%, #FF5F03 37.5%, #E62B2B 50%, #FF5F03 56.25%, #E62B2B 68.75%, #FF5F03 81.25%, #E62B2B 93.75%);
                animation VisualBackground 10s ease infinite
                background-size 400% 100%
        
        &.centre
            .Card-background
                background linear-gradient(212.6deg, #AC0D47 12.11%, #FF573C 125.59%, #FF562A 127.06%);
                animation VisualBackground 8s ease infinite
                background-size 400% 100%
    
        &.ddf
            .Card-background
                background linear-gradient(45deg, #29ADCF 30%, #171ED1 60%);
                animation VisualBackground 4s ease infinite
                background-size 200% 100%

        &.tereos
            .Card-background
                background linear-gradient(225deg, #016fc4 50%, #29ADCF 60%);
                animation VisualBackground 4s ease infinite
                background-size 200% 100%

    @keyframes VisualBackground
        0%
            background-position 0% 50%
        50%
            background-position 100% 50%
        100%
            background-position 0% 50%
</style>
