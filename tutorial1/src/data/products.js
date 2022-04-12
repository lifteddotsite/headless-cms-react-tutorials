// Simulate products database
// we'll soon replace with real data coming from a Headless CMS
const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 3,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 4,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $300",
          "International shipping available",
          "Expedited shipping options",
          "Signature required upon delivery",
        ],
      },
      // More sections...
    ],
  },
  // More products...
];

export function getProductById(productId) {
  // later this will be replaced by a graphql query to a Headless CMS
  const id = parseInt(productId);
  const found = products.filter((product) => product.id == id);
  if (found.length) return found[0];

  //error log if no product found
  console.error(`No product found for productId=[${productId}]`);
  return null;
}
