
import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';



class ContactScreen extends Component {

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
						Building products from the start, working side by side with others, creating new features and continuously improving is what I love about my job!
					</Text>

					<Text style={Styles.content}>
						Get in touch. Send me a message.
					</Text>
					<TouchableHighlight onPress={() => alert('Message sent!')} underlayColor="transparent">
						<View style={Styles.btnLink}>
							<Text style={Styles.buttonTitle}>Send Message</Text>
						</View>
					</TouchableHighlight>
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
	},
	btnLink:{
		flex:1,
		height:50,
		backgroundColor:'#4A90E2',
		marginTop:5,
		marginBottom:5,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5
	},
	buttonTitle:{
		color:'#fff',
		fontSize:14,
		fontWeight:'bold'
	}
});

export default ContactScreen;

