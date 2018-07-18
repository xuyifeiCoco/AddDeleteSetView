import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './TodoList.less'

class TodoList extends React.Component {
  constructor (props) {//, 'ceshi yixa'
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me', 'ceshi yixa'] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    const newItems = this.state.items.concat(['ceshi'])
    this.setState({ items: newItems })
  }

  handleRemove (i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }

  render () {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ))
    // CSSTransitionGroup提供了一个transitionAppear属性用于在组件第一次被挂载的时候添加动画。
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={10000}
          transitionEnter={true}
          transitionEnterTimeout={3000}
          transitionLeave={false}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default TodoList
