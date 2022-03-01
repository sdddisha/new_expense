import React,{useState} from 'react';
function ExpenseTitle(props){
    const [title,setTitle] =useState(props.title);
    console.log('Calling');
     
    const clicked=()=>{
        setTitle('Updated');
    }

    return <div><h2>The Item is: {title}</h2>
     <button onClick={clicked}>Change Title</button></div>
}
export default ExpenseTitle;