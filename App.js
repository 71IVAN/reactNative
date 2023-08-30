import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { styles, myimage } from './assets/styles/styles1'

export default function App() {
  //States
  const [valueUno, setValueUno] = useState('');
  const [valueDos, setValueDos] = useState('');
  const [result, setResult] = useState('');
  //

  let mymess = "Este es el pie de la GUI";
  let mimage = "calAntigua.jpg";

  //Metodos

  let calculate = (operator) => { 
    let mresult = 0
    let mvalueUno = parseFloat(valueUno)
    let mvalueDos = parseFloat(valueDos)
    switch (operator) {
      case "+":
        mresult = mvalueUno + mvalueDos;
        break;
      
        case "-":
          mresult = mvalueUno - mvalueDos;
          break;

        case "*":
        mresult = mvalueUno * mvalueDos;
        break;

        case "/":
          mresult = mvalueUno / mvalueDos;
          break;
      }
      setResult(mresult); // actuaizando la variable de estado 
    }

  return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
      <View style={{ flex: 4, backgroundColor: '#995560', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calculadora</Text>
        <Text>Valor 1</Text>
        <TextInput
          label='Valor 1'
          onChangeText={valueUno => setValueUno(valueUno)}
          value={valueUno}
          style={{ backgroundColor: 'pink' }}
          left={<TextInput.Icon icon="numeric"/>}
        />

<Text>Valor 2</Text>
      <TextInput
        label='Valor 2'
        onChangeText={valueDos => setValueDos(valueDos)}
        value={valueDos}
        style={ {backgroundColor: 'pink'}}
        left={<TextInput.Icon icon="calculator"/>}
      />
      <Text>Resutado:</Text>
      <Text>{parseFloat(result).toFixed(1)}</Text>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
  <Button icon="plus" 
  mode="contained" 
  onPress={()=>calculate("+")}>
  sumar
  </Button>

  <Button icon="minus" 
  mode="contained" 
  onPress={()=>calculate("-")}>
  restar
  </Button>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
  <Button icon="multiplication" 
  mode="contained" 
  onPress={() =>calculate('*')}>
  multiplicar
  </Button>

  <Button icon="division" 
  mode="contained" 
  onPress={() => calculate('/')}>
  dividir
  </Button>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
  <Button icon="exponent" 
  mode="contained" 
  onPress={() =>calculate('^')}>
  exponencial
  </Button>

  <Button icon="division" 
  mode="contained" 
  onPress={() => calculate('/')}>
  radical
  </Button>

      </View>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <Button icon="broom" 
  mode="contained" 
  onPress={() => {
    setValueUno('')
    setValueDos('')
    setResult('')
  }}>
  limpiar
  </Button>
      
      </View>

      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Footer message="Este es el footer"></Footer>
      </View>
    </View>
  );
}