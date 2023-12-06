<script lang="ts">
    let color = ''
</script>

<div class="Hero">
    <img src="video-overlay.png" alt="" />
    <video src="output.mp4" muted autoplay loop playsinline></video>
    <h1>
        <span>Frontend</span>
        <span>Creative</span>
        <span>Developer</span>
    </h1>
</div>

<style lang="stylus">
    .Hero
        position relative
        height 100vh
        display grid
        place-items center
        margin-bottom percentage(200/1920)

        video
            position absolute
            inset 0
            width 100%
            height 100%
            object-fit cover
        
        img
            position absolute
            z-index 2
            inset 0
            width 100%
            height 100%
            object-fit cover

        h1
            position relative
            z-index 3
            display flex
            flex-direction column
            font-weight 500
            
            width 100%
            text-align center
            font-size rvw(75, 170, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)
            line-height (172/170)
            margin 0

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
                    left (104/170em)

                    @media $medium-up
                        left (259/170em)
                
                &:nth-child(3)
                    {}
</style>
