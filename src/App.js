import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';
import React from 'react'


function App() {

  const toDoData = todosData.map((item) => (
    <TodoItem
      key={item.id}
      EventHandler={() => ClearItem(item)}
      content={{ completed: item.completed, text: item.text }}
    />
  ));
  function ClearItem(item){
    // не могу придумать реализацию
  }
  return (
    <div>
      {toDoData}
    </div>
  );
}

export default App;
