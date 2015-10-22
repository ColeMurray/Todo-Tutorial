/*  TodoTextInput.react

A react component that handles text input. It updates on
enter being pressed
*/
import React from 'react'

const ENTER_KEY_CODE = 13

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.placeholder = props.placeholder
    this.onSave = props.onSave
    this.state = {
      value: props.value || ''
    }
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  /**
  * Invokes callback {@code this.onSave()} and sets state
  * value to ''
  */
  _save() {
    this.onSave(this.state.value)
    this.setState({
      value: ''
    })
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save()
    }
  }

  render() {
    return (
      <input
        type="text"
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
        onSave={this._save.bind(this)}
        placeholder={this.placeholder}
        value={this.state.value} />
    )
  }
}

export default TodoTextInput
