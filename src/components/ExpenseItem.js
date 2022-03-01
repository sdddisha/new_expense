
import './Card.css';
import Card from './Card';
import ExpenseAmount from './ExpenseAmount';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';

function ExpenseItem(props) {
    
  
    return(
        <>
       
        <Card className="expenses">
            <ExpenseTitle title={props.title} />
            <ExpenseAmount amount={props.amount} />

            {/* <h2>Date: {props.date.toLocaleString('en-US',{month:'long'})}</h2> */}

            <ExpenseDate date={props.date} />
          
       
        </Card>
        </>
    )
    
}
export default ExpenseItem;