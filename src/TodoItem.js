function TodoItem(props){
    return (
      <div className="container">
        {props.content.completed ? (
          <div>Gecnj</div>
        ) : (
          <div>props.content.text</div>
        )}
      </div>
    );
}
export default TodoItem;