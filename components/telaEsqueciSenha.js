import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const telaEsqueciSenha = function({navigation}) {
  return (

  <View style={styles.container}>
	   {/*<View style={styles.header}>
	   </View>*/}
    <View style={styles.content}>
      <Image style={styles.image} source={{uri:'https://www.revendoo.com.br/wp-content/uploads/2018/02/c%c3%b3pia-de-high-res-1.png'}}/>  
      <Text style={{color: '#7e2f89', fontSize: 15, fontWeight: '450', paddingTop: 15}}>Sua melhor ferramenta de vendas</Text>     
      <Text style={{color: '313131', fontSize: 15, fontWeight: '450', marginTop: 60}}>Para recuperar sua senha, informe seu e-mail</Text>      
      <TextInput style={[styles.textInputStyle, {marginTop: 40}]} placeholder='E-mail' placeholderTextColor='#7e2f89'/>
      <TouchableOpacity style={[styles.button, {marginTop: 45, backgroundColor: '#31d331'}]}>
        <Text style={styles.buttonText}> {'Recuperar a senha'.toUpperCase()} </Text>
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

export default telaEsqueciSenha;