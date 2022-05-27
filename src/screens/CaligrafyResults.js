import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import ResultComponent from '../components/Result/ResultWithPercentageIndicator';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {useSelector, useDispatch} from 'react-redux';
import {getResultsById} from '../api/result';
import Message from '../components/Message';
import {finishLoading, startLoading} from '../redux/actions/ui';
import Spinner from '../components/Spinner';

export default function CaligrafyResults({route}) {
  const { idStudent } = route.params; 
  const dispatch = useDispatch();
  const {uid, token} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.ui);
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(startLoading());
    const id = idStudent || uid;
    getResultsById(id, token).then(response => {
      if (response.ok) {
        setResults(response.data);
      } else {
        console.log(response.error);
      }
      dispatch(finishLoading());
    });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      {loading ? (
        <Spinner />
      ) : results.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={results}
          renderItem={({item}) => <ResultComponent item={item} />}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.container}
          horizontal={false}
        />
      ) : (
        <Message text="No hay resultados" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
  },
  container: {
    paddingVertical: 20,
    maxWidth: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
