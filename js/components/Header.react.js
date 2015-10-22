import React from 'react'
import TodoTextInput from './TodoTextInput.react'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  onSave(text) {
    console.log(text)
  }
  render() {
    const pHolder = "Todos"
    return (
      <div>
        <h2>Todo List</h2>
        <TodoTextInput onSave={this.onSave.bind(this)} placeholder={pHolder} />
      </div>
    )
  }
}

export default Header
