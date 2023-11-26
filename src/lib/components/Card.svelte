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
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(5)`
            event.target.classList.add('is-active')
            event.target.classList.remove('is-leaving')
            // setTimeout(() => {
            //     background.style.transform = `translate(0px, 0px)`
            // }, 50)
        })

        card.addEventListener('mouseleave', (event: MouseEvent) => {
            background.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(0)`
            event.target.classList.remove('is-active')
            event.target.classList.add('is-leaving')
        })
    })
</script>

<article class="Card {project}" bind:this={card}>
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
</article>

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
            top 0
            left 0
            position absolute
            transform-origin center
            height 400px
            width 400px
            background blue
            border-radius 50%
            opacity 0
            transition transform 4s $easing, width 2s ease, height 2s ease, opacity 0.3s $easing

            .is-leaving &
                transition transform 4s $easing, width 1.5s $easing, height 1.5s $easing, opacity 1.2s $easing

            .is-active &
                opacity 1
        
        &.hotel
            .Card-image
                position relative
            
            .Card-background
                background linear-gradient(38deg, #FF5F03 0%, #E62B2B 100%)

                // img
        
        &.centre
            .Card-background
                background linear-gradient(38deg, #E14134 0%, #B62056 100%);
    
        &.ddf
            .Card-background
                background linear-gradient(38deg, #29ADCF 0%, #171ED1 100%);

        &.tereos
            .Card-background
                background linear-gradient(38deg, #2997E9 0%, #2265D4 100%);

</style>
