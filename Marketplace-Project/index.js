const DOMselectors = {
  card: document.querySelector(".card"),
  container: querySelector(".card-container"),
};
const computers = [
  {
    name: "Budget Desktop PC",
    price: 400,
    description:
      "Entry-level Intel i3 CPU, 8GB RAM, 256GB SSD. Ideal for web browsing, light office tasks, and media streaming.",
  },
  {
    name: "Compact Office PC",
    price: 450,
    description:
      "AMD Athlon processor, 8GB RAM, 500GB HDD. Small form factor, perfect for simple productivity tasks.",
  },
  {
    name: "Home Media Center PC",
    price: 500,
    description:
      "Intel Celeron, 8GB RAM, 1TB HDD, integrated graphics. Designed for multimedia consumption, movie streaming, and light work.",
  },
  {
    name: "Entry Gaming PC",
    price: 650,
    description:
      "AMD Ryzen 3 CPU, 8GB RAM, GTX 1050 GPU, 512GB SSD. Good for casual gaming and everyday tasks.",
  },
  {
    name: "Student Laptop",
    price: 700,
    description:
      "Intel i5 processor, 8GB RAM, 256GB SSD. Portable laptop ideal for schoolwork and light productivity.",
  },
  {
    name: "Creative Workstation",
    price: 900,
    description:
      "AMD Ryzen 5, 16GB RAM, 512GB SSD, GTX 1650 GPU. Good for photo editing and creative applications.",
  },
  {
    name: "Office All-in-One PC",
    price: 750,
    description:
      "Intel i5 processor, 8GB RAM, 1TB HDD. Integrated monitor and hardware for space-saving setups.",
  },
  {
    name: "Gaming Laptop",
    price: 1000,
    description:
      "Intel i5 processor, 16GB RAM, GTX 1660 Ti GPU, 512GB SSD. Solid performance for gaming on the go.",
  },
  {
    name: "Business Desktop",
    price: 850,
    description:
      "Intel i7 processor, 16GB RAM, 512GB SSD. Reliable for multitasking and business applications.",
  },
  {
    name: "VR-Ready Gaming PC",
    price: 1200,
    description:
      "AMD Ryzen 5, 16GB RAM, RTX 2060 GPU, 1TB SSD. Capable of VR gaming and high-performance tasks.",
  },
  {
    name: "Home Office Workstation",
    price: 950,
    description:
      "Intel i7 processor, 16GB RAM, 1TB HDD, 256GB SSD. Ideal for remote work and heavy multitasking.",
  },
  {
    name: "Ultrabook Laptop",
    price: 1100,
    description:
      "Intel i7, 16GB RAM, 512GB SSD, lightweight design. Sleek and portable for professionals on the go.",
  },
  {
    name: "High-End Gaming PC",
    price: 1500,
    description:
      "AMD Ryzen 7, 16GB RAM, RTX 3060 GPU, 1TB SSD. Smooth performance for AAA games at high settings.",
  },
  {
    name: "Content Creation Workstation",
    price: 1800,
    description:
      "Intel i7, 32GB RAM, RTX 3070 GPU, 1TB SSD. Great for video editing and graphic design.",
  },
  {
    name: "Hybrid Gaming/Work Laptop",
    price: 1400,
    description:
      "Intel i7, 16GB RAM, RTX 3060, 1TB SSD. Versatile for gaming and productivity.",
  },
  {
    name: "Developer PC",
    price: 1200,
    description:
      "AMD Ryzen 5, 32GB RAM, 512GB SSD. Optimized for coding, multitasking, and debugging.",
  },
  {
    name: "Gaming Tower PC",
    price: 2000,
    description:
      "Intel i9, 32GB RAM, RTX 3080 GPU, 2TB SSD. Powerful setup for 4K gaming and high-demand tasks.",
  },
  {
    name: "Professional Workstation",
    price: 2500,
    description:
      "Intel Xeon, 64GB RAM, Quadro GPU, 2TB SSD. Built for CAD, 3D modeling, and intensive applications.",
  },
  {
    name: "AI Research PC",
    price: 3000,
    description:
      "AMD Ryzen 9, 64GB RAM, RTX 3090 GPU, 2TB SSD. High-performance setup for AI and machine learning.",
  },
  {
    name: "Ultimate Gaming Rig",
    price: 4000,
    description:
      "Intel i9, 128GB RAM, dual RTX 3090 GPUs, 4TB SSD. Top-tier performance for extreme gaming and rendering.",
  },
];

function createcardHTML(computer) {
  return `
      <div class="card">
        <h2>${computer.name}</h2>
        <p>${computer.description}</p>
        <p class="price">$${computer.price}</p>
      </div>
    `;
}

function addcardHTML() {
  computers.forEach((computer) => {
    DOMselectors.container.insertAdjacentHTML(;
  });
}
