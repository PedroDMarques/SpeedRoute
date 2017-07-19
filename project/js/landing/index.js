import { h, render } from 'preact';
import { Provider } from 'react-redux';

import TestingComponent from './components/TestingComponent';

import store from './store';

render((
	<Provider store={store}>
		<TestingComponent />
	</Provider>
), document.body);