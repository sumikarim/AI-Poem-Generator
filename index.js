function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemTheme = document.querySelector("#poem-theme");
  let apiKey = "7502o08039672a12etf0b0b4e6112ba9";
  let context = `Generate a short poem about ${poemTheme.value}`;
  let prompt =
    "You are an expert at writing poems. Please write short poem in basic HTML. Do not include the title of the poem. At the end of the poem sign 'The AI Poem Generator' in a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `Generating a poem about ${poemTheme.value}....`;

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);
