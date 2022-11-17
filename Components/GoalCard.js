import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import SubmitIcon from './SubmitIcon';

export default class GoalCard extends Component {
	render() {
		return (
			<View style={GoalCardStyles.ViewStyle}>
				<Text style={GoalCardStyles.GoalTextStyle}>Goals</Text>

				<View style={GoalCardStyles.BottomHalf}>
					<Text style={GoalCardStyles.GoalValueStyle}>315</Text>
					<View style={{ justifyContent: 'flex-end' }}>
						<SubmitIcon></SubmitIcon>
					</View>
				</View>
			</View>
		);
	}
}

const GoalCardStyles = StyleSheet.create({
	ViewStyle: {
		height: '20%',
		width: '50%',
		padding: 15,
		backgroundColor: 'white',
		justifyContent: 'space-evenly',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 24,
		shadowOffset: { height: 8 },
	},

	BottomHalf: {
		height: '66%',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	GoalTextStyle: {
		fontSize: 32,
	},
	GoalValueStyle: {
		fontWeight: 'bold',
		fontSize: 64,
	},
});
