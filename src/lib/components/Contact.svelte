<script>
    import Title from './Title.svelte'
</script>

<div class="Contact">
    <Title
        ><span>Feel free to contact me</span><br />
        <div class="Contact-blinker">anytime</div></Title
    >
    <address>
        <a href="mailto:ondrejj.cizek@gmail.com"
            ><span>ondrejj.cizek@gmail.com</span>
            <img src="send.svg" alt="" /></a
        >
    </address>
</div>

<style lang="stylus">
    .Contact
        :global(.Title)
            text-align center
            font-size 3.4rem
            letter-spacing -1px
            margin-bottom 40px

            @media only screen and (max-width: 380px)
                font-size 3.1rem

            @media $small-wide-up
                font-size rvw(34, 60, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)
                margin 0 0 percentage(74/1100)
            
            @media $xlarge-up
                letter-spacing 0px

        div
            position relative
            max-width fit-content
            margin 0 auto
            left (18/60em)

            &:before
                content ""
                position absolute
                top calc(50% + -1px)
                transform translateY(-50%)
                left -35.5px
                height 12px
                aspect-ratio 1
                background #37C03C
                border-radius 50%
                outline 0px solid rgba(#37C03C, .30)
                animation blink 1.5s forwards infinite

                @media $small-wide-max
                    animation blinkMobile 1.5s forwards infinite
                    top calc(50%)
                    left -28px
                    height 10px
        
        address
            background #19191A
            font-style normal
            border-radius 10px
            border 1px solid rgba(white, .05)


            a
                display flex
                color white
                justify-content space-between
                align-items center
                text-decoration none
                padding percentage(42/1100) percentage(50/1100) percentage(32/1100) percentage(50/1100)
                font-size 1.6rem
                cursor none
                
                @media $small-wide-up
                    font-size rvw(16, 36, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)
                
                @media $xlarge-up
                    font-size 3.6rem
            
            img
                aspect-ratio 86/80
                height 100%
                max-height 20px

                @media $small-wide-up
                    max-height 30px

                @media $xlarge-up
                    max-height 40px
        
        @keyframes blink
            0%
                outline-width 0px
            50%
                outline-width 18px
                outline-color transparent

            100%
                outline-width 0px
                outline-color transparent

        @keyframes blinkMobile
            0%
                outline-width 0px
            50%
                outline-width 14px
                outline-color transparent

            100%
                outline-width 0px
                outline-color transparent
</style>
