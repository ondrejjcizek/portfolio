<script lang="ts">
    interface $$Props {
        align?: 'left' | 'right' | 'center'
        color?: 'black' | 'white' | 'grey' | 'inherit'
        size?: 'sm' | 'md'
        tag?: 'p'
    }

    export let align: $$Props['align'] = 'left'
    export let color: $$Props['color'] = 'white'
    export let size: $$Props['size'] = 'md'
    export let tag: $$Props['tag'] = 'p'
</script>

<svelte:element this={tag} class={`Text ${size} ${align} ${color}`}>
    <slot />
</svelte:element>

<style lang="stylus">
    .Text
        margin 0
        transition color .6s ease

    .md
        line-height (44/36)
        font-size 1.5rem
        line-height (36/22)

        @media $small-wide-up
            font-size rvw(15, 18, $fromMedia: $viewports.smallWide.min, $toMedia: $viewports.xlarge.max)

        @media $xxlarge-up
            font-size 1.8rem
    
    .center
        text-align center
    
    .left
        text-align left

    .white
        color white
    
    .grey
        color #6C6D72
    
    .black
        color black
</style>
