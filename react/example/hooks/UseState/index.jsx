import React, { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(0)
  function add() {
    setCount(count+1)
  }
  return (
    <div>
      <h3>当前求和为：{count}</h3>
      <button onClick={add}>加1</button>
    </div>
  )
}
