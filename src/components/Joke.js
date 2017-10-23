import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';

import dadjokes from '../modules/dadjokes';

class Joke extends Component {
  state = {
    joke: 'What colour is a burp? Burple!',
    isLoading: false,
  };

  componentDidMount() {}

  fetchJoke = () => {
    this.setState({ isLoading: true });
    dadjokes.Api
      .getRandomJoke()
      .then(({ joke }) => this.setState({ joke, isLoading: false }));
  };

  render() {
    const { joke, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <ActivityIndicator animating={isLoading} size="large" />
        <View style={styles.jokeContainer}>
          <Text style={styles.joke}>{joke}</Text>
        </View>
        <Button
          onPress={this.fetchJoke}
          title="LOL show me another!"
          accessibilityLabel="Load another joke"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  joke: {
    textAlign: 'center',
    padding: 40,
    backgroundColor: '#eee',
  },
});

export default Joke;
