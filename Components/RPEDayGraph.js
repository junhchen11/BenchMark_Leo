import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';

const graphWidth = Dimensions.get('window').width * 0.91;
const graphHeight = Dimensions.get('window').height * 0.25;
const RPEDateData = [
	{ date: '2017-01-02', count: 1 },
	{ date: '2017-01-03', count: 2 },
	{ date: '2017-01-04', count: 3 },
	{ date: '2017-01-05', count: 4 },
	{ date: '2017-01-06', count: 5 },
	{ date: '2017-01-30', count: 2 },
	{ date: '2017-01-31', count: 3 },
	{ date: '2017-03-01', count: 2 },
	{ date: '2017-04-02', count: 4 },
	{ date: '2017-03-05', count: 2 },
	{ date: '2017-02-30', count: 4 },
];
const chartConfig = {
	color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
	strokeWidth: 3, // optional, default 3
	propsForLabels: {
		strokeWidth: '1',
		stroke: 'white',
		fontSize: '12',
		fontWeight: '200',
	},
};
export default class RPEDayGraph extends Component {
	render() {
		return (
			<View style={DaysWorkedStyles.viewStyle}>
				<Text style={DaysWorkedStyles.textStyle}>Frequency</Text>
				<ContributionGraph
					style={DaysWorkedStyles.chartStyle}
					values={RPEDateData}
					endDate={new Date('2017-04-01')}
					numDays={64}
					width={graphWidth}
					height={graphHeight}
					squareSize={20}
					horizontal={true}
					chartConfig={chartConfig}
				/>
			</View>
		);
	}
}

const DaysWorkedStyles = StyleSheet.create({
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
		marginTop: 10,
		marginLeft: 10,
		paddingLeft: 9,
	},
});
