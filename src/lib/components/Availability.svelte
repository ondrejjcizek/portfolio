<script lang="ts">
    import { onMount } from 'svelte'

    let button: HTMLButtonElement

    onMount(() => {
        let contact = document.querySelector('.Contact')
        button.addEventListener('click', () => {
            contact?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
            })
        })
    })
</script>

<div class="Availability">
    <p>Available <span>&nbsp;February 2024</span></p>
    <button bind:this={button}>
        <span>Let's connect</span>
        <img src="hands.svg" alt="" />
    </button>
</div>

<style lang="stylus">
    .Availability
        position absolute
        left 50%
        transform translateX(-50%)
        top 48px
        z-index 5
        display flex
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
        padding 5px 0px 5px 0px
        margin-bottom 190px
        user-select none

        @media $small-wide-up
            top 48px
            flex-direction row

        @media $medium-up
            max-width 600px
            padding 9px
            top 70px

        p
            position relative
            top 4px
            color #6C6D72
            font-size 1.5rem
            margin-left 45px
            white-space nowrap

            @media $small-wide-max
                font-size 1.4rem
                top 2px
                margin-right 25px

            &:before
                content ""
                position absolute
                top calc(50% + -1.5px)
                transform translateY(-50%)
                left -22px
                height 8px
                aspect-ratio 1
                background #37C03C
                border-radius 50%
                outline 0px solid rgba(#37C03C, .30)
                animation blink 1.5s forwards infinite

                @media $small-wide-max
                    top calc(50% + -1.5px)

            span
                color white
        
        button
            display none
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
            cursor none
            border none

            &:focus
                outline solid 2px rgba(white, 1)

            &:hover
                img
                    transform scale(1.1)

            @media $medium-up
                display flex

            span
                position relative
                top 2px

            img
                width 24px
                position relative
                top -1px
                transition transform 1s $easeOutExpo
        
    @keyframes blink
        0%
            outline-width 0px
        50%
            outline-width 9px
            outline-color transparent

        100%
            outline-width 0px
            outline-color transparent
</style>
