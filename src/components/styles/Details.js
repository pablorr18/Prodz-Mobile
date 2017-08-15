import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	scrollview:{
		flex:1,
		backgroundColor:'#ffffff'
	},
	title:{
		color:'#555555',
		margin:10,
		fontWeight:'bold',
		fontSize:20
	},
	section:{
		margin:10
	},
	subtitle:{
		color:'#4A90E2',
		fontSize:14,
		fontWeight:'bold',
		marginBottom:10,
		marginTop:5
	},
	content:{
		color:'#555555',
		fontSize:14,
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
export default styles;
