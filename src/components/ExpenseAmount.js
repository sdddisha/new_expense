import './ExpenseItem.css'
function ExpenseAmount(props){
    return <div className="expense-item__price"> Amount is: {props.amount}</div>
}
export default ExpenseAmount;