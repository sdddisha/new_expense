import React from 'react';
import './App.css';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
      const products= [
        {
            id:'e1',
            title:'iphone',
            amount:50000,
         date:new Date(2021,2,25),
    
        },
        {
         id:'e2',
         title:'galaxy s30',
         amount:45000,
      date:new Date(2021,2,26),
    
     },
     {
         id:'e3',
         title:'mi note 10',
         amount:25000,
      date: new Date(2021,2,27),
    
     },
     {
      id:'e4',
      title:'realme x7',
      amount:34000,
   date: new Date(2021,2,28),
 
  }
    ]
    const addExpenseHandler=(expenses)=>{
       const expenseData={
          ...expenses
       }
      console.log(expenseData);

    }

      return (
        <>
         
        <div className="App">
           <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses products={products} />
        </div>
      </>
      );
    }
export default App;
