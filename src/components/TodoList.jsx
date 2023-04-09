import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoList({todos}) {


  return ( 
    <TodoListDiv>
      {todos.map(todo => (
        <TodoListItem 
          key={todo.id}
          todo={todo}
        />
      ))}
      
    </TodoListDiv>
  );
}

const TodoListDiv = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: grey;
`

export default TodoList;