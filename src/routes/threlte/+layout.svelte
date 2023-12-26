<script lang="ts">
    // console.log('jaja')
</script>

<div class="Scene">
    <nav class="SceneNavigation">
        <li><a class="Link" href="/threlte/rgb-distortion">RGB Distortion</a></li>
        <li><a class="Link" href="/threlte/outline">Outline</a></li>
        <li><a class="Link" href="/threlte/badge">Badge</a></li>
        <li><a class="Link" href="/threlte/giant">Giant</a></li>
    </nav>
    <slot />
</div>

<style lang="stylus">
    .Scene
        width: 100vw;
        height: 100vh;
        position: absolute;
        inset: 0;
        background: radial-gradient(hsl(28.62deg 37.82% 44.8%), hsl(220 20% 10%));
        background-attachment: fixed;

        nav
            position absolute
            top 24px
            left 50%
            transform translateX(-50%)
            display flex
            align-items center
            background white
            padding 12px 16px
            border-radius 10px
            gap 12px
            min-height 52px

            li
                margin 0
                list-style-type none

                a
                    color black
                    text-decoration none
                    padding 10px 6px 8px
                    border-radius 10px
                    font-size 14px
                    transition color .3s ease, background .3s ease
                    cursor none
                    white-space nowrap

                    &:hover
                        +hover()
                            color white
                            background black
</style>
