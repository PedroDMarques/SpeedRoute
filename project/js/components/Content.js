import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

import CONSTANTS from '../constants';

const STYLES = {
	"content": {
		"minHeight": CONSTANTS.CONTENT_MIN_HEIGHT,
		"backgroundColor": "red",
	}
}

export default class MyContent extends React.Component{
	constructor(){
		super();

		window.addEventListener('resize', this.onPageResize.bind(this));

		this.state = {
			"contentHeight": this.getAppropriateContentHeight()
		}
	}

	getAppropriateContentHeight(){
		return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
			- (CONSTANTS.HEADER_HEIGHT + CONSTANTS.FOOTER_HEIGHT);
	}

	onPageResize(){
		this.setState({
			"contentHeight": this.getAppropriateContentHeight()
		});
	}

	render(){
		return (
			<Content style={{...STYLES.content, height: this.state.contentHeight}}>
				<div>
					<h1>Current height: {Math.max(this.state.contentHeight, 624)}</h1>
				</div>
				{this.props.children}
			</Content>
		);
	}
}