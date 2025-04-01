"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SuccessPage = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => setCount((prevCount) => prevCount - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (count === 0) {
      toast.success("Order placed Successfully");
    }
  }, [count]);

  useEffect(() => {
    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600">
          You will be redirected to home page in {count} seconds...
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
