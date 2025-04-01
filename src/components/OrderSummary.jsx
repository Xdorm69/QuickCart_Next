"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const OrderSummary = ({items, total}) => {
    const router = useRouter();
  const [orderSummary, setorderSummary] = useState({
    address: "",
    promoCode: "",
  });

  const totalAmount = total.toFixed(2);
  const tax = (0.02 * totalAmount).toFixed(2);

  const handleOrderPlace = () => {
    router.push('/success');

  }

  return (
    <div className="w-[30%] bg-gray-200 p-2">
      <h1 className="py-5 border-b font-semibold text-gray-600 text-2xl">
        Order Summary
      </h1>
      <form className="py-3 border-b flex flex-col gap-3">
        <div>
          <p>SELECT ADDRESS</p>
          <input
            type="text"
            name="address"
            value={orderSummary.address}
            onChange={(e) => setorderSummary({...orderSummary, address: e.target.value})}
            placeholder="Enter address"
            className="bg-white px-2 py-1 rounded mt-2 w-full"
          />
        </div>

        <div>
          <p>PROMO CODE</p>
          <input
            type="text"
            name="promoCode"
            value={orderSummary.promoCode}
            onChange={(e) => setorderSummary({...orderSummary, promoCode: e.target.value})}
            placeholder="Enter promo code"
            className="bg-white px-2 py-1 rounded mt-2 w-full"
          />
        </div>

        <button
          className="w-fit bg-orange-400 hover:bg-orange-600 transition px-6 py-2 text-white"
          type="submit"
        >
          Apply
        </button>
      </form>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between mt-5">
          <div>ITEMS {items}</div>
          <div>${totalAmount}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Shipping Fee</div>
          <div>0</div>
        </div>
        <div className="flex justify-between items-center pb-4 border-b">
          <div>Tax (2%)</div>
          <div>${tax}</div>
        </div>
      </div>

      <div className="pt-5 flex items-center justify-between">
        <h1>Total</h1>
        <div>
          ${(parseInt(totalAmount.split('.')[0]) + parseInt(tax.split(".")[0])).toFixed(2)}
        </div>
      </div>

      <button onClick={handleOrderPlace} className="w-full bg-orange-400 hover:bg-orange-600 transition text-white py-3 mt-5  mb-3">Place Order</button>
    </div>
  );
};

export default OrderSummary;
