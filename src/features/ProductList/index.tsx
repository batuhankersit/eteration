import Image from "next/image";

function ProductList() {
  return (
    <div className="gap-[30px] w-full lg:grid lg:grid-cols-4">
      <div className="col-span-1 p-[10px] bg-white cursor-pointer">
        {/* Ürünü fotoğrafı */}
        <div className="w-full h-[150px] relative mb-[15px]">
          <Image
            quality={100}
            title="Floripa+"
            src={"http://placeimg.com/640/480/sports"}
            alt="Floripa Mais Logo"
            loading="lazy"
            fill
          />
        </div>
        {/* ürün fiyatı */}
        <p className="text-primary text-[14px] mb-[15px]">15.000 ₺</p>
        <p className="text-[14px] mb-[15px]">iPhone 13 Pro Max 256Gb</p>
        <button className="bg-primary text-white w-full rounded px-4 py-2">
          Checkout
        </button>
      </div>
      <div className="col-span-1 p-[10px] bg-white cursor-pointer">
        {/* Ürünü fotoğrafı */}
        <div className="w-full h-[150px] relative mb-[15px]">
          <Image
            quality={100}
            title="Floripa+"
            src={"http://placeimg.com/640/480/sports"}
            alt="Floripa Mais Logo"
            loading="lazy"
            fill
          />
        </div>
        {/* ürün bilgileri */}
        <p className="text-primary text-[14px] mb-[15px]">15.000 ₺</p>
        <p className="text-[14px] mb-[15px]">iPhone 13 Pro Max 256Gb</p>
        <button className="bg-primary text-white w-full rounded px-4 py-2">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ProductList;
