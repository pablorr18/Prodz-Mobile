
import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
	Image,
	TouchableHighlight,
	Dimensions,
	Linking
} from 'react-native';

import Styles from './styles/Details'; 
import config from '../config';

import AutoHeightImage from 'react-native-auto-height-image';


class DetailsScreen extends Component {

	static navigatorStyle = {
    	navBarBackgroundColor: '#4A90E2',
		statusBarColor: '#4A90E2',
		navBarTextColor: 'white',
		navBarButtonColor: 'white',
		statusBarTextColorScheme: 'light'
  	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}


	componentWillReceiveProps(nextProps){
		console.log('nextProps:', nextProps);
	}

	getImageHeader = (item) => {
		const fullImage = config.ASSETS_URL + '/' + item.type + '/full/' + item.img_filename;
		const screenWidth = Dimensions.get('window').width;
		const imgWidth = screenWidth - 20;

		return (
			
			<AutoHeightImage
                width={imgWidth}
                imageURL={fullImage}
                style={{marginLeft:10}}
            />
		);
	}

	getDescription = (item) => {
		if(item.description){
			return (
				<View style={Styles.section}>
					<Text style={Styles.subtitle}>Description:</Text>
					<Text style={Styles.content}>{item.description}</Text>
				</View>
			);
		}
	}

	getLinks = (item) => {
		if(item.links){
			return (
				<View style={Styles.section}>
					<Text style={Styles.subtitle}>Links:</Text>
					{(item.links.ios) ? this.getLinkButton('ios',item.links.ios): null}
					{(item.links.android) ? this.getLinkButton('android',item.links.android): null}
					{(item.links.web) ? this.getLinkButton('web',item.links.web): null}
				</View>
			);
		}
	}

	getLinkButton = (os, link) => {
		let title;
		switch(os){
			case('ios'):
				title = 'Visit Apple App Store';
				break;
			case('android'):
				title = 'Visit Google Play Store';
				break;
			case('web'):
				title = 'Visit Website';
				break;
			default:
				title="Visit Link";
				break;
		}
		return(
			<TouchableHighlight onPress={() => Linking.openURL(link)} underlayColor="transparent">
				<View style={Styles.btnLink}>
					<Text style={Styles.buttonTitle}>{title}</Text>
				</View>
			</TouchableHighlight>
		);
	}


	render() {

		return (
			<ScrollView style={Styles.scrollview}>
				<Text style={Styles.title}>{this.props.pitem.title}</Text>
	      		{this.getImageHeader(this.props.pitem)}
	      		{this.getDescription(this.props.pitem)}
				{this.getLinks(this.props.pitem)}
			</ScrollView>
		);
	}
}

export default DetailsScreen;

