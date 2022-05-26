import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getAllStudents} from '../api/student';
import {useSelector} from 'react-redux';
import StudentCard from '../components/Student/StudentCard';
import Button from '../components/Button';

const Students = ({navigation}) => {
  const [students, setStudents] = useState([]);
  const {token, role} = useSelector(state => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      const {response} = await getAllStudents(token);
      const {data, status_code} = response;
      if (status_code === 200) setStudents(data);
    };
    fetchData();
  }, []);

  if (!students) return null;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {students &&
          students.map((item, index) => (
            <StudentCard key={index} navigation={navigation} student={item} />
          ))}
      </ScrollView>
      {role === 'teacher' && (
        <View style={styles.btnContainer}>
          <Button
            text="Crear un estudiante"
            onPress={() => console.log('hi')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Students;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  btnContainer: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: 40,
  },
});
