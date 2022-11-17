import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import react from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SubmitIcon extends react.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flexDirection: 'row-reverse' }}>
				<Icon name="add-circle" size={40} />
			</View>
		);
	}
}
