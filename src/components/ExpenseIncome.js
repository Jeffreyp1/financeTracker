import React from 'react'

const ExpenseIncome = (props) => {
    
  return (
    <div className="d-flex justify-content-center">
        <div className="card col-6 text-center " style ={{borderBottom: `4px  solid green`}} >
        
            <h5>Income</h5>
            <h5 className ="text-success">+${props.income.toFixed(2)}</h5>
        </div>
        <div className ="card col-6 text-center" style ={{borderBottom: `4px  solid red`}}>
            <h5>Expense</h5>
            <h5 className ="text-danger">-${(Math.abs(parseInt(props.expense)).toFixed(2))}</h5>
        </div>
    </div>
  )
}

export default ExpenseIncome
