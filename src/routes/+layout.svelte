<script lang="ts">
    let handleError = () => {
        console.log('Error Handler Fired');
    };
</script>
<svelte:window on:error={handleError}/>
<h1>Example App</h1>
<slot />
