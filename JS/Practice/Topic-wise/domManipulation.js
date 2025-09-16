document.getElementById("myId");

document.getElementsByClassName("myClass");

document.getElementsByTagName("p");

document.querySelector(".myClass"); // first match
document.querySelectorAll(".myClass"); // all matches

element.textContent = "New Text";
element.innerHTML = "<b>Bold Text</b>";

element.setAttribute("src", "image.png");
element.getAttribute("src");
element.removeAttribute("alt");

element.style.color = "red";
element.style.backgroundColor = "yellow";

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");

const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);

element.remove();

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});

btn.addEventListener("click", () => console.log("Clicked!"));

btn.addEventListener("click", (e) => {
  console.log(e.target); // element clicked
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted without reload!");
});

document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
