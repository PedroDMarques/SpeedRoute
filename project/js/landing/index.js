import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Layout } from 'antd';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<Header />
			<Content>
				This is the content right here mayteee!!!!
			</Content>
			<Footer />
		</Layout>
	</Provider>
, document.getElementById('app'));