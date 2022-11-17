import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const graphWidth = Dimensions.get('window').width * 0.91;
const graphHeight = Dimensions.get('window').height * 0.25;
const data = {
	labels: [
		'11/10',
		'11/13',
		'11/16',
		'11/17',
		'11/18',
		'11/19',
		'11/25',
		'11/31',
		'11/14',
	],
	datasets: [
		{
			data: [100, 165, 190, 225, 235, 275, 285, 303, 315],
			color: (opacity = 1) => `rgba(90, 255, 255, ${opacity})`, // optional
			strokeWidth: 2, // optional
		},
	],
};
const chartConfig = {
	color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	strokeWidth: 3, // optional, default 3
	propsForLabels: {
		strokeWidth: '1',
		stroke: 'white',
		fontSize: '9',
		fontWeight: '200',
	},
};
export default class MaxTrendGraph extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={MaxTrendGraphStyle.viewStyle}>
				<Text style={MaxTrendGraphStyle.textStyle}>History</Text>
				<LineChart
					data={data}
					width={graphWidth}
					height={graphHeight}
					chartConfig={chartConfig}
					style={MaxTrendGraphStyle.chartStyle}
				></LineChart>
			</View>
		);
	}
}

const MaxTrendGraphStyle = StyleSheet.create({
	chartStyle: {
		backgroundColor: 'black',
		borderRadius: 16,
	},
	viewStyle: {
		backgroundColor: 'black',
		borderRadius: 16,
	},
	textStyle: {
		backgroundColor: 'black',
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold',
		margin: 10,
		paddingLeft: 9,
	},
});
