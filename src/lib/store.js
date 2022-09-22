import { writable } from "svelte/store";

let todos_value;

export const todos = writable([]);

export const unSubscribe = todos.subscribe((value) => {
  todos_value = value;
});
