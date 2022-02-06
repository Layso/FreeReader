import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BottomMenu from './src/components/BottomMenu';



const App = () => {
	return (
		<View style={{flex:1}}>
			<View style={{flex:1, backgroundColor:"green"}}>
				
			</View>
			<BottomMenu style={{flexDirection:'row'}} />
		</View>
	)
}

export default App;