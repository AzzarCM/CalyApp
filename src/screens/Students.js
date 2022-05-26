import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getAllStudents} from '../api/student';
import {useSelector, useDispatch} from 'react-redux';
import StudentCard from '../components/Student/StudentCard';
import Button from '../components/Button';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import Spinner from '../components/Spinner';
import {finishLoading, startLoading} from '../redux/actions/ui';
import Message from '../components/Message';

const Students = ({navigation}) => {
  const [students, setStudents] = useState([]);
  const {token, role, uid} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startLoading());
      const response = await getAllStudents(uid, token);
      if (response.ok) {
        const {
          response: {data},
        } = response;
        setStudents(data);
      }
      dispatch(finishLoading());
    };
    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.btnContainer}>
            <Button
              text="Crear un estudiante"
              onPress={() => navigation.navigate('CreateStudent')}
            />
          </View>
          {students.length > 0 ? (
            <View style={styles.scrollContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={students}
                renderItem={({item}) => <StudentCard student={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <Message text="No tienes estudiantes" />
          )}
        </>
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
    height: '85%',
    paddingBottom: 20,
  },
  btnContainer: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: 40,
    position: 'absolute',
    bottom: 0,
  },
});
