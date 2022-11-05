import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { render } from "react-native-web";
import Items from "../componenets/Items";
import SearchBar from "../componenets/SearchBar";
import useResults from "../hooks/useResults";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMessage] = useResults(term);

  return (
    <View style={styles.BackgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        submitTerm={() => {}}
      />

      {errorMessage ? (
        <Text style={{ top: 40, left: 25, position: "relative" }}>
          {errorMessage}
        </Text>
      ) : null}

      <Text style={{ top: 50, left: 25 }}>
        Have Founded ! {results.length} Results
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 10,
          marginTop: 70,
          flex: 1,
        }}
      >
        <Items results={results} navigation={navigation} />

        <Items results={results} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackgroundStyle: {
    backgroundColor: "rgb(225,227,226)",
    flex: 1,
    width: "100%",
    index: 11,
  },
});

export default HomeScreen;
