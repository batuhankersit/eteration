function Checkout() {
  return (
    <div className="mb-5">
      <span className="text-[12px] text-grey">Checkout</span>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-white mt-[6px]">
        <p className="text-[14px]">
          <span>Total Price: </span>
          <span className="text-primary font-bold">117.000₺</span>
        </p>
        <button className="bg-primary text-white w-full rounded h-[30px]">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
