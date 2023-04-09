import styled from "styled-components";

function TodoTemplate({ children }) {
  return (
    <TodoTemplateDiv>
      {children}
    </TodoTemplateDiv>
  );
}

const TodoTemplateDiv = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`

export default TodoTemplate;