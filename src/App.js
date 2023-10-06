import logo from './logo.svg';
import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js"
import Balance from "./components/Balance.js"
import ExpenseIncome from './components/ExpenseIncome.js'
import AddTransaction from "./components/AddTransaction.js"
import Card from "./components/Card.js"
function App() {

  const [transactions, setTransactions] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [income, setIncome]= React.useState(0)
  const [expense, setExpense] = React.useState(0)
  
  return (
    <div className="container" style ={{width: "50vw"}}>
      <Header />
      <div >
        <Balance balance={total}/>
        <ExpenseIncome income = {income} expense = {expense}/>
        {transactions.length === 1?  <h5 className="border-bottom pb-2 mt-4">Transaction History</h5> : <h5></h5>}
        {transactions.map(([text, val]) => (
          <div className= ""><Card text={text} val={val}/></div>
          
        ))}
        {/* <TransactionList /> */}
        <AddTransaction transactions = {transactions} setTransactions={setTransactions} setTotal={setTotal} setIncome = {setIncome} setExpense = {setExpense} total ={total}/>
      </div>
    </div>
    
  );
}

export default App;
