import "./App.css";
import { Card } from "./components/Card.tsx";
import { ChaiCard } from "./components/ChaiCard";
import { ChaiList } from "./components/ChaiList";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  {
    id: 1,
    name: "Heavy Chai",
    price: 500,
  },
  {
    id: 2,
    name: "Light Chai",
    price: 50,
  },
  {
    id: 3,
    name: "Normal Chai",
    price: 100,
  },
];
function App() {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <ChaiCard name="Heavy Chai" price={500} />
        <ChaiCard name="Light Chai" price={50} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Order received:", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai aur Typescript" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
