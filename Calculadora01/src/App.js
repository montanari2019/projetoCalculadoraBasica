import React, {useState} from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

import Button from '../components/button'
import TextInput from '../components/input'

export default function App(){

  const [a , setA] = useState(0)
  const [b , setB] = useState(0)
  const [result , setResult] = useState(0)

  function somar(){
    setResult(a + b)
    
  }

  function subtrair(){
    if(a < b){
      setResult(a - b)
    }else{
      setResult(a - b)
    }
    
  }
  function dividir(){
    setResult(a / b)
    
  }
  function multiplicacao (){
    setResult(a * b)
    
  }

  return (
    <SafeAreaView style={[styles.container]}>  
    <ScrollView>
          <View style={styles.inputArea}>
            <TextInput 
              titlePlaceholder='A'
              onChangeText={setA}
            />
            <TextInput 
              titlePlaceholder='B'
              onChangeText={setB}
            />
          </View>


          <View style={styles.button}>
            <Button
              titulo="+"
              onClick={somar}
            />

            <Button
            titulo="-"
            onClick={subtrair}
          />       
          </View>

          <View style={styles.button}>
            <Button
              titulo="/"
              onClick={dividir}
            />

            <Button
            titulo="*"
            onClick={multiplicacao}
          />       
          </View>


          <Text
            style={styles.resultado}
          > {result} </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    
    
  },
  container: {
    margin: 10,
    padding: 10,
    flex: 1,
  },
  resultado: {
    // flex: 1,
    fontSize:60,
    marginTop:100,
    color: '#252525',
    textAlign: 'center',
    alignItems: 'flex-end'

  },
  button:{
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

})