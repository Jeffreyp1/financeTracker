import React from 'react'
import ExpenseIncome from "./ExpenseIncome.js"
const Balance = (props) => {
  return (
    <>
        <div className="d-flex justify-content-start container">
            <div>
                {/* <h3>Your Balance: ${props.balance}</h3> */}
                <h2 className = {`text-${props.balance < 0? "danger" : (props.balance > 0? "success": "black")}`}>
                    {props.balance < 0 ? 
                    `-$${Math.abs(props.balance).toFixed(2)}`: 
                    `$${props.balance.toFixed(2)}`}
                </h2>
                
                <p>Available Balance</p>
            </div>
            
                {/* <ExpenseIncome balance = {props.balance}/> */}
            

        </div>
    </>
    
  )
}

export default Balance
