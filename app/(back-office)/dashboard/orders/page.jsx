import OrderCard from "@/components/Order/OrderCard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function page() {
  //Fetch orders by userId
  const orders = await getData("orders");
  console.log(orders);
  const session = await getServerSession(authOptions);
  if (!session) return;

  const userId = session?.user?.id;
  console.log(userId);

  if (orders.length === 0 || !orders) {
    return <p>No Orders Yet</p>;
  }

  const userOrders = orders.filter((order) => order.userId === userId);
  // console.log(userOrders)
  return (
    <section className="py-12 bg-white dark:bg-slate-900 sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-50 sm:text-3xl">
              Your Orders
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-600 dark:text-gray-200">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {userOrders.map((order, i) => {
              return <OrderCard key={i} order={order} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
