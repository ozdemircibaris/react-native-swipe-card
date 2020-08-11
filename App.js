import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';

const data = [
  { id: "1", title: "a", backgroundColor: 'red' },
  { id: "2", title: "b", backgroundColor: 'green' },
  { id: "3", title: "c", backgroundColor: 'blue' },
  { id: "4", title: "d", backgroundColor: 'pink' },
  { id: "5", title: "e", backgroundColor: 'aqua' },
]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;

export default class App extends Component {
  cardRenderItem = ({ item }) => {
    return (
      <View style={[styles.cardWrapper, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.cardTitle}> {item.id} </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          style={{ maxHeight: PhoneHeight * 0.3 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.cardRenderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  cardWrapper: {
    width: PhoneWidth,
    height: PhoneHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 20
  }
})