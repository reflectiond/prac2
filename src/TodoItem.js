function TodoItem(props) {
  return (
    <div className="container">
      <div className="row section">
        {props.content.completed ? (
          <div>
            <div className="flow-text col s3 m3 l12">
              <del>{props.content.text}</del>
            </div>
            <button
              className="waves-effect waves-light btn-small col s4 m3 l3 push-s4 push-m4 push-l8"
              onClick={() => props.EventHandler()}
            >
              delete
            </button>
          </div>
        ) : (
          <div>
            <div className="flow-text col s3 m3 l3">{props.content.text}</div>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </div>
  );
}
export default TodoItem;
