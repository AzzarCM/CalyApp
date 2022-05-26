import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getAllStudents} from '../api/student';
import {useSelector} from 'react-redux';

const Students = () => {
  const [students, setStudents] = useState([]);
  const {token} = useSelector(state => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllStudents(token);
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Students</Text>
    </View>
  );
};

export default Students;

const styles = StyleSheet.create({});
