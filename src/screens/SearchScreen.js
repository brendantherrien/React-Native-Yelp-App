import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, error] = useResults();

    const filterResultsByPrice = (price) => results.filter(result => result.price === price);

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchAPI(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>Showing {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;