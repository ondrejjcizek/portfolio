<script lang="ts">
    import CardWrapper from './../lib/components/CardWrapper.svelte'
    import Availability from '$lib/components/Availability.svelte'
    import Title from '$lib/components/Title.svelte'
    import Card from '$lib/components/Card.svelte'
    import Container from '$lib/components/Container.svelte'
    import Hero from '$lib/components/Hero.svelte'
</script>

<Availability />
<Hero />
<Container>
    <Title tag="h2" align="center"><span>Featured</span> projects</Title>
    <CardWrapper>
        <Card
            project="hotel"
            title="CPI Hotels"
            desc="5 websites, 3 languagues & 3 hotels"
            href="https://www.comforthotelpraguecityeast.com/en/"
            src="projects/hotel.png"
            srcset="projects/hotel@2x.png 2x"
        ></Card>
        <Card
            project="centre"
            title="CPI Shopping Centres"
            desc="Front-End for 15 famous shopping malls "
            href="https://www.ncfenix.cz/"
            src="projects/centre.png"
            srcset="projects/centre@2x.png 2x"
        ></Card>
        <Card
            project="tereos"
            title="Tereos TTD"
            desc="Largest producer of sugar and alcohol in the Czech Republic"
            href="https://tereos-ttd.com/"
            src="projects/tereos.png"
            srcset="projects/tereos@2x.png 2x"
        ></Card>
        <Card
            project="ddf"
            title="KPMG Digital Design"
            desc="Digital Design Framework KPMG Czech Republic"
            href="https://kpmg-digital-design.com/"
            src="projects/ddf.png"
            srcset="projects/ddf@2x.png 2x"
        ></Card>
    </CardWrapper>
</Container>
