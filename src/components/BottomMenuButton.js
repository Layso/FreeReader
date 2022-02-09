import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

const BottomMenuButton = (props) => {
	return(
		<Pressable style={props.style}
			onPress={() => {
				console.log('pressed ' + props.label)
				if (props.onClick) {
					props.onClick()
				}
			}}
			/*
			onPressIn={() => console.log('pressed in ' + props.label)}
        	onPressOut={() => console.log('pressed out ' + props.label)}
        	onLongPress={() => console.log('long press ' + props.label)}
			*/
        >
			<View style={styles.root}>
				<Image style={styles.image} source={props.image}/>
				<Text style={styles.text}>{props.label}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 15
	},
	
	image: {
		width: 40,
		height: 40
	},

	text: {
		paddingTop: 8
	}
});

export default BottomMenuButton;