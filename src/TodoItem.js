function TodoItem(props) {
  return (
    <div className="container">
      <div className="row section">
        {props.content.completed ? (
          <div>
            <div className="flow-text col s12 m6 l8">
              <del>{props.content.text}</del>
            </div>
            <div className="col s4 m6 l4">
              <div className="row">
                <button
                  className="waves-effect waves-light btn-small col s4"
                  onClick={() => props.completeHandler()}
                >
                  unready
                </button>
              </div>
              <div className="row">
                <button
                  className="waves-effect waves-light btn-small col s4"
                  onClick={() => props.deleteHandler()}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flow-text col s12 m6 l8">{props.content.text}</div>
            <div className="col s4 m6 l4">
              <div className="row">
                <button
                  className="waves-effect waves-light btn-small col s4"
                  onClick={() => props.completeHandler()}
                >
                  ready
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default TodoItem;
