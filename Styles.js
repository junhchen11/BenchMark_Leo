import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		justifyContent: 'space-evenly',
	},
	cardStyle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: '#FFF',
		width: '91.66666%',
		height: '27%',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 24,
		shadowOffset: { height: 8 },
	},
});
