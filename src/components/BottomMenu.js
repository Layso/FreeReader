import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomMenuButton from './BottomMenuButton';


const BottomMenu = (props) => {
	return(
		<View style={props.style}>
			<BottomMenuButton style={styles.button} label="Credits" image={require("../assets/img/credits.png")}/>
			<BottomMenuButton style={styles.button} label="Scan" image={require("../assets/img/scan.png")}/>
			<BottomMenuButton style={styles.button} label="History" image={require("../assets/img/history.png")}/>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		flex:1
	}
});

export default BottomMenu;