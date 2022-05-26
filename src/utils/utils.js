import React from 'react';
import {Image} from 'react-native';
import TimeAgo from 'javascript-time-ago'

import Tick from '../assets/toast/tick.png';
import Warning from '../assets/toast/warning.png';
import Close from '../assets/toast/close.png';
import Toast from '../components/Modals/Toast';

export function showToast(type, title, text) {
  const color =
    type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#f39c12';
  const image = type === 'success' ? Tick : type === 'error' ? Close : Warning;
  Toast.show({
    title,
    text,
    color,
    timing: 2000,
    icon: (
      <Image
        source={image}
        style={{width: 25, height: 25}}
        resizeMode="contain"
      />
    ),
  });
}

export function getColor(value) {
  if (value <= 40) {
    return '#EC6666';
  } else if (value > 40 && value <= 80) {
    return 'orange';
  } else {
    return '#26C788';
  }
}

export function getInactiveColor(value) {
  if (value <= 40) {
    return '#e74c3c';
  } else if (value > 40 && value <= 80) {
    return '#f39c12';
  } else {
    return '#2ecc71';
  }
}


export function timeAgo(date) {
  const timeAgo = new TimeAgo('en-US')
  const result = timeAgo.format(date)
  const [ time, unit ] = result.split(' ')
  if (result === 'just now' || unit.includes('second')) {
    return '1 min'
  } else if (unit.includes('day')) {
    return `${time}d`
  }else if (unit.includes('hour')) {
    return `${time}h`
  } else if (unit.includes('minute')) {
    return `${time} min`
  } else if (unit.includes('week')) {
    return `${time} sem`
  } else if (unit.includes('month')) {
    return `${time} m`
  } 
  else {
   return `${time}a` 
  }
}
