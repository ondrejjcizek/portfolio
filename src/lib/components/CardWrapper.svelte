<div class="CardWrapper">
    <slot />
</div>

<style lang="stylus">
    .CardWrapper
        display grid
        grid-template-columns repeat(2, 1fr)
        gap 30px
</style>
