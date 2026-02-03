const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "/images/products/product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "/images/products/product-2.png",
  },
  {
    name: "SportsOn SlowWin",
    category: "Running",
    price: 119000,
    imgUrl: "/images/products/product-3.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "/images/products/product-4.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "/images/products/product-5.png",
  },
  {
    name: "SportsOn SlowWin",
    category: "Running",
    price: 119000,
    imgUrl: "/images/products/product-6.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "/images/products/product-7.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "/images/products/product-8.png",
  },
];

const formatRupiah = (num: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {productList.map((p, index) => (
          <div key={index}>
            <div className="relative rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] aspect-square flex items-center justify-center">
              <button className="absolute top-3 right-3 w-6 h-6 rounded bg-primary text-white flex items-center justify-center text-sm">+</button>

              <img src={p.imgUrl} alt={p.name} className="w-[70%] h-auto" />
            </div>

            <div className="mt-3">
              <p className="font-semibold text-sm">{p.name}</p>
              <p className="text-xs text-gray-400">{p.category}</p>
              <p className="text-primary font-semibold text-sm">{formatRupiah(p.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
