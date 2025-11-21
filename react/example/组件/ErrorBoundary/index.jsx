import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  state = {
    hasError: ''
  }

  static getDerivedStateFromError(error) {
    return {hasError: error}
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return <h3>页面繁忙，请稍后再试。</h3>
    }
    return this.props.children
  }
}

export default class Error extends Component {
  state = {
    count: 3
  }
  render() {
    if (this.state.count === 3) {
      throw new Error('count值不能为3')
    }
    return (
      <div>错误页面</div>
    )
  }
}

