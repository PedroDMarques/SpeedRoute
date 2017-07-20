import React from 'react';
import { connect } from 'react-redux';

import { Layout, Avatar, Badge, Dropdown, Icon, Menu } from 'antd';
const { Header } = Layout;

import CONSTANTS from '../constants';

const STYLES = {
	"header": {
		"height": CONSTANTS.HEADER_HEIGHT,
		"display": "flex",
		"justifyContent": "flex-end",
		"alignItems": "center",
		"padding": "0px 20px"
	},

	"username": {
		"paddingRight": "10px",
		"fontSize": "1.7em",
	},

	"usernameCaret": {
		"fontSize": "0.8em",
	}
}

const loggedInMenu = (
	<Menu>
		<Menu.Item>
			<a>Profile</a>
		</Menu.Item>
		<Menu.Item>
			<a>Logout</a>
		</Menu.Item>
	</Menu>
);

class MyHeader extends React.Component{
	render(){
		return (
			<Header style={STYLES.header}>
				<Dropdown overlay={loggedInMenu} trigger={["click"]}>
					<a style={STYLES.username}>Dalannar <Icon style={STYLES.usernameCaret} type="down" /></a>
				</Dropdown>
				<a><Badge dot><Avatar shape="square" icon="user" /></Badge></a>
			</Header>
		);
	}
}

export default connect(store=>{
	return {

	}
})(MyHeader);