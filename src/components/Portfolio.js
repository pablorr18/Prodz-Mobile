
import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableHighlight,
	Dimensions,
	Image
} from 'react-native';

import Styles from './styles/Portfolio'; 

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { retrievePortfolioList } from '../redux/actions/portfolio.actions';

import config from '../config';

class PortfolioScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { portfolio } = this.props;
		if(portfolio.items.length < 1){
			this.props.retrievePortfolioList();
		}
	}


	componentWillReceiveProps(nextProps){
		console.log('nextProps:', nextProps);
	}

	renderItem = (item) => {
		const columns = 3;
		const gutter = 10;
		const screenWidth = Dimensions.get('window').width;
		const imgWidth = (screenWidth - gutter) / columns;

		const thumb = config.ASSETS_URL + '/' + item.type + '/thumb/' + item.img_filename;

		return (
			<TouchableHighlight onPress={()=>this.onPressHandler(item)} underlayColor="transparent">
				<View key={item.id} style={{width:imgWidth,height:imgWidth, backgroundColor:'#f5f5f5', borderRadius:8}}>
					<View style={{flex:1, marginBottom:gutter, marginRight: gutter, backgroundColor:'#fff', borderRadius:8}}>
						<Image 
							source={{uri:thumb}} 
							style={{width:'100%', height:'100%', borderRadius:8}}
						/>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	onPressHandler = (item) => {
		this.props.navigator.push({
			screen: 'prodz.Details',
			title: 'Details',
			passProps:{
				pitem:item
			}
		});
	}

	_keyExtractor = (item, index)  => item.id;


	render() {
		const { portfolio } = this.props;
		return (
			<View style={Styles.wrapper}>
	      		<FlatList
	      			horizontal={false}
	      			numColumns={3}
	  				data={portfolio.items}
	  				renderItem={({item}) => this.renderItem(item)}
	  				keyExtractor={this._keyExtractor}
	  				style={{marginTop:10,marginLeft:10}}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const { portfolio } = state;
	return { portfolio };
}

const actions = {retrievePortfolioList};

PortfolioScreen = connect(mapStateToProps, actions)(PortfolioScreen);

export default PortfolioScreen;

