import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import VocabularyCard from '../components/Vocabulario/VocabularyCard';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {finishLoading, startLoading} from '../redux/actions/ui';
import {getAllWords} from '../api/vocabulary';
import { showToast } from '../utils/utils';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

export default function Vocabulario() {
  const [vocabulary, setVocabulary] = useState([]);
  const {token} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.ui);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startLoading());
      const response = await getAllWords(token);
      if (response.ok) {
        const {data} = response;
        setVocabulary(data);
      }else {
        showToast('error', '¡Oh no!', 'Ocurrió un error al cargar los datos');
      }
      dispatch(finishLoading());
    };

    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {vocabulary.length > 0 ? (
            <View style={styles.scrollContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={vocabulary}
                renderItem={({item}) => <VocabularyCard item={item} />}
                keyExtractor={item => item._id}
                contentContainerStyle={styles.scrollContainer}
              />
            </View>
          ) : (
            <Message text="No hay palabras" />
          )}
        </>
      )}
      {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
        <VocabularyCard image={flores} text="flores" navigation={navigation} />
        <VocabularyCard image={flores} text="flores" navigation={navigation} />
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
