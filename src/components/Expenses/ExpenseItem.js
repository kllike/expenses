import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card' 
import { useState } from 'react'

const ExpenseItem = (props) => {

    const clickHandler =() => {
    
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </Card>
    )
} 

export default ExpenseItem