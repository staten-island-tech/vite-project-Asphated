import "../css/style.css";
import { computers } from "./computer";

const DOMselectors = {
  card: document.querySelector(".card"),
  container: document.querySelector(".card-container"),
  price: document.getElementById("price-filter"),
  cpu: document.getElementById("cpu-filter"),
  ram: document.getElementById("ram-filter"),
  gpu: document.getElementById("gpu-filter"),
  applyButton: document.getElementById("apply-filters"),
};

function createcardHTML(computer) {
  return `
      <div class="card">
        <h2>${computer.name}</h2>
        <p>${computer.description}</p>
        <p class="price">$${computer.price}</p>
        <p>Processor: ${computer.processor}</p>
        <p>RAM: ${computer.ram}</p>
        <p>Storage: ${computer.storage}</p>
        <p>GPU: ${computer.gpu}</p>
        <img src="${computer.image}" alt="Placeholder PC" />
      </div>
    `;
}

function addcardHTML(filteredComputers) {
  DOMselectors.container.innerHTML = "";
  filteredComputers.forEach((computer) => {
    DOMselectors.container.insertAdjacentHTML(
      "beforeend",
      createcardHTML(computer),
    );
  });
}

function filterComputers() {
  const maxPrice = parseInt(DOMselectors.price.value) || Infinity;
  const selectedCPU = DOMselectors.cpu.value;
  const selectedRAM = DOMselectors.ram.value;
  const selectedGPU = DOMselectors.gpu.value;

  const filteredComputers = computers.filter((computer) => {
    const priceMatch = computer.price <= maxPrice;
    const cpuMatch =
      selectedCPU === "Any" || computer.processor.includes(selectedCPU);
    const ramMatch =
      selectedRAM === "Any" || computer.ram.includes(selectedRAM);
    const gpuMatch =
      selectedGPU === "Any" || computer.gpu.includes(selectedGPU);

    return priceMatch && cpuMatch && ramMatch && gpuMatch;
  });
  DOMselectors.container.innerHTML = "";
  if (filteredComputers.length === 0) {
    DOMselectors.container.innerHTML = "<p>No computers :(</p>";
  } else {
    addcardHTML(filteredComputers);
  }
}

document.querySelector("#mode-toggle").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

DOMselectors.applyButton.addEventListener("click", filterComputers);
addcardHTML(computers);
