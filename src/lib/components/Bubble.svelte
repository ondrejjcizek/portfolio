<script>
    import Text from './Text.svelte'
</script>

<div class="Bubble">
    <Text color="white" align="center"><slot /></Text>
</div>

<style lang="stylus">
    .Bubble
        display grid
        place-items center
        padding 12.5px 19.5px 7px
        border-radius 10px
        border 1px solid rgba(white, .08)

        @media $small-wide-max
            padding 8px 8px 5px
            border 1px solid rgba(white, .12)

            :global(.Text)
                font-size 1.5rem
        
        @media $small-max
            :global(.Text)
                font-size 1.3rem

        :global(.Text)
            margin-bottom 0 !important
</style>
