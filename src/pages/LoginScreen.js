import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login bem-sucedido!"))
      .catch((error) => console.error("Erro no login:", error.message));
  };

  return (
    
          <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.boxlogo}>
              <Image source={require('../img/logo_branco.png')} />
            </View>
            <View>
              <View style={styles.boxtitle}>
                <Text style={styles.title}>Bem Vindo ao Rezenha</Text>
                <Text style={styles.subtitle}>Um jogo pra tirar todo mundo do celular e dar umas risadas ou... quem sabe algo a mais 
                </Text>
              </View>
              <View style={styles.boxtextInput}>
                <TextInput style={styles.textInput} placeholder="Email" onChangeText={setEmail} value={email}/>
                <TextInput style={[styles.textInput, {marginTop:10}]} secureTextEntry={true} placeholder="Senha" onChangeText={setPassword} value={password}/>
              </View>
              <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity onPress={handleLogin} style={[styles.boxbottom,{width:360, height:45, marginTop:20}]}>
                  <Text style={styles.textbutton}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'center', gap:15, marginTop:15}}>
                <TouchableOpacity style={[styles.boxbottom, {marginTop:20, backgroundColor:'#D9D9D9'}]} onPress={() => navigation.navigate("Register")}>
                  <Text style={[styles.textbutton, {color:'#101728'}]}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxbottom, {marginTop:20, backgroundColor:'#D9D9D9', display:'flex', flexDirection:'row'}]}>
                  <Image source={require('../img/logo_google.png')} style={{height:20, width:20, marginRight:10}} />
                  <Text style={[styles.textbutton, {color:'#101728'}]}>Google</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boxesquecisenha}>
                <Text style={styles.esquecisenhatext}>Esqueci minha senha</Text>
              </View>
            </View>
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  boxlogo:{
    backgroundColor:'#101728',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    height:270
  },
  boxtitle:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'column',
    alignItems:'center',
    color:'#101728'
  },
  title:{
    fontSize:20,
    fontWeight:'600'
  },
  subtitle:{
    fontSize:15,
    marginTop:10,
    fontWeight:'600',
    textAlign:'center',
    color:'#878788'
  }, 
  boxbottom:{
    marginTop:30,
    backgroundColor:'#101728',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    width:160,
    borderRadius:100,
  },
  textbutton:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:17
    
  },
  boxesquecisenha:{
    display:'flex',
    alignItems:'center',
    marginTop:75,
  },
  esquecisenhatext:{
    color:"#101728",
    fontWeight:'700',
    textDecorationLine:'underline'
  },
  textInput:{
    borderRadius:20,
    paddingLeft:20,
    borderColor:"#101728",
    borderWidth:1.5

  },

  boxtextInput:{
    marginTop:30,
    paddingLeft:30,
    paddingRight:30

  }

})
