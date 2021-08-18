import CountUI from '../../components/Count/Count'

import {connect} from 'react-redux'

import {createIncrementAction} from '../../redux/count_action'

const mapStateToProps = (state:number) => ({ count:state })

const mapDispatchToProps = (dispath:any) => ({ add: (data:number) => dispath(createIncrementAction(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
