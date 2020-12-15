
function TodoItem(props) {
  return (
    <div className="container">
      {props.content.completed ? (
        <div>
          <strike>{props.content.text}</strike> 
          <button onClick={props.EventHandler()}>delete</button>
        </div>
      ) : (
        <div>{props.content.text}</div>
      )}
    </div>
  );
}
export default TodoItem;