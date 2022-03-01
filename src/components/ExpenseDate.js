import React from 'react';
// used arrow function syntax below

const ExpenseDate=(props)=>{ 
    let month= props.date.toLocaleString('en-US',{month:'long'})
    let day= props.date.toLocaleString('en-US',{day:'2-digit'})
    let year= props.date.getFullYear()

return(
    <>
    <h3>Day:{day}</h3>
    <h3>Month:{month}</h3>
    <h3>Year:{year}</h3>
    </>

)
}
export default ExpenseDate;