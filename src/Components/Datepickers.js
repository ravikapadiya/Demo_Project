//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
// create a component
const DatePickers = ({
  setModalVisible,
  modalVisible,
  setDate,
  date
}) => {
  return (
    <View>
      <DatePicker
        mode='date'
        modal
        open={modalVisible}
        date={date}
        onConfirm={(value) => {
          setModalVisible(!modalVisible)
          setDate(value)
        }}
        onCancel={() => {
          setModalVisible(!modalVisible)
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default DatePickers;
