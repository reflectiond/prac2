import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'


function App() {
  function ClearItem(n) {
    console.log(n);
  }
  const toDoData = todosData.map((item) => (
    <TodoItem
      key={item.id}
      EventHandler={ClearItem(item.id)}
      content={{ completed: item.completed, text: item.text }}
    />
  ));
  return (
    <div>
      {toDoData}
    </div>
  );
}

export default App;
