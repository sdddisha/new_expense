import React ,{useState} from 'react';

const ExpenseForm=(props)=>{
  const [enteredtitle, setTitle]=useState('') //here we used multiple usestate. we can also make object of usestate along with using prevState and then use it.
  const [enteredAmount, setAmount]=useState('')
  const [enteredDate, setDate]=useState('')

  const titleChangeHandler=(event)=>{
    setTitle(event.target.value);
  }
  const AmountChangeHandler=(event)=>{
    setAmount(event.target.value);
  }
  const DateChangeHandler=(event)=>{
    setDate(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:enteredtitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData); //child to parent data transeferring.
    
    // console.log(expenseData);
    // setAmount('');
    // setDate('');
    // setTitle('');

  }
    return(
        <form onSubmit={submitHandler}>
        <label>
          Title:
          <input type="text" name="title" value={enteredtitle} onChange={titleChangeHandler} />
        </label>
        <label>
          Price:
          <input type="number" name="amount" value={enteredAmount}  onChange={AmountChangeHandler} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={enteredDate} onChange={DateChangeHandler} />
        </label>
        <input type="submit" value="Add item" />
      </form>
    )
}
export default ExpenseForm;