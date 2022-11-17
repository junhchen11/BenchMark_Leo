import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import DropDown from '../Components/DropDown';
import NumberInput from '../Components/NumberInput';
import SubmitIcon from '../Components/SubmitIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../Styles';

export default class LiftCard extends React.Component {
	constructor(props) {
		super(props);
	}
	state = { reps: 0, sets: 0, weight: 0 };
	render() {
		return (
			<View style={styles.cardStyle}>
				{this.props.editable ? (
					<DropDown></DropDown>
				) : (
					<View style={FormStyles.rowView}>
						<Text style={FormStyles.liftText}>
							{this.props.liftStats.lift}
						</Text>
						<Text style={FormStyles.maxText}>
							{' '}
							{this.props.liftStats.curMax}
						</Text>
					</View>
				)}
				<View style={FormStyles.InputGroup}>
					<NumberInput
						t="S"
						editable={this.props.editable}
						defaultVal={this.props.liftStats.sets}
					></NumberInput>
					<Icon name="close" size={25}></Icon>
					<NumberInput
						t="R"
						editable={this.props.editable}
						defaultVal={this.props.liftStats.reps}
					></NumberInput>
					<Icon name="close" size={25}></Icon>
					<NumberInput
						t="W"
						editable={this.props.editable}
						defaultVal={this.props.liftStats.weight}
					></NumberInput>
				</View>
				{this.props.editable ? (
					<SubmitIcon></SubmitIcon>
				) : (
					<View style={FormStyles.rowView}>
						<Text style={FormStyles.dateText}>
							{this.props.liftStats.date}
						</Text>
						<Icon
							name="more-horiz"
							size={30}
							style={{ paddingRight: 5 }}
						></Icon>
					</View>
				)}
			</View>
		);
	}
}
const FormStyles = StyleSheet.create({
	InputGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 7,
	},
	rowView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	liftText: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	dateText: {
		fontSize: 20,
	},
	maxText: {
		fontSize: 28,
		fontWeight: 'bold',
	},
});
