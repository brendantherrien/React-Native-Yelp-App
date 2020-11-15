import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.icon} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e7e7e7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;