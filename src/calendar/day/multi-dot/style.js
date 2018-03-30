import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 25,
      height: 25,
      alignItems: 'center',
    },
    text: {
      marginTop: Platform.OS === 'android' ? 1 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '500',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 4,
    },
    todayText: {
      color: appStyle.todayTextColor,
      marginTop: Platform.OS === 'android' ? 0 : 4.25,
    },
    newTodayText: {
      borderRadius: 4,
      borderWidth: 1.5,
      borderColor: '#42b346',
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 6,
      height: 2,
      marginTop: Platform.OS === 'android' ? 3 : 3,
      marginLeft: 1,
      marginRight: 1,
      opacity: 0,
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    my: {
      alignItems:'center',
      width: 25,
      height: 25
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
