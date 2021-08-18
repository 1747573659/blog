import CountUI from '../../components/Count/Count'

import {connect} from 'react-redux'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

const mapStateToProps = (state:number) => ({ count:state })

const mapDispatchToProps = (dispath:any) => ({ 
  increment: (data:number) => dispath(createIncrementAction(data)),
  decrement: (data:number) => dispath(createDecrementAction(data)),
  incrementAsync: (data:number, time:number) => dispath(createIncrementAsyncAction(data, time))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
