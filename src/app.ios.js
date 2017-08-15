import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import portfolioReducer from './redux/reducers/portfolio.reducer';


let middleware = [thunk];

if (__DEV__) {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	const logger = createLogger({ collapsed: true });
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
	middleware = [...middleware];
}

const store = createStore(
	combineReducers({
		portfolio:portfolioReducer
	}),
	applyMiddleware(...middleware)
);

registerScreens(store,Provider);


const navigatorStyle = {
	navBarTranslucent: false,
	drawUnderNavBar: false,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: false,
	navBarBackgroundColor:'#4A90E2',
	screenBackgroundColor:'#ffffff'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.startApp();
	}

	startApp = () => {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Portfolio',
					screen: 'prodz.Portfolio',
					icon: require('./images/icon_portfolio.png'),
					title: 'Portfolio',
					navigatorStyle
				},
				{
					label: 'About Me',
					screen: 'prodz.About',
					icon: require('./images/icon_user.png'),
					title: 'About Me',
					navigatorStyle
				},
				{
					label: 'Contact',
					screen: 'prodz.Contact',
					icon: require('./images/icon_mail.png'),
					title: 'Contact',
					navigatorStyle
				}
			],
			tabsStyle: {
				//tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: '#4A90E2',
				//tabBarBackgroundColor: 'white'
			}
		});
	}
}
export default App;