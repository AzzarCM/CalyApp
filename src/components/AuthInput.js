import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/Feather';

const AuthInput = ({
  label,
  placeholder,
  secure = false,
  value,
  onChangeText,
  border = false,
  type = 'default',
}) => {
  const [showPassword, setShowPassword] = useState(!secure);
  return (
    <View style={styles.inputSection}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={[styles.input, border && styles.border]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9B9B9B"
          secureTextEntry={!showPassword}
          keyboardType={type}
        />
        {secure && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              style={styles.icon}
              name={showPassword ? 'eye-off' : 'eye'}
              color="#000"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  inputSection: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Sora-SemiBold',
    color: '#000',
    fontSize: 17,
    marginBottom: 15,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontFamily: 'Sora-Regular',
    fontSize: 15,
    color: '#000',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
  icon: {
    fontSize: 25,
  },
  border: {
    borderColor: '#d9d7d7',
    borderWidth: 2,
  },
});

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secure: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  border: PropTypes.bool,
  type: PropTypes.string,
};
