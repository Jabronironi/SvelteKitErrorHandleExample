<script type="ts">
    import { browser } from "$app/environment";
    server.blowup();
    if (browser) {
        client.blowup();
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
