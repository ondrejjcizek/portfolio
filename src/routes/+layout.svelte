<script lang="ts">
	import '$lib/styles/main.styl';
</script>

<div class="layout">
	<main class="main"><slot /></main>
</div>

<style lang="stylus">
	.layout
		background-color white
		color black
		display flex
		flex-direction column
		min-height 100vh

		.main
			flex-grow 1
</style>
