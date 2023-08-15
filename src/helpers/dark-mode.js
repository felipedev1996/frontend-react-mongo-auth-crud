const htmlElement = document.querySelector("html");

const btnToogle = document.querySelector("#toggle");

btnToogle.addEventListener("click", () => darkMode());

const darkMode = () => {
  htmlElement.classList.contains("dark")
    ? htmlElement.classList.remove("dark")
    : htmlElement.classList.add("dark");
};
