import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    console.info("constructor"+ JSON.stringify(props))
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    //this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  componentWillMount(){
    //这个函数调用时机是在组件创建 并初始化了状态之后，在第一次绘制 render() 之前
    console.info("componentWillMount" + JSON.stringify(this.props))
  }

  componentDidMount(){
    //在组件第一次绘制之后，会调用
    console.info("componentDidMount" + JSON.stringify(this.props))
  }

  componentWillReceiveProps(nextProps){
     //如果已加载组件收到新的参数属性（props），就会调用 componentWillReceiveProps()
    console.info("componentWillReceiveProps" + JSON.stringify(this.props) + "nextProps:"+JSON.stringify(nextProps))
  }

  shouldComponentUpdate(nextProps,nextState){
    //输入参数 nextProps 和上面的 componentWillReceiveProps 函数一样，nextState 表示组件即将更新的状态值。这个函数的返回值决定是否需要更新组件，
    //如果 true 表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态
     console.info("shouldComponentUpdate" + JSON.stringify(nextProps) +'nextState:'+JSON.stringify(nextState));
     // if(nextProps.value > 3){
     //    return false;
     // }else{
     //    return true;
     // }
      return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.info("componentWillUpdate" + JSON.stringify(nextProps));
  }


  componentDidUpdate(prevProps,prevState){
    //调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
    console.info("componentDidUpdate" + JSON.stringify(prevProps)+','+ JSON.stringify(this.props));
  }

  componentWillUnmount(){
    console.info("componentWillUnmount");
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }



  render() {
    console.info("render"+ JSON.stringify(this.props));
    const { value, onIncrement, onDecrement ,onTestFunction} = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
