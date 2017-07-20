import React from 'react';

import { Layout } from 'antd';
const { Footer } = Layout;

import CONSTANTS from '../constants';

const STYLES = {
	"footer": {
		"height": CONSTANTS.FOOTER_HEIGHT,
	}
}

export default class MyFooter extends React.Component{
	render(){
		return (
			<Footer style={STYLES.footer}>SpeedRoute @2017</Footer>
		);
	}
}