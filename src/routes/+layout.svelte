<script lang="ts">
	import '../app.css';
	import Navbar from './navbar.svelte';
	import Footer from './footer.svelte';
</script>

<div class="flex flex-col h-screen">
	<Navbar />

	<div class="container mx-auto grow">
		<slot />
	</div>

	<Footer />
</div>
