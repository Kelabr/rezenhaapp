import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

export default function GameScreen({navigation}){
    return(
        <View style={styles.contain}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.boxSair} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.sair}>Sair</Text>
                </TouchableOpacity>
                <View style={styles.imgCard}>
                    <Image source={require('../img/logo_cinza.png')} style={{height:80, width:85}}/>
                </View>
                <View style={styles.boxPergunta}>
                    <Text style={styles.pergunta}>Uma pergunta de teste</Text>
                </View>
                <View style={styles.boxButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Próxima Pergunta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contain:{
        backgroundColor:"#C37B38",
        height:'100%',
        paddingLeft:10,
        paddingRight:10,
        display:'flex',
        justifyContent:'center'
    },

    card:{
        padding:10,
        height:300,
        backgroundColor:"#ffffff",
        borderRadius:10
    },

    imgCard:{
        marginTop:10,
        display:'flex',
        alignItems:'center'
    },

    pergunta:{
        fontSize:18
    },

    boxPergunta:{
        marginTop:25,
        display:'flex',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },

    boxButton:{
        padding:15,
        marginTop:20,
        display:'flex',
        alignItems:'center'
    },

    button:{
        backgroundColor:"#C37B38",
        padding:10,
        borderRadius:10
    },

    textButton:{
        fontSize:15,
        fontWeight:"600",
        color:"#ffffff"
    },

    sair:{
        fontWeight:'600',
        fontSize:14,
        color:'#ffffff'
    },

    boxSair:{
        backgroundColor:"#C37B38",
        width:55,
        display:'flex',
        alignItems:'center',    
        padding:3,
        borderRadius:10
    }
})