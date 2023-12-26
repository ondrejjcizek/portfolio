<script>
    import Text from './Text.svelte'
    import Title from './Title.svelte'
</script>

<div class="Skills">
    <Title>My skill set</Title>
    <ul>
        <li><Text>SvelteKit</Text></li>
        <li><Text>Vanilla JS</Text></li>
        <li><Text>REST / GraphQL</Text></li>
        <li><Text>Stylus / Sass</Text></li>
        <li><Text>Git</Text></li>
        <li><a href="/threlte"><Text>Threlte</Text></a></li>
    </ul>
</div>

<style lang="stylus">
    .Skills
        position relative
        z-index 2
        margin-bottom percentage(200/1100)

        @media $small-wide-max
            margin-bottom percentage(250/1100)

        :global(.Title)
            text-align center
            letter-spacing 0
            margin-bottom percentage(68/1100)
            
            @media $small-wide-max
                margin-bottom 40px
        
        ul
            display flex
            flex-wrap wrap
            column-gap 8px
            row-gap 10px
            max-width 802px
            margin 0 auto
            padding-left 0
            user-select none

            li
                display grid
                place-items center
                list-style-type none
                text-align center
                border 1px solid rgba(white, .05)
                width calc(50% - 4px)
                min-height 44px
                border-radius 10px
                line-height 1

                @media $medium-up
                    min-height 56px

                :global(.Text)
                    position relative
                    top 2px
                
                a
                    display grid
                    place-items center
                    text-decoration none
                    width 100%
                    height 100%
                    border 1px solid transparent
                    background transparent
                    border-radius 10px
                    border 1px solid rgba(#FF5B28, 0.3)
                    transition border .3s ease, background .3s ease
                    cursor none

                    &:hover
                        border 1px solid #FF5B28
                        background #FF5B28

</style>
