<div class="Container">
    <slot />
</div>

<style lang="stylus">
    .Container
        position relative
        z-index 5
        box-sizing content-box
        margin 0 auto
        max-width 1100px
        padding 0 24px
        // margin-top -20svh

        @media $medium-up
            padding 0 50px
            // margin-top 0
        
        & > :global(.Title)
            margin 0 0 percentage(63/1100)

            @media $small-wide-max
                margin-bottom 40px
</style>
