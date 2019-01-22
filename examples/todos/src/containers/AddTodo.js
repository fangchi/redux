import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch,history }) => {
  let input
  return (
    //表示为对组件真正实例的引用，其实就是ReactDOM.render()返回的组件实例
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={(node) => {
          console.info("ref:"+node);
          input = node}
        } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
