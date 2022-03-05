import { writable } from "svelte/store";

const item = writable(null);

export default item;

fetch("/data/current.json")
  .then((res) => res.text())
  .then((data) => {
    let object = JSON.parse(data);
    item.set(object);
  });

export const play = (selectedItem) => {
  item.update(() => {
    return selectedItem;
  });

  fetch("play", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedItem),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
