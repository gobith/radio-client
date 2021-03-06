import { writable } from "svelte/store";

const display = writable({ station: "NONE", status: "OFF" });

export default display;

const updateDisplay = (data) => {
  display.set(data);
};

fetch("display")
  .then((response) => response.json())
  .then((data) => {
    updateDisplay(data);
  });

export const change_station = (selectedItem) => {
  console.log("selected item", selectedItem);
  fetch("change_station", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedItem),
  })
    .then((response) => response.json())
    .then((data) => {
      updateDisplay(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const play = () => {
  fetch("play", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateDisplay(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const stop = () => {
  fetch("stop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateDisplay(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const next = () => {
  fetch("next", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateDisplay(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const prev = () => {
  fetch("prev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateDisplay(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
