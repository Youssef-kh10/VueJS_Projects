const achraf = document.querySelector("input");
const hassan = document.querySelector("button");
const ouahidi = document.querySelector("ul");

function rigl() {
  console.log("done");
  const goal = achraf.value;
  const liEl = document.createElement("li");
  liEl.innerText = goal;
  ouahidi.appendChild(liEl);
  achraf.value = " ";
}

hassan.addEventListener("click", rigl);
