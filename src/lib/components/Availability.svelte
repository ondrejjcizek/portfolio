<div class="Availability">
    <p>Available <span>February 2023</span></p>
    <a href="#todo">
        <span>Let's connect</span>
        <img src="hands.svg" alt="" />
    </a>
</div>

<style lang="stylus">
    .Availability
        display flex
        display none
        flex-direction column
        align-items center
        justify-content space-between
        background #19191A
        border 1px solid rgba(white, .05)
        border-radius 20px
        margin 0 auto
        width 100%
        max-width fit-content
        gap 20px
        padding 20px
        margin-bottom 190px

        @media $small-wide-up
            padding 9px
            flex-direction row
            max-width 600px

        p
            position relative
            top 2px
            color #6C6D72
            font-size 1.5rem
            margin-left 45px
            white-space nowrap

            @media $small-max
                margin-right 25px

            &:before
                content ""
                position absolute
                top 50%
                transform translateY(-50%)
                left -22px
                height 8px
                aspect-ratio 1
                background #37C03C
                border-radius 50%
                outline 6px solid rgba(#37C03C, .10)

            span
                color white
        
        a
            display flex
            justify-content center
            align-items center
            gap 12px
            text-decoration none
            color white
            background #2B5DFF
            min-height 60px
            min-width 180px
            text-align center
            border-radius 10px

            span
                position relative
                top 2px

            img
                width 24px
                position relative
                top -1px

</style>
