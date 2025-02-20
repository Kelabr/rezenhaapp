import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.contain}>
      <View style={styles.boxImg}>
        <Image source={require('../img/logo_branco.png')}/>
      </View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Game")}>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Image style={styles.imgCard} source={require('../img/icone_cartas.png')}/>
          <Text style={styles.textCard}>Galera</Text>
        </View>
        <View style={{height:80, display:'flex', alignItems:'flex-end', justifyContent:'flex-end', paddingRight:10, paddingBottom:10}}>
          <Image style={styles.logoCard} source={require('../img/logo_azul.png')}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity title="Sair" onPress={() => signOut(auth)} style={styles.boxSair}>
        <Text style={styles.textSair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor:'#101728',
    height:'100%',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15
  },
  boxImg:{
    display:'flex',
    alignItems:'center',
    marginBottom:30
  },
  boxSair:{
    backgroundColor:'#ffffff',
    padding:8,
    display:'flex',
    alignItems:'center',
    borderRadius:20
  },
  textSair:{
    fontSize:17,
    fontWeight:"600"
  },
  card:{
   height:130,
   backgroundColor:'#C37B38',
   borderRadius:20,
   padding:10,
   marginBottom:20
  },
  textCard:{
    fontSize:23,
    fontWeight:'600',
    marginLeft:5,
    color:'#101728'
  },
  imgCard:{
    height:30,
    width:32
  },
  logoCard:{
    height:42,
    width:45,
  }
})
