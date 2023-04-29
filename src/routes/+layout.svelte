<script type="ts">
    import { unhandledException } from "$lib/stores";
</script>

{#if $unhandledException}
    <h1>Error</h1>
    {$unhandledException}
{:else}
    <slot />
{/if}
