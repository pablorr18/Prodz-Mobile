
import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';



class AboutScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}


	componentWillReceiveProps(nextProps){
		console.log('nextProps:', nextProps);
	}

	render() {

		return (
			<ScrollView style={Styles.scrollview}>
				<View style={Styles.wrapper}>
					<Text style={Styles.content}>
						I'm a Fullstack Developer from Puerto Rico currently living in the great city of Chicago. I specialize in Mobile Cross-Platform Development (iOS & Android) but also in Web Front-end and Back-end Development. In addition, I design simple and clean interfaces for web, mobile and desktop applications.
					</Text>

					<Text style={Styles.content}>
						One of the greatest strengths about being a developer and a designer is that not only I can handle the graphical aspects of a project, but I can also fully understand how every element is supposed to work and take care of the highly technical aspect of coding it.
					</Text>
					<Text style={Styles.content}>
						Learning and keeping up with new technologies and languages is what inspires me to keep growing and evolving as a developer and professional.
					</Text>
				</View>
			</ScrollView>
		);
	}
}

const Styles = StyleSheet.create({
	scrollview:{
		flex:1,
		backgroundColor:'#f5f5f5'
	},
	wrapper:{
		flex:1,
		margin:10,
		backgroundColor:'#fff',
		padding:20,
		borderRadius:8
	},
	content:{
		color:'#555555',
		fontSize:16,
		marginBottom:20,
		textAlign:'justify',
		lineHeight:25
	}
});

export default AboutScreen;

