import React from "react";
import { LineChart } from "../../components/LineChart";
 const recentTransactions = [
  {
    id: "0412ks4i",
    name: "Ahmed",
    date: "2021-09-21",
    amount: "$43.54",
  },
  {
    id: "5df9as7d",
    name: "Sara",
    date: "2021-10-15",
    amount: "$150.75",
  },
  {
    id: "9ad5fs2d",
    name: "John",
    date: "2021-11-05",
    amount: "$60.23",
  },
  {
    id: "7kfas92l",
    name: "Emily",
    date: "2021-12-01",
    amount: "$89.99",
  },
  {
    id: "4s9fjs2l",
    name: "Michael",
    date: "2021-08-30",
    amount: "$120.00",
  },
  {
    id: "2kd8as9l",
    name: "Rachel",
    date: "2021-07-21",
    amount: "$70.45",
  },
  {
    id: "1kd9as4m",
    name: "David",
    date: "2021-06-14",
    amount: "$33.10",
  },
  {
    id: "3jk9sd4a",
    name: "Mona",
    date: "2021-05-29",
    amount: "$56.78",
  },
  {
    id: "8sd8jk4l",
    name: "Tom",
    date: "2021-04-17",
    amount: "$99.95",
  },
  {
    id: "6kl9sj4a",
    name: "Nina",
    date: "2021-03-12",
    amount: "$45.67",
  },
];

export const Row2 = () => {
  const recentClasses = "dark:bg-gray-700 rounded p-3 mt-2";
  return (
    <div className="flex h-[500px] w-full flex-wrap">
      <div className=" h-full lg:block hidden  grow w-[70%]">
        <LineChart />
      </div>
      <div className="overflow-y-scroll h-[400px] mt-12 grow">
        <ul>
          <li className={recentClasses}>
            <h3 className="text-3xl  ">Recent Transcation</h3>
          </li>
          {recentTransactions.map((transaction) => (
            <li
              key={transaction.id}
              className={
                recentClasses + " flex row justify-between items-center"
              }
            >
              <div className="left">
                <div className="id fw-bold">{transaction.id}</div>
                <div className="name">{transaction.name}</div>
              </div>
              <div className="center">{transaction.date}</div>
              <div className="right bg-red-700 rounded-lg p-2">
                {transaction.amount}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
