import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
	}
	state = { lift: null };
	render() {
		return (
			<View style={{ zIndex: 10 }}>
				<DropDownPicker
					items={[
						{ label: 'Bench', value: 'Bench' },
						{ label: 'Deadlift', value: 'Deadlift' },
						{ label: 'Pullup', value: 'Pullup' },
					]}
					placeholder="Lift"
					style={pickerStyles.style}
					dropDownStyle={pickerStyles.dropDownStyle}
					itemStyle={pickerStyles.itemStyle}
					activeItemStyle={pickerStyles.activeItemStyle}
					labelStyle={pickerStyles.labelStyle}
					arrowSize={15}
					containerStyle={pickerStyles.containerStyle}
					onChangeItem={(item) => this.setState({ lift: item.value })}
				></DropDownPicker>
			</View>
		);
	}
}

const pickerStyles = StyleSheet.create({
	style: {
		borderWidth: 0,
		borderColor: 'transparent',
	},
	itemStyle: {
		justifyContent: 'flex-start',
	},
	dropDownStyle: {
		borderColor: 'transparent',
		backgroundColor: '#FFF',
	},
	containerStyle: {
		height: 40,
		width: '65%',
	},
	labelStyle: {
		fontWeight: 'bold',
		fontSize: 22,
		margin: 0,
	},
});
