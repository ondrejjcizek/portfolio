<script lang="ts">
    import Title from './Title.svelte'
</script>

<section class="About">
    <Title tag="h2" align="center">About</Title>
    <div class="About-wrapper">
        <p>
            Detail-oriented <b>Frontend Developer</b> specializing in CSS precision and fluid
            animations. <b>I&nbsp;bring five years of expertise</b> in the realm of web development.
        </p>
        <p>
            Proficient in SvelteKit, my approach prioritizes thoroughness in coding practices to
            produce flawless designs and animations that elevate user experiences. Passionate about
            leveraging technology to create visually stunning and flawlessly executed frontend
            solutions.
        </p>
    </div>
</section>

<style lang="stylus">
    .About
        position relative
        z-index 2
        margin-bottom percentage(238/1100)
        user-select none

        @media $small-wide-max
            margin-bottom 96px

        :global(.Title)
            text-align left
            margin-bottom percentage(68/1100)
            
            @media $small-wide-max
                margin-bottom 32px

        @media $medium-up
            display grid
            grid-template-columns 0.25fr 0.75fr

        &-wrapper
            p
                font-size 1.6rem
                line-height (36/21)
                font-weight 400
                color #6C6D72
                margin 0 0 (37/21em)
                text-align left

                @media $medium-up
                    font-size rvw(16, 21)
                
                @media $xlarge-up
                    font-size 2.1rem

                &:last-child
                    margin-bottom 0

                b
                    font-weight 400
                    color white

</style>
