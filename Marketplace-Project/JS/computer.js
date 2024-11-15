const computers = [
  {
    name: "Budget Desktop PC",
    price: 400,
    processor: "Intel i3",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/757/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/038/849/048/non_2x/3d-rendered-gaming-pc-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/752/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/792/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/762/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/736/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/040/525/356/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/788/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/733/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "Reliable desktop for multitasking and business applications.",
  },
  {
    name: "VR-Ready Gaming PC",
    price: 1200,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 2060",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/525/361/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/047/246/721/non_2x/pc-gaming-3d-illustration-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/795/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
    description: "Lightweight and sleek, perfect for professionals on the go.",
  },
  {
    name: "High-End Gaming PC",
    price: 1500,
    processor: "AMD Ryzen 7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 3060",
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/048/384/219/non_2x/a-computer-case-with-purple-lights-on-it-on-transparent-background-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
    description: "Versatile laptop for both gaming and productivity.",
  },
  {
    name: "Developer PC",
    price: 1200,
    processor: "AMD Ryzen 5",
    ram: "32GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/757/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/788/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
    description: "A powerhouse for 4K gaming and high-demand tasks.",
  },
  {
    name: "Professional Workstation",
    price: 2500,
    processor: "Intel Xeon",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "Quadro",
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/736/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "Built for CAD, 3D modeling, and intensive applications.",
  },
  {
    name: "AI Research PC",
    price: 3000,
    processor: "AMD Ryzen 9",
    ram: "64GB",
    storage: "2TB SSD",
    gpu: "RTX 3090",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/525/356/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/736/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "Basic desktop for web browsing and simple office tasks.",
  },
  {
    name: "Portable Student Laptop",
    price: 550,
    processor: "AMD Ryzen 3",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/757/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/752/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "Ideal for 4K video editing and heavy media projects.",
  },
  {
    name: "Basic Chromebook",
    price: 250,
    processor: "MediaTek MT8183",
    ram: "4GB",
    storage: "64GB eMMC",
    gpu: "Integrated",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/525/356/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
    description: "Compact design, great for a home office setup.",
  },
  {
    name: "Budget Gaming PC",
    price: 800,
    processor: "AMD Ryzen 5",
    ram: "16GB",
    storage: "256GB SSD",
    gpu: "GTX 1650",
    image:
      "https://static.vecteezy.com/system/resources/previews/042/169/752/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "A budget-friendly gaming PC for casual gamers.",
  },
  {
    name: "Premium Business Laptop",
    price: 1600,
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "Integrated",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/788/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/048/412/788/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
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
    image:
      "https://static.vecteezy.com/system/resources/previews/051/964/602/non_2x/modern-pc-isolate-on-transparency-background-png.png",
    description: "Ideal for VR and immersive simulation experiences.",
  },
  {
    name: "Graphics Intensive Desktop",
    price: 2800,
    processor: "Intel i9",
    ram: "64GB",
    storage: "1TB SSD",
    gpu: "RTX 3080 Ti",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/525/356/non_2x/ai-generated-3d-rendering-of-a-gaming-pc-on-transparent-background-ai-generated-png.png",
    description: "Powerful graphics setup for rendering and design projects.",
  },
];

export { computers };
