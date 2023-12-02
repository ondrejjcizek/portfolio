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
    export let project: string

    let card: any
    let background: any

    onMount(() => {
        card.addEventListener('mouseenter', (event: MouseEvent) => {
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(20)`
            event.target.classList.add('is-active')
            event.target.classList.remove('is-leaving')
            setTimeout(() => {
                event.target.classList.add('is-delayed')
            }, 50)
        })

        card.addEventListener('mouseleave', (event: MouseEvent) => {
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(0)`
            event.target.classList.remove('is-active')
            event.target.classList.remove('is-delayed')
            event.target.classList.add('is-leaving')
        })
    })
</script>

<a href="https://tereos-ttd.com/" class="Card {project}" bind:this={card}>
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
        background #19191A
        border 1px solid rgba(white, .05)
        padding percentage(47/535) percentage(50/535) percentage(61/535)
        border-radius 20px
        max-height 680px
        height 100%
        overflow hidden
        text-decoration none

        &:hover
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
            transition transform 4s $easing, width 2s ease, height 2s ease, opacity 0.3s $easing, filter 1s $easing
            filter blur(3px)

            .is-leaving &
                transition transform 1.3s $easing, opacity 2s $easing
                filter blur(9px)

            .is-active &
                transition transform 1s, opacity 1s $easing
                opacity 1
            
            .is-delayed &
                transition transform 4s $easing, width 2s ease, height 2s ease, opacity 1s $easing
        
        &.hotel
            .Card-image
                position relative
            
        &.hotel
            .Card-background
                background linear-gradient(135deg, #FF5F03 36%, #E62B2B 60%)
        
        &.centre
            .Card-background
                background linear-gradient(225deg, #E14134 50%, #B62056 70%);
    
        &.ddf
            .Card-background
                background linear-gradient(45deg, #29ADCF 30%, #171ED1 60%);

        &.tereos
            .Card-background
                background linear-gradient(225deg, #016fc4 50%, #29ADCF 60%);

</style>
