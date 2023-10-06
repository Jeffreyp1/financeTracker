import React from 'react'

const AddTransaction = (props) => {

    const [text, setText]= React.useState("")
    const [num, setNum] = React.useState()
    
    function handleSubmit(event){
        event.preventDefault();
        props.setTransactions(val => [...val, [text, parseInt(num)]])
        props.setTotal(toe => toe + parseInt(num))
        {num < 0 ? props.setExpense(val => val + parseInt(num)): props.setIncome(val => val + parseInt(num))}
        setText("")
        setNum()
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <div className = "mb-3">
                Text: 
                <input
                    className = "text-center form-control"
                    type="text" 
                    value ={text} 
                    placeholder = "Enter source of income/expense..."
                    onChange = {event => setText(event.target.value)}
                />
            </div>
            <div>
                Cost: 
                <input
                    className = "text-center form-control mb-3"
                    type="number" 
                    step= "any"
                    value ={num} 
                    placeholder ="enter cost here"
                    onChange = {event => setNum(event.target.value)}
                />
            </div>
            <button className ="btn btn-primary rounded form-control" type = "submit">Submit</button>
        </form>
    </div>
  )
}

export default AddTransaction
