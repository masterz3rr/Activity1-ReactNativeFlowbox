import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/style/Styles.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View style={[
        styles.squareColor,
        { backgroundColor: '#c0392b' }
      ]} >
        <View style={{
          flex: 1,
          backgroundColor: '#bdc3c7'
        }} 
        />
        <Text>Hello</Text>
      </View>

      <View style={[
        styles.squareColor,
        { backgroundColor: '#f39c12' }
      ]} >
        <View style={{
          flex: 1,
          backgroundColor: '#bdc3c7'
        }} />
      </View>

      <View style={[
        styles.squareColor,
        { backgroundColor: '#27ae60' }
      ]} >
        <View style={{
          flex: 1,
          backgroundColor: '#bdc3c7'
        }} />
      </View>
      
      <View style={[
        styles.squareColor,
        { backgroundColor: '#16a085' }
      ]} >
        <View style={{
          flex: 1,
          backgroundColor: '#bdc3c7'
        }} />
      </View>

      <View style={[
        styles.squareColor,
        { backgroundColor: '#8e44ad' }
      ]} >
        <View style={{
          flex: 1,
          backgroundColor: '#bdc3c7'
        }} />
      </View>
    </View>
  );
}


