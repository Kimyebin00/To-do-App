import { useState } from "react";
import styled from "styled-components";

function TodoInsert({ onInsert }) {

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
    e.preventDefault();
  }

  const onSubmit = (e) => {
    onInsert(text);
    setText('');
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input 
          type="text"
          placeholder="할 일 입력"
          value={text}
          onChange={onChange}
        />
        <Button type="submit">저장</Button>
      </form>
    </div>
  );
}

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  display: inline-block;
`

const Button = styled.button`
  width: 20%;
  height: 50px;
  display: inline-block;
  background: #63e6be;
`
export default TodoInsert;