const token = "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" ;
const image = document.getElementById("image");
const inputTxt = document.getElementById("input");
const button = document.getElementById("btn");

async function generateImage(input) {
  image.src = "loading-thinking.gif";
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
    {
      headers: { Authorization: `Bearer ${token}` },
      method: "POST",
      body: JSON.stringify({ inputs: inputTxt.value }),
    }
  );
  const result = await response.blob();
  return result;
}

button.addEventListener("click", async function () {
  generateImage(inputTxt).then((response) => {
    const objectURL = URL.createObjectURL(response);
    image.src = objectURL;
  });
});
