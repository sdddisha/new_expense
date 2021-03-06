import React ,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props){
  const [filteredYear ,setFilteredYear]=useState('2021');

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
    console.log(selectedYear)
    }
    console.log(filteredYear)
  const filteredExpenses=props.product.filter(products=>{
    return products.date.getFullYear().toString()===filteredYear;
  
  })
  //console.log(filteredYear);
    return (
        <>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={filterChangeHandler} />
        
         {/* using map function to loop through ExpenseItem component. i,e. Dynamic Calling.Here products is passed as a parameter to map function */}
        
         {filteredExpenses.map((products=>
         <ExpenseItem 
         key={products.id}
         title={products.title} 
         amount={products.amount} 
         date={products.date} 
         /> ))} 
         </Card>
</>
        //static calling of component ExpenseItem 
        //   <ExpenseItem title={props.product[0].title} 
        //  amount={props.product[0].amount} 
        //  date={props.product[0].date} 
        //  /> 
        //   <ExpenseItem title={props.product[1].title} 
        //  amount={props.product[1].amount} 
        //  date={props.product[1].date} 
        //  />
        //  <ExpenseItem title={props.product[2].title} 
        //  amount={props.product[2].amount} 
        //  date={props.product[2].date} 
        //  />
        //   <ExpenseItem title={props.product[3].title} 
        //  amount={props.product[3].amount} 
        //  date={props.product[3].date} 
        //  /> 
        
        
        
      )
}
export default Expenses;