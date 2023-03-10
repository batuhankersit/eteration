import { useApp } from "@/context/AppContext";
import { ICart } from "@/models/cart.model";

function Cart() {
  const { cart, updateItemOnCart } = useApp();

  return (
    <div className="mb-5">
      <span className="text-[12px] text-grey">Cart</span>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-white mt-[6px]">
        {cart.map((item: ICart) => {
          return (
            <div className="w-full flex gap-[15px] mb-[15px]" key={item?.id}>
              {/* Ürün adı ve fiyatı */}
              <div className="w-full text-gray-700 text-sm font-semibold whitespace-nowrap">
                <p className="text-[12px] max-w-[100px] whitespace-normal">
                  {item?.name}
                </p>
                <p className="text-[10px] text-primary">{item?.price}₺</p>
              </div>

              {/* Sepetteki Ürün sayısı */}
              <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
                <button
                  onClick={() => updateItemOnCart(item, "negative")}
                  className="bg-black-light w-[25px] h-[25px] rounded-l cursor-pointer outline-none"
                >
                  <span>−</span>
                </button>
                <input
                  type="number"
                  className="outline-none focus:outline-none text-center w-[28px] h-[27px] bg-primary font-semibold text-md cursor-default flex items-center outline-none text-white"
                  name="product-number"
                  value={item?.count}
                  readOnly
                ></input>
                <button
                  onClick={() => updateItemOnCart(item, "positive")}
                  className="bg-black-light w-[25px] h-[25px] rounded-l cursor-pointer outline-none"
                >
                  <span>+</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
