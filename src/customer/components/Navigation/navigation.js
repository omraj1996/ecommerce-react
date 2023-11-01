export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            {
              name: "Dresses",
              id: "dresses",
              href: `{women/clothing/dresses}`,
            },
            { name: "Pants", id: "pants", href: `{women/clothing/pants}` },
            { name: "Denim", id: "denim", href: `{women/clothing/denim}` },
            {
              name: "Sweaters",
              id: "sweaters",
              href: `{women/clothing/sweaters}`,
            },
            {
              name: "T-Shirts",
              id: "t-shirts",
              href: `{women/clothing/t-shirts}`,
            },
            {
              name: "Jackets",
              id: "jackets",
              href: `{women/clothing/jackets}`,
            },
            {
              name: "Activewear",
              id: "activeWear",
              href: `{women/clothing/activeWear}`,
            },
            {
              name: "Browse All",
              id: "browseAll",
              href: `{women/clothing/browseAll}`,
            },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            {
              name: "Watches",
              id: "watches",
              href: `{women/accessories/watches}`,
            },
            {
              name: "Wallets",
              id: "wallets",
              href: `{women/accessories/wallets}`,
            },
            { name: "Bags", id: "bags", href: `{women/accessories/bags}` },
            {
              name: "Sunglasses",
              id: "sunglasses",
              href: `{women/accessories/sunglasses}`,
            },
            { name: "Hats", id: "hats", href: `{women/accessories/hats}` },
            { name: "Belts", id: "belts", href: `{women/accessories/belts}` },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            {
              name: "Full Nelson",
              id: "belts",
              href: `{women/brands/fullNelson}`,
            },
            { name: "My Way", id: "belts", href: `{women/brands/myWay}` },
            {
              name: "Re-Arranged",
              id: "belts",
              href: `{women/brands/reArranged}`,
            },
            {
              name: "Counterfeit",
              id: "belts",
              href: `{women/brands/counterfeit}`,
            },
            {
              name: "Significant Other",
              id: "belts",
              href: `{women/brands/significantOther}`,
            },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Kurta", id: "mens_kurta", href: `{men/clothing/mens_kurta}` },
            { name: "Pants", id: "belts", href: `{men/clothing/pants}` },
            { name: "Sweaters", id: "belts", href: `{men/clothing/sweaters}` },
            { name: "T-Shirts", id: "belts", href: `{men/clothing/t-shirts}` },
            { name: "Jackets", id: "belts", href: `{men/clothing/jackets}` },
            {
              name: "Activewear",
              id: "belts",
              href: `{men/clothing/activeWear}`,
            },
            {
              name: "Browse All",
              id: "belts",
              href: `{men/clothing/browseAll}`,
            },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "belts", href: `{men/accessories/watches}` },
            { name: "Wallets", id: "belts", href: `{men/accessories/wallets}` },
            { name: "Bags", href: `{men/accessories/bags}` },
            {
              name: "Sunglasses",
              id: "belts",
              href: `{men/accessories/sunglasses}`,
            },
            { name: "Hats", id: "belts", href: `{men/accessories/hats}` },
            { name: "Belts", id: "belts", href: `{men/accessories/belts}` },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            {
              name: "Re-Arranged",
              id: "belts",
              href: `{men/brands/reArranged}`,
            },
            {
              name: "Counterfeit",
              id: "belts",
              href: `{men/brands/conterfeit}`,
            },
            {
              name: "Full Nelson",
              id: "belts",
              href: `{men/brands/fullNelson}`,
            },
            { name: "My Way", id: "belts", href: `{men/brands/myWay}` },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
