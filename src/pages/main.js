import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { StyledButton } from '../components/Button';
import { NotesList } from '../components/NotesList';

export const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const createNote = () => {
    if (inputText.length > 10) {
      setNotes([
        ...notes,
        {
          note: inputText
        }
      ])
    } else {
      Alert.alert('Nota muito pequena.', 'Aumenta isso ae.')
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bloco de notas!</Text>

      <TextInput style={styles.input} onChangeText={text => setInputText(text)} value={inputText}/>

      <StyledButton onPress={createNote}>Criar nota</StyledButton>

      <View>
        <NotesList notes={notes} />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1C'
  },
  input: {
    backgroundColor: '#F2F2F2',
    marginBottom: 30,
    padding: 10,
    minWidth: 200
  },
  title: {
    fontSize: 22,
    color: '#F2F2F2',
    marginBottom: 30
  }
})