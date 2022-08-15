import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {id: 'i001', title: 'Car Insuarance', amount: '985', date: new Date(2022, 7, 14)},
    {id: 'i002', title: 'Tyre', amount: '435', date: new Date(2022, 6, 3)},
    {id: 'i003', title: 'Vehicle', amount: '4554', date: new Date(2022, 7, 5)}
  ]

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
