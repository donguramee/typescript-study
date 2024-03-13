import React, { useState } from "react";
import "./App.css";
import BestMenu from "./components/BestMenu";
import Store from "./components/Store";
import { Address, Restaurant } from "./model/restaurant";

let data: Restaurant = {
  name: "동그라미 식당",
  category: "western",
  address: { city: "ulsan", detail: "somewhere", zipCode: 1234567 },
  menu: [
    { name: "lose pasta", price: 8000, category: "Pasta" },
    { name: "tomato pasta", price: 7500, category: "Pasta" },
    { name: "cream risotto", price: 9000, category: "Risotto" },
    { name: "t-bone steak", price: 18000, category: "Steak" },
  ],
};

const App: React.FC = () => {
  //함수컴포넌트는 React.FC로 타입 지정
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAdress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenu = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAdress} />
      <BestMenu name="불고기피자" category="피자" showBestMenu={showBestMenu} />
    </div>
  );
};

export default App;
