import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salvar dados adicionais no Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        sexo,
        idade: parseInt(idade),
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Home"); // Redirecionar para Home após cadastro
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.boxlogo}>
        <Image source={require('../img/logo_azul.png')} style={{height:220, width:240}} />
    </View>        
    <View style={{marginTop:10}}>
      <View style={{display:'flex', alignItems:'center', marginBottom:20}}>
        <Text style={{fontSize:25, fontWeight:'700'}}>Cadastro</Text>
      </View>
      
      <TextInput style={styles.textInput} placeholder="Nome" onChangeText={setName} value={name} />
      <TextInput style={styles.textInput} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={styles.textInput} placeholder="Senha"  onChangeText={setPassword} value={password} secureTextEntry />
      <TextInput style={styles.textInput} placeholder="Confirmar Senha" onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry />
      <TextInput style={styles.textInput} placeholder="Sexo (M/F)" onChangeText={setSexo} value={sexo} />
      <TextInput style={[styles.textInput, {marginBottom:15}]} placeholder="Idade" onChangeText={setIdade} value={idade} keyboardType="numeric" />

      <TouchableOpacity style={styles.boxbottom} onPress={handleRegister}>
        <Text style={[styles.textbutton]}>Cadastrar</Text>
      </TouchableOpacity>
      {/* <Button title="Criar Conta" onPress={handleRegister} />
      <Button title="Já tem uma conta? Faça login" onPress={() => navigation.navigate("Login")} /> */}
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        padding:30
    },
    textInput:{
        borderRadius:20,
        paddingLeft:20,
        borderColor:"#101728",
        borderWidth:1.5,
        marginBottom:10
    
    },
    boxlogo:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        height:270,
      },
    
    boxbottom:{
        backgroundColor:'#101728',
        height:48,
        justifyContent:'center',
        alignItems:'center',
        width:351,
        borderRadius:100,
      },
    textbutton:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:19
        
      },
})