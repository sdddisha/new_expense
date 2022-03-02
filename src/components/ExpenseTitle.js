import React,{useState} from 'react';
function ExpenseTitle(props){
    const [title,setTitle] =useState(props.title);
    console.log('Calling');
     
    const clicked=()=>{
        setTitle('Updated');
    }

    return <div className="expense-item__description ">The Item is: {title}
     <button onClick={clicked}>Change Title</button></div>
}
export default ExpenseTitle;