<script lang="ts">
    import { onMount } from 'svelte'

    let video: HTMLVideoElement

    onMount(() => {
        video.addEventListener('loadeddata', () => {
            video.style.opacity = '1'
        })
        video.play()
    })
</script>

<div class="Hero">
    <div class="Hero-overlay"></div>
    <video src="hero.mp4" muted autoplay loop playsinline bind:this={video}></video>
    <h1>
        <span>Frontend</span>
        <span>Creative</span>
        <span>Developer</span>
    </h1>
</div>

<style lang="stylus">
    $easing = cubic-bezier(0.190, 1.000, 0.220, 1.000)

    .Hero
        position relative
        height 100svh
        display grid
        place-items center
        margin-bottom percentage(200/1920)

        video
            position absolute
            inset 0
            width 100%
            height 100%
            object-fit cover
            opacity 0
            transition opacity 2s $easing
        
        &-overlay
            position absolute
            z-index 2
            inset 0
            width 100%
            height 100%
            background: radial-gradient(circle, rgba(17,17,18,0) 0%, rgba(17,17,18,0.6615239845938375) 25%, rgba(17,17,18, 0.97) 50%, rgba(17,17,18,1) 75%, rgba(17,17,18,1) 100%)

            &:after
                content ""
                position absolute
                z-index 1
                bottom 0
                width 100%
                height 100%
                background: linear-gradient(180deg, rgba(17,17,18,0) 40%, rgba(17,17,18,1) 100%);
            
            &:before
                content ""
                position absolute
                z-index 1
                top 0
                width 100%
                height 100%
                background: linear-gradient(0deg, rgba(17,17,18,0) 40%, rgba(17,17,18,1) 100%);

        h1
            position relative
            z-index 3
            display flex
            flex-direction column
            font-weight 500
            width 100%
            text-align center
            font-size 6rem
            line-height (172/170)
            margin 0
            user-select none
            color white
            mix-blend-mode difference
            // color #6a6a6a
            color hsl(0deg 0% 40.7%)
            color #a9a9a9

            @media $medium-up
                font-size rvw(60, 170, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)

            @media $xxlarge-up
                font-size 17rem

            span
                position relative
                &:nth-child(1)
                    right (90/170em)

                    @media $medium-up
                        right (223/170em)
                
                &:nth-child(2)
                    color #2B5DFF
                    // color hwb(225.85deg 17.12% 29.74%)
                    left (104/170em)

                    @media $medium-up
                        left (259/170em)
                
                &:nth-child(3)
                    {}
</style>
