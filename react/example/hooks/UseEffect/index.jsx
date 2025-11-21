import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)
  /**
   * useEffect可以模拟生命周期，接收两个参数
   * 第二个参数不传的话，初始化和更新都会触发render
   * 相当于componentDidMount和componentDidUpdate
   * 第二个参数为[]时，只有初始化才会执行
   * 相当于componentDidMount
   * 第二个参数可为某个或某些state值，这样就会只监听对应的属性值的变化
   * 相当于componentDidMount和componentDidUpdate
   */
  useEffect(() => {
    // useEffect在挂载阶段会执行两次（开发环境），生产环境只会执行一次
    let timer = setTimeout(() => {
      setCount(count + 1)
    }, 1000)
    // 返回值相当于componentWillUnmount钩子函数
    return () => {
      // 这里也会执行的，通常定时器那些都要在这里清除一遍
      clearTimeout(timer)
    }
  }, [count])

  function add() {
    setCount(count + 1)
  }

  console.log('render')
  return (
    <div>
      <h3>当前求和为：{count}</h3>
      <button onClick={add}>加1</button>
    </div>
  )
}
