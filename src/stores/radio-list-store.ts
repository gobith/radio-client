import { writable } from "svelte/store";

const radio_list = writable(null);

export default radio_list;

fetch("/data/radio_list.json")
  .then((res) => res.text())
  .then((data) => {
    let objects = JSON.parse(data);
    radio_list.set(objects);
  });
