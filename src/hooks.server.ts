import type { HandleServerError } from '@sveltejs/kit';

export const handleError = (async ({ error, event }) => {
    return {
        message: 'Whoops!'
    };
}) satisfies HandleServerError;