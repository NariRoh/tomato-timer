import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button({iconName, onPress}) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;







// {
//   isCounting: true | false,
//   /* 
//     true: show the stop button 
//     false: play button 
//   */
//   counterDuration: 1500, // 25 * 60
//   elapsedTime: 0
// }















