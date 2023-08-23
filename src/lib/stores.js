import { writable } from "svelte/store";

export const activities = writable([]);
export const currentActivityIndex = writable(0);
