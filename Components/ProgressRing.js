import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
const ringWidth = Dimensions.get('window').width * 0.91;
const ringData = {
	labels: ['Swim', 'Bike', 'Run'], // optional
	data: [0.8, 0.9, 0.9],
};
const chartConfig = {
	color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
	strokeWidth: 3, // optional, default 3
	propsForLabels: {
		strokeWidth: '1',
		stroke: 'white',
		fontSize: '9',
		fontWeight: '200',
	},
};
export default class ProgressRing extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProgressChart
				data={ringData}
				width={ringWidth}
				height={220}
				strokeWidth={14}
				radius={30}
				chartConfig={chartConfig}
				hideLegend={false}
				style={RingStyles.chartSyle}
			/>
		);
	}
}

const RingStyles = StyleSheet.create({
	chartSyle: { borderRadius: 16 },
});
