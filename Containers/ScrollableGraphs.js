import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import MaxTrendGraph from '../Components/MaxTrendGraph';
import RPEDayGraph from '../Components/RPEDayGraph';
import RPEgraph from '../Components/RPEgraph';
const graphWidth = Dimensions.get('window').width * 0.9;
const graphHeight = Dimensions.get('window').height * 0.38;

export default class ScrollableGraphs extends Component {
	render() {
		return (
			<View style={ScrollableGraphsStyles.ScrollableGraphsViewStyle}>
				<Swiper>
					<View style={{ paddingRight: 17.5, paddingLeft: 17.5 }}>
						<MaxTrendGraph></MaxTrendGraph>
					</View>
					<View style={{ paddingRight: 17.5, paddingLeft: 17.5 }}>
						<RPEgraph></RPEgraph>
					</View>
					<View style={{ paddingRight: 17.5, paddingLeft: 17.5 }}>
						<RPEDayGraph></RPEDayGraph>
					</View>
				</Swiper>
			</View>
		);
	}
}

const ScrollableGraphsStyles = StyleSheet.create({
	ScrollableGraphsViewStyle: {
		height: graphHeight,
		borderRadius: 16,
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 24,
		shadowOffset: { height: 8 },
	},
});
