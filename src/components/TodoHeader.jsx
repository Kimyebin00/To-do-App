import React from "react";
import styled from "styled-components";

function TodoHeader() {
  return ( 
    <TodoHeaderDiv>
      <h3>To Do App</h3>
    </TodoHeaderDiv>  
  );
}

const TodoHeaderDiv = styled.div`
  padding: 48 32 32 24px;
  border-bottom: 1px solid #e9ecef;

  h1{
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`

export default TodoHeader;