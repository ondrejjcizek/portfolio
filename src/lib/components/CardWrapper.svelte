<div class="CardWrapper">
    <slot />
</div>

<style lang="stylus">
    .CardWrapper
        display flex
        flex-direction column
        gap 24px
        margin-bottom percentage(107/1100)

        @media $small-wide-up
            display grid
            gap 30px
            grid-template-columns repeat(2, 1fr)
</style>
