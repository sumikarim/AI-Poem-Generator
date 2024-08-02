function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is a poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);
