import React from 'react';
import { Alert, Linking, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomMenu from './src/components/BottomMenu';



const App = () => {
	var scanner = null

	return (
		<View style={{flex:1}}>
			<View style={{flex:1, backgroundColor:"green"}}>
				<QRCodeScanner
					ref = {(node) => scanner = node}
					onRead={(scanData) => {
						Linking.canOpenURL(scanData.data).then((isFailed) => {
							if (isFailed) {
								Alert.alert("Error", "Can't open following URL:\n" + scanData.data, [{text: "OK"}])
							} else {
								console.log("Target URL: " + scanData.data)
								Linking.openURL(scanData.data)
							}
						})
					}}
				/>
			</View>

			<BottomMenu 
				style={{flexDirection:'row'}} 
				onScanClicked={() => {
					if (scanner) {
						scanner.reactivate()
						console.log("Scanner is active again")
					}
				}}
			/>
		</View>
	)
}

export default App;