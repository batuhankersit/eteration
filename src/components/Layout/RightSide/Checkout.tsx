import { useApp } from "@/context/AppContext";
import { useEffect, useState } from "react";

function Checkout() {
  const { cart } = useApp();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((x) => (price += Number(x.price) * x.count));
    setTotalPrice(price);
  }, [cart]);

  return (
    <div className="mb-5">
      <span className="text-[12px] text-grey">Checkout</span>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-white mt-[6px]">
        <p className="text-[14px]">
          <span>Total Price: </span>
          <span className="text-primary font-bold">{totalPrice}₺</span>
        </p>
        <button className="bg-primary text-white w-full rounded h-[30px]">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
