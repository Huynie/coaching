import React from 'react';
import { StyleSheet, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <CalendarPicker
        minDate={Date()}
        restrictMonthNavigation={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      padding: 15,
      marginTop: 20,
    }
  });
  
export default Calendar;
