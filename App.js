import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [value, onChangeValue] = React.useState();
  const [valueMultiplier, onChangeValueMultiplier] = React.useState('0.07');
  const iof = 0.065;

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.headerText}>Cambiador</Text>
            <View style={styles.appMargin}>
              <Text>Valor em peso</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={text => onChangeValue(text)}
                value={value}
                keyboardType="numeric"
              />
              <Text>Valor do peso</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={text => onChangeValueMultiplier(text)}
                value={valueMultiplier}
                keyboardType="numeric"
              />
              <Text>Valor convertido:</Text>
              <Text style={styles.text}>
                {value && valueMultiplier ? value * valueMultiplier : ''}
              </Text>
              <Text>Valor com IOF:</Text>
              <Text style={styles.text}>
                {value && valueMultiplier
                  ? value * valueMultiplier * (1 + iof)
                  : ''}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
  },
  appMargin: {
    marginTop: 30,
    margin: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
  },
  text: {
    fontSize: 24,
  },
  inputField: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
});

export default App;
