import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from '../Styles';

export default class NumberInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={FormStyles.FormContainer}>
				<TextInput
					style={FormStyles.TextInput}
					editable={this.props.editable}
					defaultValue={
						this.props.editable ? '' : this.props.defaultVal
					}
				/>
				<View
					style={{
						borderBottomColor: 'black',
						width: '100%',
						borderBottomWidth: 2,
					}}
				></View>
				<Text style={FormStyles.Text}>{this.props.t}</Text>
			</View>
		);
	}
}

const FormStyles = StyleSheet.create({
	FormContainer: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		width: '18%',
		zIndex: 1,
	},
	TextInput: {
		textAlign: 'center',
		width: '100%',
		borderWidth: 0,
		fontSize: 30,
	},
	Text: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingTop: 5,
	},
});
