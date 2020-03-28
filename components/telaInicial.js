import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const telaInicial = function({navigation}) {
  return (

  <View style={styles.container}>
	  {/*<View style={styles.header}>
	   </View>*/}
    <View style={styles.content}>
      <Image style={styles.image} source={{uri:'https://www.revendoo.com.br/wp-content/uploads/2018/02/c%c3%b3pia-de-high-res-1.png'}}/>  
      <Text style={{color: '#7e2f89', fontSize: 15, fontWeight: '450', paddingTop: 15}}>Sua melhor ferramenta de vendas</Text>
      <TouchableOpacity style={[styles.button, {marginTop: 80, backgroundColor: '#3b5999'}]}>
        <Text style={styles.buttonText}> {'Entrar com Facebook'.toUpperCase()} </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={[styles.button, {marginTop: 30, backgroundColor: '#d72d20'}]}>
        <Text style={styles.buttonText}> {'Entrar com Google'.toUpperCase()} </Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => {navigation.navigate('Cadastro');}} style={[styles.button, {marginTop: 30, backgroundColor: '#1564c0'}]}>
        <Text style={styles.buttonText}> {'Cadastrar com E-mail'.toUpperCase()} </Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => {navigation.navigate('Login');}} style={[styles.button, {marginTop: 30, borderWidth: 2, borderColor: '#2c6cae'}]}>
        <Text style={[styles.buttonText, {color: '#2c6cae'}]}> {'Já sou cadastrado'.toUpperCase()} </Text>
      </TouchableOpacity>  
    </View>     
  </View>

  );  
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

	/*header: {
		height: 50,
		backgroundColor: '#7e2f89',
		paddingHorizontal: 20,
		paddingTop: 20,   
		flexDirection: 'row',
    alignItems: 'center',
		justifyContent: 'center',
	},*/

  image: {
    width: 200,
    height: 50,
    marginTop: 55,
  },

  button: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,    
    width: 330,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  content: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',    
    paddingHorizontal: 20,
    flex: 1,
  },

});

export default telaInicial;