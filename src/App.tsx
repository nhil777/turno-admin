import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  color: yellow;
`

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button className="bg-green-400" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  )
}
