import React, { useRef } from 'react'

export default function UseRef() {
  const myRef = useRef()

  function show() {
    alert(myRef.current.value)
  }
  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}
