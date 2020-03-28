import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const telaCadastro = function({navigation}) {
  return (

  <ScrollView style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.image} source={{uri:'https://www.revendoo.com.br/wp-content/uploads/2018/02/c%c3%b3pia-de-high-res-1.png'}}/>  
      <Text style={{color: '313131', fontSize: 16, fontWeight: '550', paddingTop: 15, marginTop: 10}}>Realize seu cadastro</Text>  
      <TextInput style={[styles.textInputStyle, {marginTop: 30}]} placeholder='Nome' placeholderTextColor='#7e2f89'/>  
      <TextInput style={[styles.textInputStyle, {marginTop: 25}]} placeholder='CPF' placeholderTextColor='#7e2f89'/>    
      <TextInput style={[styles.textInputStyle, {marginTop: 25}]} placeholder='Telefone' placeholderTextColor='#7e2f89'/>      
      <TextInput style={[styles.textInputStyle, {marginTop: 25}]} placeholder='E-mail' placeholderTextColor='#7e2f89'/>
      <TextInput style={[styles.textInputStyle, {marginTop: 25}]} placeholder='Confirme seu e-mail' placeholderTextColor='#7e2f89'/>
      <TextInput secureTextEntry={true} style={[styles.textInputStyle, {marginTop: 25}]} placeholder='Senha' placeholderTextColor='#7e2f89'/>
      <TextInput secureTextEntry={true} style={[styles.textInputStyle, {marginTop: 25}]} placeholder='Confirme sua senha' placeholderTextColor='#7e2f89'/>
      <TouchableOpacity style={[styles.button, {marginTop: 30, marginBottom: 300, backgroundColor: '#1564c0'}]}>
        <Text style={styles.buttonText}> {'Finalizar cadastro'.toUpperCase()} </Text>
      </TouchableOpacity>  
    </View>    
  </ScrollView>

  );  
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

  textInputStyle: {
    height: 55,
    width: 330,
    borderColor: '#7e2f89',
    borderWidth: 1,
    marginBottom: 0,
    borderRadius: 5,  
    marginTop: 40,  
    paddingHorizontal: 20,
    fontWeight: '450',
    fontSize: 16,
    color: '313131',
  },

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

export default telaCadastro;