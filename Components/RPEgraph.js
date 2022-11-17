import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { BarChart, StackedBarChart } from 'react-native-chart-kit';
const graphWidth = Dimensions.get('window').width * 0.91;
const graphHeight = Dimensions.get('window').height * 0.25;
const RPEdata = {
	labels: ['11/10', '11/13', '11/16', '11/17', '11/18'],
	datasets: [
		{
			data: [9, 8, 10, 7, 8],
		},
	],
};
const chartConfig = {
	color: (opacity = 1) => `rgba(90, 255, 255, ${opacity})`,
	strokeWidth: 3, // optional, default 3
	propsForLabels: {
		strokeWidth: '1',
		stroke: 'white',
		fontSize: '9',
		fontWeight: '200',
	},
};
export default class RPEgraph extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={RPEchartstyles.viewStyle}>
				<Text style={RPEchartstyles.textStyle}>RPE</Text>
				<BarChart
					data={RPEdata}
					height={graphHeight}
					width={graphWidth}
					style={RPEchartstyles.chartStyle}
					showLegend={false}
					fromZero={true}
					chartConfig={chartConfig}
				></BarChart>
			</View>
		);
	}
}

const RPEchartstyles = StyleSheet.create({
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
