import "./App.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import React, { useState } from "react";

function App() {
  //хранит в себе массив объектов - todo итемов
  const [todos, setTodos] = useState(todosData);
  //переменная хранит в себе тег отрисовывающий каждый объект из массива 
    const toDoData = todos.map((item) => (
    <TodoItem
      key={item.id}
      deleteHandler={() => clearItem(item)}
      completeHandler={() => markAsCompleteItem(item)}
      content={{ completed: item.completed, text: item.text }}
    />
  ));
  // число - хранит номер последнего неиспользованного id
  const [newId, setNewId] = useState(toDoData.length + 1);
  const [newText, setNewText] = useState('');
  // объект - сохраняет текст из поля для воода для последующей записи в массив всех todo итемов 
  const [ticket, setTicket] = useState({id:newId, text:newText, completed: false});
  
  //функция убирает объект с, который помечается на удаление
  function clearItem(item) {
    setTodos(todos.filter((localItem) => localItem.id !== item.id));
  }
  // помечает тикет как выполненный
  // function markAsCompleteItem(item) {
  //   const tempArr = todos.map((localItem) => {
  //     if (localItem.id === item.id) {
  //       localItem.completed = true;
  //     }
  //     return localItem;
  //   });
  //   console.log(tempArr);
  //   setTodos(tempArr);
  // }
  function markAsCompleteItem(item) {
    const tempArr = todos.map((localItem) => {
        if (localItem.id === item.id) {
            localItem.completed = !localItem.completed;
        }
        return localItem;
    });
    setTodos(tempArr);
}
  //сохраняет текст
  function newItemTextChange(val){
    setNewText(val);
    //надо как-то обойти асинхронное обновление состояний
    setTicket({id:newId,text:val,completed:false});
  }
  //добавляет сформированный объект (новый тикет) в общий список тикетов
  function addItem() {
    let tempArr = todos.slice();
    setNewId(newId + 1);
    tempArr.push(ticket);
    if (ticket.text){
      //формирует новый объект. сохраняет текст, присваевает новый id для него
      setTodos(tempArr);
      setNewText('');
      // handleSubmit();
    }
  }

  return (
    <div className="container">
    <div>{toDoData}</div>
      <div className="row section">
        <form className="col s12 m12 l12">
          <div className="row">
            <div className="input-field col s6 m6 l6 push-l3 push-m3 push-s3">
              <textarea
                id="adderItem"
                className="materialize-textarea"
                onChange={(e) => newItemTextChange(e.target.value)}
                value={newText}
              ></textarea>
              <label htmlFor="adderItem">New ticket</label>
            </div>
          </div>
        </form>
        <button
          className="waves-effect waves-light btn-small col s6 m6 l6 push-l3 push-m3 push-s3"
          from="adderItem"
          onClick={() => addItem()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
