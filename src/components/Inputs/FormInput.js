import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const FormInput = ({
	label,
	type = 'default',
	value,
	mandatory = false,
	onChangeText,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				<Text style={styles.label}>{label}</Text>
				<Text style={styles.mandatory}>{mandatory && '*'}</Text>
			</View>

			<TextInput
				keyboardType={type}
				onChangeText={onChangeText}
				selectionColor="#060948"
				style={styles.input}
				value={value}
			/>
		</View>
	);
};

export default FormInput;

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	input: {
		borderColor: '#d9d7d7',
		borderWidth: 2,
		borderRadius: 10,
		paddingVertical: 6,
		paddingHorizontal: 15,
		fontSize: 17,
        backgroundColor: '#Fff',
        fontFamily: 'Sora-Regular',
	},
	label: {
		fontSize: 17,
		color: '#000000',
		marginBottom: 10,
        fontFamily: 'Sora-Medium',
	},
	labelContainer: {
		flexDirection: 'row',
	},
	mandatory: {
		fontSize: 17,
		color: '#B71C1C',
		fontWeight: 'bold',
		marginLeft: 4,
		marginBottom: 10,
	}
});

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	mandatory: PropTypes.bool,
	onBlur: PropTypes.func,
	onChangeText: PropTypes.func,
};