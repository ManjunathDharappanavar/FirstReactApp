// import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter'
import ProductList from './API/productList';
import Todo from './ToDo/todo';
function App() {
  return (
    <div className="App">
      {/* counter app call */}
      <Counter/>

      <hr/>

      {/* productList app call */}
      <ProductList/>

    <hr/>
      <Todo/>


    </div>
  );
}

export default App;
