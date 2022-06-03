/**
 * 
 */
 
 
import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
	static getDerivedStateFromProps(props, state){
		console.log('2 . getDerivedStateFromProps Call :' + props.prop_value);
		return {};
	}
	componentDidMount() {
		console.log('4. componentDidMount Call');
		console.log('5. tmp_state :' + this.state.tmp_state);
		this.setState({tmp_state2 : true});
	}
	shouldComponentUpdate(props, state){
		console.log('6. shouldComponentUpdate Call / tmp_state2 =' + state.tmp_state2);
		return state.tmp_state2
	}


	render(){
		console.log('3. render Call')
		return (
			<h2> [이것은 렌더 render 풩션]</h2>		
		)
		
	}
	constructor(props){
		super(props);
		this.state = {};
		console.log('1. 컨스트럭터 콜');
		console.log(this.state);
		
		
	}
}

export default R004_LifecycleEx;