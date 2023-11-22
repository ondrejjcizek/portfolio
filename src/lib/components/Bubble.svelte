<script>
    import Text from './Text.svelte'
</script>

<div class="Bubble">
    <Text color="white" align="center"><slot /></Text>
</div>

<style lang="stylus">
    .Bubble
        padding 12.5px 19.5px
        border-radius 10px
        border 1px solid rgba(white, .05)
</style>
