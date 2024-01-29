import React from "react";

export const TodoList = React.memo(({ data, deleteTodoFunc }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid",
                width: "50%",
                margin: "auto",
                marginTop: "30px",
                padding: "10px",
              }}>
              <div>{item.authorname}</div>
              <div>{item.todo}</div>
              <button onClick={() => deleteTodoFunc(index)}>delete todo</button>
              <button>edit todo</button>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
});
