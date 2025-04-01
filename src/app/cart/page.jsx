import React from "react";
import { orderDummyData } from "@/assets/assets";
import { OrderItems } from "@/components/OrderItems";
import OrderSummary from "@/components/OrderSummary";

const orderDummyDataArr = orderDummyData;

const Cart = () => {
  // Group products by product ID and sum quantities
  const groupedProducts = orderDummyDataArr.reduce((acc, order) => {
    const productId = order.items[0].product._id;
    if (!acc[productId]) {
      acc[productId] = {
        ...order.items[0].product,
        quantity: order.items[0].quantity,
      };
    } else {
      acc[productId].quantity += order.items[0].quantity;
    }
    return acc;
  }, {});


  // Convert the grouped products back to an array
  const uniqueProducts = Object.values(groupedProducts);

  const total = uniqueProducts.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex gap-2">
          {/* YOUR CART  */}
          <div className="w-[70%]">
            <div className="flex items-center justify-between border-b py-5">
              <h1 className="font-bold text-3xl">
                Your <span className="text-orange-400">Cart</span>
              </h1>
              <div>{orderDummyDataArr.length} Items</div>
            </div>
            <OrderItems products={uniqueProducts} />
          </div>

          {/* ORDER SUMMARY  */}
          <OrderSummary items={orderDummyDataArr.length} total={total} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
 