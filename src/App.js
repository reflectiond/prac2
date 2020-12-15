import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'

const toDoData = todosData.map((item) => (
  <TodoItem
    key={item.id}
    content={{ completed: item.completed, text: item.text }}
  />
));
function App() {
  return (
    <div>
      {toDoData}
    </div>
  );
}

export default App;
