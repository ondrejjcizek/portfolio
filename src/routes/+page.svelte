<script lang="ts">
    import CardWrapper from './../lib/components/CardWrapper.svelte'
    import Availability from '$lib/components/Availability.svelte'
    import Title from '$lib/components/Title.svelte'
    import Card from '$lib/components/Card.svelte'
    import Container from '$lib/components/Container.svelte'
</script>

<Container>
    <Availability />
    <Title tag="h2" align="center"
        ><span>Featured</span> projects</Title
    >
    <CardWrapper>
        <Card
            project="hotel"
            title="CPI Hotels"
            desc="5 websites, 3 languagues & 3 hotels"
            src="projects/hotel.png"
            srcset="projects/hotel@2x.png 2x"
        ></Card>
        <Card
            project="centre"
            title="CPI Shopping Centres"
            desc="Front-End for 15 famous shopping malls "
            src="projects/centre.png"
            srcset="projects/centre@2x.png 2x"
        ></Card>
        <Card
            project="tereos"
            title="Tereos TTD"
            desc="Largest producer of sugar and alcohol in the Czech Republic"
            src="projects/tereos.png"
            srcset="projects/tereos@2x.png 2x"
        ></Card>
        <Card
            project="ddf"
            title="KPMG Digital Design"
            desc="Digital Design Framework KPMG Czech Republic"
            src="projects/ddf.png"
            srcset="projects/ddf@2x.png 2x"
        ></Card>
    </CardWrapper>
</Container>
