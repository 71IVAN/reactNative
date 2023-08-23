import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
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
  return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
      <View style={{ flex: 4, backgroundColor: 'gray', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calculadora</Text>
        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese valor 1'
          onChangeText={valueUno => setValueUno(valueUno)}
          value={valueUno}
          style={{ padding: 10, textAling: 'center', borderRadius: 10, borderColor: 'green' }}
        />

      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Footer message="Este es el footer"></Footer>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: 'orange', padding: 5, borderRadius: 10, marginLeft: 5 }}>

          <Text style={{ fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'red', padding: 5, borderRadius: 10, marginLeft: 5 }}>

          <Text style={{ fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 5, borderRadius: 10, marginLeft: 5 }}>

          <Text style={{ fontWeight: 'bold' }}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'purple', padding: 5, borderRadius: 10, marginLeft: 5 }}>

          <Text style={{ fontWeight: 'bold' }}>/</Text>
        </TouchableOpacity>

      </View>

      <Text>Valor 2</Text>
      <TextInput
        placeholder='Ingrese valor 2'
        onChangeText={valueDos => setValueDos(valueDos)}
        value={valueDos}
        style={styles.tInput}
      />
    </View>
  );
}





