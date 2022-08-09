import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {title: 'Car Insuarance', amount: '985', date: new Date(2022, 7, 14)},
    {title: 'Tyre', amount: '435', date: new Date(2022, 6, 3)},
    {title: 'Vehicle', amount: '4554', date: new Date(2022, 7, 5)}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
  );
}

export default App;
