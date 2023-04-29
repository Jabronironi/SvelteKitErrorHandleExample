<script type="ts">
    import { browser } from "$app/environment";
    import { unhandledException } from "$lib/stores";
    import {serializeError} from 'serialize-error';  

    try {
        server.blowup();
        if (browser) {
            client.blowup();
        }
    } catch (error) {        
        $unhandledException = JSON.stringify(serializeError(error));
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
