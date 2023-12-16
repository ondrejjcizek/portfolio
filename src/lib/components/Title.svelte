<script lang="ts">
    interface $$Props {
        align?: 'left' | 'right' | 'center'
        color?: 'black' | 'white' | 'inherit'
        size?: 'md' | 'lg'
        tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    }

    export let align: $$Props['align'] = 'left'
    export let color: $$Props['color'] = 'white'
    export let size: $$Props['size'] = 'lg'
    export let tag: $$Props['tag'] = 'h2'
</script>

<svelte:element this={tag} class={`Title ${size} ${align} ${color}`}>
    <slot />
</svelte:element>

<style lang="stylus">
    .Title
        margin 0
        font-weight 500
        user-select none

        @media $medium-up
            font-weight 400
        
        :global(span)
            color #6C6D72

    .lg
        font-size 3.4rem
        letter-spacing -1px

        @media $small-wide-up
            font-size rvw(34, 60, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)

        @media $xxlarge-up
            font-size 6rem
    
    .md
        line-height (44/36)
        font-size 2rem
        letter-spacing -0.6px

        @media $small-wide-up
            font-size rvw(20, 36, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)

        @media $xxlarge-up
            font-size 3.6rem
    
    .center
        text-align center
    
    .left
        text-align left
</style>
