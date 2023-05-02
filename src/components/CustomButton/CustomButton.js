import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.conatiner,
        styles[`conatiner_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    // backgroundColor: '#3B71F3',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    // marginVertical: 25,

    alignItems: 'center',
    borderRadius: 5,
  },
  conatiner_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  conatiner_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
