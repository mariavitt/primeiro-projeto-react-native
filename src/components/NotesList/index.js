import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';


const Note = ({item}) => (
    <TouchableOpacity style={styles.container} onLongPress>
        <Text style={styles.text}>{item.note}</Text>
    </TouchableOpacity>
)

export const NotesList = ({notes}) => (
    <FlatList
        data={notes}
        renderItem={Note}
    />
)

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3F781',
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginTop: 20,
      borderTopLeftRadius: 10,
      borderTopEndRadius: 10
    },
    text: {
      fontSize: 14,
      color: '#000000',
    }
  })