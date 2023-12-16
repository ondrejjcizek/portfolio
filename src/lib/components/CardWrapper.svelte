<div class="CardWrapper">
    <slot />
</div>

<style lang="stylus">
    .CardWrapper
        display flex
        flex-direction column
        gap 24px
        margin-bottom percentage(200/1100)

        @media $small-wide-max
            margin-bottom percentage(250/1100)

        @media $medium-up
            display grid
            gap 30px
            grid-template-columns repeat(2, 1fr)
</style>
