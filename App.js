import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoalCard from './Components/GoalCard';
import MaxTrendGraph from './Components/MaxTrendGraph';
import ProgressRing from './Components/ProgressRing';
import RPEDayGraph from './Components/RPEDayGraph';
import RPEgraph from './Components/RPEgraph';
import LiftCard from './Containers/LiftCard';
import ScrollableGraphs from './Containers/ScrollableGraphs';
import SwiperComponent from './Containers/ScrollableGraphs';
import { styles } from './Styles';

liftStats = {
	sets: '3',
	reps: '8',
	weight: '315',
	lift: 'Bench',
	date: '10/30/20',
	curMax: '415',
};
export default function App() {
	return (
		<View style={styles.Container}>
			<GoalCard></GoalCard>
		</View>
	);
}
