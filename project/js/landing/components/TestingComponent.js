import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { Button, Rate } from 'antd';


class TestingComponent extends Component{

	onInc(){
		this.props.dispatch({
			"type":"INC",
		});
	}

	onDec(){
		this.props.dispatch({
			"type":"DEC",
		});
	}

	render(props, state){
		return (
			<div>
				<Rate value={props.rate} />
				<Button onClick={this.onInc.bind(this)} >Increment</Button>
				<Button onClick={this.onDec.bind(this)} >Decrement</Button>
			</div>
		);
	}
}

export default connect(store=>{
	return {
		"rate": store.test.rate
	}
})(TestingComponent);