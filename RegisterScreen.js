import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MovieApp.</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          placeholderTextColor={'gray'}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor={'gray'}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Create Password"
          placeholderTextColor={'gray'}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Retype Password"
          placeholderTextColor={'gray'}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.subTextLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191716',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  titleText: {
    fontFamily: 'Commissioner-ExtraBold',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    fontSize: 40,
    color: 'white',
  },
  inputField: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 18,
    fontFamily: 'Commissioner-SemiBold',
  },
  buttonContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    width: 160,
    marginTop: 50,
  },
  loginText: {
    fontSize: 24,
    fontFamily: 'Commissioner-ExtraBold',
    color: 'white',
    textAlign: 'center',
  },
  subTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
  },
  subText: {
    fontFamily: 'Commissioner-Regular',
    fontSize: 16,
  },
  subTextLink: {
    fontFamily: 'Commissioner-Bold',
    fontSize: 16,
    color: 'beige',
  },
});

export default RegisterScreen;
