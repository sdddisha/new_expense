import React,{useState} from 'react';
import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initalProducts = [
    {
      id: "e1",
      title: "iphone",
      amount: 50000,
      date: new Date(2021, 2, 25),
    },
    {
      id: "e2",
      title: "galaxy s30",
      amount: 45000,
      date: new Date(2022, 2, 26),
    },
    {
      id: "e3",
      title: "mi note 10",
      amount: 25000,
      date: new Date(2021, 2, 27),
    },
    {
      id: "e4",
      title: "Nokia",
      amount: 2400,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e5",
      title: "realme x7",
      amount: 34000,
      date: new Date(2020, 7, 21),
    },
    {
      id: "e6",
      title: "Vivo",
      amount: 21000,
      date: new Date(2019, 5, 2),
    },
  ];
  const [products, setNewProducts] = useState(initalProducts);

  const addExpenseHandler = (expenses) => {
    setNewProducts((prevProducts) => {
      return [...prevProducts, expenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses product={products} />
    </div>
  );
}
export default App;
