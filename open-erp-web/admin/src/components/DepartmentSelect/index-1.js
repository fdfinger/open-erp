import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { delNumber, addNumber } from '../../store/count/actions'

class DepartmentSelect extends Component {
  render() {
    const { addHandleClick, decHandleClicK} = this.props
    return (
      <div>
        <Button onClick={addHandleClick}>+</Button>
        <Button onClick={decHandleClicK}>-</Button>
        {this.props.number}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  number: state.number,
  list: state.list
})

const mapDispatchToProps = (dispatch) => {
  return {
    addHandleClick: ()=> dispatch(addNumber(1)),
    decHandleClicK: ()=> dispatch(delNumber(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentSelect)
