import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Header } from 'react-navigation-stack';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import telaInicial from './components/telaInicial';
import telaLogin from './components/telaLogin';
import telaCadastro from './components/telaCadastro';
import telaEsqueciSenha from './components/telaEsqueciSenha';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={telaInicial} options={{
          title: '',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#7e2f89' },
          height: Header.height,
        }}/>
        <Stack.Screen name="Login"   component={telaLogin} options={{
          title: '',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#7e2f89' },
          headerBackTitle: 'Voltar',
          height: Header.height,
        }}/>
        <Stack.Screen name="Cadastro"   component={telaCadastro} options={{
          title: '',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#6b39b6' },
          headerBackTitle: 'Voltar',
          height: Header.height,
        }}/>
        <Stack.Screen name="esqueciSenha"   component={telaEsqueciSenha} options={{
          title: '',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#6b39b6' },
          headerBackTitle: 'Voltar',
          height: Header.height,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

