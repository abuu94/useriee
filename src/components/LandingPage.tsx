import React, { useState } from "react";
import FoodCard from "./FoodCard";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const LandingPage = () => {
  const foodItems = [
    {
      image: "https://via.placeholder.com/150",
      name: "Delicious Pizza",
      description: "A classic Italian pizza with fresh ingredients.",
      price: "12.99",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Tasty Burger",
      description: "A juicy burger with all the fixings.",
      price: "8.99",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Sushi Platter",
      description: "A variety of fresh sushi rolls.",
      price: "15.99",
    },
  ];

  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* <header className="bg-blue-500 text-white w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold">
          Welcome to Our Food Ordering System
        </h1>
      </header> */}
      <header className="bg-blue-500 text-white w-full p-4 shadow-md flex justify-between items-center">
        {" "}
        <h1 className="text-3xl font-bold">
          Welcome to Our Food Ordering System
        </h1>{" "}
        <div>
          {" "}
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded mr-2 hover:bg-gray-200"
            onClick={() => setOpen(true)}
          >
            Register
          </button>{" "}
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>{" "}
        </div>{" "}
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600">
            We offer a wide variety of delicious meals delivered right to your
            door.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </section>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4 text-center">
        <p>&copy; 2025 Our Food Ordering System. All rights reserved.</p>
      </footer>

      <RegisterModal open={open} setOpen={() => setOpen(false)} />

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={() => setLoginOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
