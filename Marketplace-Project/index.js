const DOMselectors = {
  card: document.querySelector(".card"),
  container: document.querySelector(".card-container"),
  price: document.getElementById("price-filter"),
  cpu: document.getElementById("cpu-filter"),
  ram: document.getElementById("ram-filter"),
  gpu: document.getElementById("gpu-filter"),
  applyButton: document.getElementById("apply-filters"),
};

const computers = [
  {
    name: "Budget Desktop PC",
    price: 400,
    processor: "Intel i3",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    description:
      "An entry-level desktop ideal for web browsing, light office tasks, and media streaming.",
  },
  {
    name: "Compact Office PC",
    price: 450,
    processor: "AMD Athlon",
    ram: "8GB",
    storage: "500GB HDD",
    gpu: "Integrated",
    description:
      "A small, budget-friendly desktop for basic productivity tasks.",
  },
  {
    name: "Home Media Center PC",
    price: 500,
    processor: "Intel Celeron",
    ram: "8GB",
    storage: "1TB HDD",
    gpu: "Integrated",
    description:
      "Designed for multimedia consumption, this PC is perfect for streaming and light work.",
  },
  {
    name: "Entry Gaming PC",
    price: 650,
    processor: "AMD Ryzen 3",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "GTX 1050",
    description:
      "Good for casual gaming and everyday tasks with basic graphics capabilities.",
  },
  {
    name: "Student Laptop",
    price: 700,
    processor: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    description:
      "A portable laptop suited for schoolwork and light productivity tasks.",
  },
  {
    name: "Creative Workstation",
    price: 900,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "GTX 1650",
    description:
      "A capable workstation for photo editing and creative applications.",
  },
  {
    name: "Office All-in-One PC",
    price: 750,
    processor: "Intel i5",
    ram: "8GB",
    storage: "1TB HDD",
    gpu: "Integrated",
    description:
      "Compact all-in-one design for office use, great for space-saving setups.",
  },
  {
    name: "Gaming Laptop",
    price: 1000,
    processor: "Intel i5",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "GTX 1660 Ti",
    description:
      "A solid gaming laptop with decent performance for gaming on the go.",
  },
  {
    name: "Business Desktop",
    price: 850,
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    description: "Reliable desktop for multitasking and business applications.",
  },
  {
    name: "VR-Ready Gaming PC",
    price: 1200,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 2060",
    description:
      "Capable of VR gaming and high-performance tasks, ideal for gamers.",
  },
  {
    name: "Home Office Workstation",
    price: 950,
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB HDD, 256GB SSD",
    gpu: "Integrated",
    description:
      "A robust home office workstation built for remote work and multitasking.",
  },
  {
    name: "Ultrabook Laptop",
    price: 1100,
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    description: "Lightweight and sleek, perfect for professionals on the go.",
  },
  {
    name: "High-End Gaming PC",
    price: 1500,
    processor: "AMD Ryzen 7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 3060",
    description:
      "High-end gaming desktop with smooth performance for AAA games.",
  },
  {
    name: "Content Creation Workstation",
    price: 1800,
    processor: "Intel i7",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "RTX 3070",
    description:
      "Designed for video editing and graphic design with powerful processing and GPU.",
  },
  {
    name: "Hybrid Gaming/Work Laptop",
    price: 1400,
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 3060",
    description: "Versatile laptop for both gaming and productivity.",
  },
  {
    name: "Developer PC",
    price: 1200,
    processor: "AMD Ryzen 5",
    ram: "32GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    description:
      "Optimized for coding and multitasking, perfect for developers.",
  },
  {
    name: "Gaming Tower PC",
    price: 2000,
    processor: "Intel i9",
    ram: "32GB",
    storage: "2TB SSD",
    gpu: "RTX 3080",
    description: "A powerhouse for 4K gaming and high-demand tasks.",
  },
  {
    name: "Professional Workstation",
    price: 2500,
    processor: "Intel Xeon",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "Quadro",
    description: "Built for CAD, 3D modeling, and intensive applications.",
  },
  {
    name: "AI Research PC",
    price: 3000,
    processor: "AMD Ryzen 9",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "RTX 3090",
    description:
      "High-performance setup for AI and machine learning applications.",
  },
  {
    name: "Ultimate Gaming Rig",
    price: 4000,
    processor: "Intel i9",
    ram: "128GB",
    storage: "4TB SSD",
    gpu: "Dual RTX 3090",
    description:
      "Top-tier gaming and rendering setup for the ultimate performance.",
  },
  {
    name: "Light Office Desktop",
    price: 300,
    processor: "Intel Pentium",
    ram: "4GB",
    storage: "128GB SSD",
    gpu: "Integrated",
    description: "Basic desktop for web browsing and simple office tasks.",
  },
  {
    name: "Portable Student Laptop",
    price: 550,
    processor: "AMD Ryzen 3",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    description:
      "Portable and efficient for schoolwork and everyday productivity.",
  },
  {
    name: "4K Editing Workstation",
    price: 2200,
    processor: "Intel i9",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "RTX 3080 Ti",
    description: "Ideal for 4K video editing and heavy media projects.",
  },
  {
    name: "Basic Chromebook",
    price: 250,
    processor: "MediaTek MT8183",
    ram: "4GB",
    storage: "64GB eMMC",
    gpu: "Integrated",
    description:
      "Lightweight and affordable Chromebook for web browsing and online classes.",
  },
  {
    name: "Small Form Factor PC",
    price: 700,
    processor: "Intel i5",
    ram: "8GB",
    storage: "500GB SSD",
    gpu: "Integrated",
    description: "Compact design, great for a home office setup.",
  },
  {
    name: "Budget Gaming PC",
    price: 800,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "256GB SSD",
    gpu: "GTX 1650",
    description: "A budget-friendly gaming PC for casual gamers.",
  },
  {
    name: "Premium Business Laptop",
    price: 1600,
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "Integrated",
    description:
      "A sleek and professional laptop for business tasks, travel-friendly.",
  },
  {
    name: "All-in-One Desktop",
    price: 950,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "1TB HDD",
    gpu: "Integrated",
    description:
      "A space-saving all-in-one PC, perfect for office environments.",
  },
  {
    name: "High-Performance Laptop",
    price: 2000,
    processor: "Intel i9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "RTX 3060",
    description:
      "A versatile high-performance laptop for multitasking and gaming.",
  },
  {
    name: "Virtual Reality Ready Desktop",
    price: 2500,
    processor: "AMD Ryzen 9",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "RTX 3090",
    description: "Ideal for VR and immersive simulation experiences.",
  },
  {
    name: "Graphics Intensive Desktop",
    price: 2800,
    processor: "Intel i9",
    ram: "64GB",
    storage: "1TB SSD",
    gpu: "RTX 3080 Ti",
    description: "Powerful graphics setup for rendering and design projects.",
  },
  // Continue adding up to 80 computers as needed with descriptions.
];

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
        <img src="PC.jpg" alt="Placeholder PC" />
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
