const button = document.getElementsByTagName("button")[0];
const headline = document.getElementsByTagName("h3")[0];

button.addEventListener("click", () => {
    headline.innerText = "text wurde geändert"
})

