import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomMenuButton from './BottomMenuButton';


const BottomMenu = (props) => {
	return(
		<View style={props.style}>
			<BottomMenuButton onClick={() => {if (props.onCreditsClicked) props.onCreditsClicked()}} style={styles.button} label="Credits" image={require("../assets/img/credits.png")}/>
			<BottomMenuButton onClick={() => {if (props.onScanClicked) props.onScanClicked()}} style={styles.button} label="Scan" image={require("../assets/img/scan.png")}/>
			<BottomMenuButton onClick={() => {if (props.onHistoryClicked) props.onHistoryClicked()}} style={styles.button} label="History" image={require("../assets/img/history.png")}/>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		flex:1
	}
});

export default BottomMenu;