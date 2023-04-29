import { writable, type Writable } from 'svelte/store';

export const unhandledException: Writable<string | null> = writable();