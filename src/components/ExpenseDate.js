import React from 'react';
// used arrow function syntax below
import './ExpenseDate.css'
const ExpenseDate=(props)=>{ 
    let month= props.date.toLocaleString('en-US',{month:'long'})
    let day= props.date.toLocaleString('en-US',{day:'2-digit'})
    let year= props.date.getFullYear()

return(
   
        <div className="expense-date ">
        <div className="expense-date__day">
        Day:{day}</div>
        <div className="expense-date__month">
        Month:{month}</div>
        <div className="expense-date__year">
        Year:{year}
        </div>
        </div>
    
    )
}
export default ExpenseDate;