import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props){


    return (
        <>
        
        <div className="App">
       
        </div>
         
         <ExpenseItem title={props.products[0].title} 
         amount={props.products[0].amount} 
         date={props.products[0].date} 
         /> 
          <ExpenseItem title={props.products[1].title} 
         amount={props.products[1].amount} 
         date={props.products[1].date} 
         />
         <ExpenseItem title={props.products[2].title} 
         amount={props.products[2].amount} 
         date={props.products[2].date} 
         />
          <ExpenseItem title={props.products[3].title} 
         amount={props.products[3].amount} 
         date={props.products[3].date} 
         />
        
        </>
        
      )
}
export default Expenses;