<script lang="ts">
    import CardWrapper from './../lib/components/CardWrapper.svelte'
    import Availability from '$lib/components/Availability.svelte'
    import Title from '$lib/components/Title.svelte'
    import Card from '$lib/components/Card.svelte'
    import Container from '$lib/components/Container.svelte'
    import Hero from '$lib/components/Hero.svelte'
    import About from '$lib/components/About.svelte'
    import Skills from '$lib/components/Skills.svelte'
    import Contact from '$lib/components/Contact.svelte'
    import Image from '$lib/components/Image.svelte'
</script>

<Availability />
<Hero />
<Container>
    <Image />
    <About />
    <Title tag="h2" align="center"><span>Featured</span> projects</Title>
    <CardWrapper>
        <Card
            project="hotel"
            title="CPI Hotels"
            desc="5 unique hotels, 3 types, multilingual, individual styles."
            href="https://www.comforthotelpraguecityeast.com/en/"
            src="projects/hotel"
        ></Card>
        <Card
            project="centre"
            title="CPI Shopping Centres"
            desc="13 unique shopping centers across Czech Republic"
            href="https://www.ncfenix.cz/"
            src="projects/centre"
        ></Card>
        <Card
            project="tereos"
            title="Tereos TTD"
            desc="Leading sugar and alcohol producer, fostering sustainability and growth."
            href="https://tereos-ttd.com/"
            src="projects/tereos"
        ></Card>
        <Card
            project="ddf"
            title="KPMG Digital Design"
            desc="Digital Design Framework ensures clarity and systematic implementation."
            href="https://kpmg-digital-design.com/"
            src="projects/ddf"
        ></Card>
        <Card
            project="barbora"
            title="Barbora Valášková"
            desc="Discover Valášková's intimate world through serene blue-toned evocative paintings."
            href="https://bv.giant4.cz/en"
            src="projects/barbora"
        ></Card>
        <Card
            project="rsts"
            title="Raiffeisen Bank - NDA"
            desc="Designed UI library for Raiffeisen Bank's financial management."
            href=""
            src="projects/rsts"
            technology="SvelteKit"
        ></Card>
    </CardWrapper>
    <Skills />
    <Contact />
</Container>
