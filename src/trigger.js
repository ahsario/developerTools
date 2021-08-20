export const trigger = (str, el1, el2) => {
  if (str === "el1") {
    el2.classList.add("unvisible");
    el1.classList.remove("unvisible");
  } else {
    el1.classList.add("unvisible");
    el2.classList.remove("unvisible");
  }
};
