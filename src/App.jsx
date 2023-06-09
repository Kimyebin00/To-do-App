import { createGlobalStyle } from "styled-components"
import TodoHeader from "./components/TodoHeader"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import { useRef, useState } from "react"
import TodoTemplate from "./components/TodoTemplate"

function App() {
  // 데이터 가공 영역
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '잠자기',
      checked: true
    },
    {
      id:2,
      text: '밥먹기',
      checked: false
    }
  ])

  const nextId = useRef(2);
  const onInsert = (text) => {
    setTodos(
      todos.concat(
        [
          { 
            id: nextId.current + 1,
            text,
            ckecked: false
          }
        ]
      )
    );
    nextId.current++; // current 적어야 변수에 들어간 값에 접근
  }

  const onToggle = (id) => {
    setTodos(
      todos.map(todo => 
          todo.id === id ? {...todo, checked:!todo.checked} : todo
        )
    )
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
      </TodoTemplate>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e2ecef;
  }
`

export default App
