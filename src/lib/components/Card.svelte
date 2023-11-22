<script lang="ts">
    import Bubble from './Bubble.svelte'
    import BubbleWrapper from './BubbleWrapper.svelte'
    import Text from './Text.svelte'
    import Title from './Title.svelte'

    export let title: string
    export let desc: string
    export let src: string
    export let srcset: string
    export let project: string
</script>

<article class="Card {project}">
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
</article>

<style lang="stylus">
    .Card
        background #19191A
        border 1px solid rgba(white, .05)
        padding percentage(47/535) percentage(50/535) percentage(61/535)
        border-radius 20px
        max-height 680px
        height 100%

        :global(.Title)
            margin-bottom percentage(13/433)
        
        :global(.Text)
            margin-bottom percentage(20/433)
        
        &-image
            aspect-ratio 6/5

            img
                width 100%
        
        &.hotel
            .Card-image
                position relative

                // img

</style>
