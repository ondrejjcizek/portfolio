<script lang="ts">
    import Title from './Title.svelte'
</script>

<section class="About">
    <Title tag="h2" align="center">About</Title>
    <div class="About-wrapper">
        <p>
            Hey, I'm <b>Ondřej Čížek</b>, a 27-year-old Frontend Developer from the Czech Republic,
            currently shaping pixels and code <b>remotely</b> from the enchanting island of Bali.
        </p>
        <p>
            My expertise lies in meticulous CSS precision and crafting fluid animations, backed by
            over five years of dedicated experience in web development. I specialize in
            <b>SvelteKit</b>, leveraging this <b>framework</b> to engineer high-quality web solutions
            with a focus on flawless designs and engaging user interactions.
        </p>
        <p>
            Fueled by a passion for merging technology and <b>creativity</b>, I'm committed to
            delivering frontend solutions that not only function seamlessly but also captivate
            users, elevating their digital experiences.
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
