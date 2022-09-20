import { writable } from "svelte/store";

export let logo = writable()
export let modalOpen = writable(false);
export let modalBaseUrl = writable("");
export let modalImage = writable("")
export let allImages = writable()
export let modalImageSet = writable("")

export let w250 = writable("tr:w-250/");
export let w350 = writable("tr:w-350/");
export let w500 = writable("tr:w-500/");
export let w600 = writable("tr:w-600/");
export let w800 = writable("tr:w-800/");
export let w900 = writable("tr:w-900/");
export let w1200 = writable("tr:w-1200/");
export let w1440 = writable("tr:w-1440/");