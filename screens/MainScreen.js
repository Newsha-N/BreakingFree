import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  AccessibilityInfo
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import head from "../assets/new.png";
import holland from "../assets/Holland.png";
import { render } from "react-dom";
import pain from "../assets/sticker/pain.png";
import logo from "../assets/sticker/logo.png";
import own from "../assets/sticker/own.png";
import peace from "../assets/sticker/peace.png";
import tmrw from "../assets/sticker/tmrw.png";
import shareove from "../assets/sticker/shareove.png";
import today from "../assets/sticker/today.png";
import success from "../assets/sticker/success.png";
import work from "../assets/sticker/work.png";



const deviceWidth = Dimensions.get('window').width;

export default function SpotlightScreen({navigation}) {
  const [collection, setCollection] = useState(1);

  const bringsticker = (props) =>
  {
    if (collection == 0 )
    {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style = {styles.brown}>
          <Image style = {
                {
                  resizeMode: 'contain',
                  width: 177,
                  height: 129.67,
                  transform: [{rotate: "-14.02deg"}],
                  alignSelf: 'flex-start',
                  marginTop: 10,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={tmrw}/> 
              <Image style = {
                {
                  resizeMode: 'contain',
                  width: 142,
                  height: 143.67,
                  transform: [{rotate: "18.12deg"}],
                  alignSelf: 'flex-end',
                  marginRight: 15,
                  bottom: 40,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={peace}/> 
              <Image style = {
                {
                  resizeMode: 'contain',
                  width: 190,
                  height: 120.67,
                  transform: [{rotate: "-20deg"}],
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  bottom: 70,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={shareove}/>
              <Image style = {
                {
                  resizeMode: 'contain',
                  width: 250,
                  height: 151.67,
                  transform: [{rotate: "-21deg"}],
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  bottom: 90,
                  alignSelf: 'center',
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={own}/>  
          </ScrollView>
      )
    }
    if (collection == 1)
    {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style = {styles.brown}>
          <Image style = {
                {
                  resizeMode: 'contain',
                  width: 180,
                  height: 151.67,
                  transform: [{rotate: "14.3deg"}],
                  alignSelf: 'flex-end',
                  marginRight: 5,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={pain}/>  
              <Image style = {
                {
                  resizeMode: 'contain',
                  width: 217,
                  height: 151.67,
                  transform: [{rotate: "8.3deg"}],
                  alignSelf: 'center',
                  bottom: 70,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={work}/>  
              <Image style = {
                {
                  resizeMode: 'contain',
                  width: 130,
                  height: 131,
                  transform: [{rotate: "-24.02deg"}],
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                  bottom: 60,
                 // elevation: 20,
                  //shadowColor: 'rgba(198, 165, 128, 0.53)',
                  
                }
              }source={success}/>
               
                <Image style = {
                {
                  resizeMode: 'contain',
                  width: 146,
                  height: 170.67,
                  transform: [{rotate: "11.49deg"}],
                  alignSelf: 'flex-end',
                  bottom: 180, 
                  right: 20,
                  // elevation: 20,
                  // shadowColor: 'rgba(198, 165, 128, 0.53)',
                }
              }source={today}/>  
          </ScrollView>
      )
    }
  } 
  return (
    <View style={styles.container}>
      <View style={styles.top1}>
      <Image source={head} style= {{ 
          width: deviceWidth ,
          height: deviceWidth/2.90}}/>
      </View>
     <View style={styles.top2}>
      
      <Image source={holland} style= {{ 
           width: deviceWidth/2 ,
          height: deviceWidth/1.90}} />
      <View style={styles.function}>
        <View style = {styles.share}>
        <View style = {
         {
          width: 62,
          height: 27,    
          marginTop: 8,      
          backgroundColor:'#4FABF8',
          borderRadius: 22,    
          }}>
            <Text style={
              {
                textAlign: 'center',
                color: 'white',
                fontSize:20,
              }
            }>Add</Text>
         </View>
        <TouchableOpacity  onPress= {
        () => 
        { navigation.navigate("Pic");}
        }>
        <View style = {{
             
             width: 40, 
             height: 40,
             borderRadius: 50,
             backgroundColor: 'white',
             alignItems: 'center',
             justifyContent: 'center',
             borderColor: '#E4E9F2',
             marginLeft: 10,
           }}>
            <Ionicons name={"camera"} size={30} color={'#334451'} />
           </View>
        </TouchableOpacity>
        <View style = {{
             
             width: 40, 
             height: 40,
             borderRadius: 50,
             backgroundColor: 'white',
             alignItems: 'center',
             justifyContent: 'center',
             borderColor: '#E4E9F2',
             marginLeft: 10,

           }}>
            <Ionicons name={"send"} size={28} color={'#334451'} />
           </View>
        </View>
        <View style = {
          {
            bottom: 10,
            position: 'relative',
            width: 180,
            height: 78,
            backgroundColor: '#FFFFFF',
            borderRadius: 33,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }>
            <View style={{
              width: 55,
              height: 55,
              borderRadius:55,
              backgroundColor: '#334451',
              alignItems: 'center',
            justifyContent: 'center',
            }}>
              <Ionicons name={"play"} size={35} color={'white'} />

            </View>
        </View>
        <View style = {styles.gotit2} >
        <View style = {
          {
            width: 117,
            height: 30,
            backgroundColor: '#334451',
            borderRadius: 33,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }
          }>
                <Text style={{
                textAlign: 'center',
                color: 'white',
                fontSize:13,
              }}>SHARE YOUR STORY</Text>
        </View>
          <TouchableOpacity onPress= {
          () => 
          { navigation.navigate("FormScreen");}
          }>
            <View style = {{
             
             width: 40, 
             height: 40,
             borderRadius: 50,
             backgroundColor: 'white',
             alignItems: 'center',
             justifyContent: 'center',
             borderColor: '#E4E9F2',
             marginLeft: 10,
           }}>
            <Ionicons name={"add"} size={40} color={'#334451'} />
           </View>
          </TouchableOpacity>
        </View>
      </View>
     </View>
     <View style={styles.top3}>
       <View style={{
         felx: 1,
         marginTop: 10,
         flexDirection: 'row',        
         justifyContent: 'space-evenly',
         alignItems: 'center',
         }}>
       <TouchableOpacity style = {{
         position: 'relative',
       }} onPress= {() => {
          setCollection(1)
        }}
        >
          <Text style = 
          {{fontSize: 16,}}>Holland's Stickers</Text>  
          {
            collection == 1 ? 
            (
              <View style = {{
                width: 58,
                height: 5,
                backgroundColor: '#E08E47',
                borderRadius: 5,
              }} />
            ): null
          }
            

      </TouchableOpacity>
      <TouchableOpacity style = {{
      }}onPress= {() => {
        setCollection(0)
      }} >
          <Text style = 
          {{fontSize: 16,}}>Additional Stickers</Text>
          {
            collection == 0 ? 
            (
              <View style = {{
                width: 58,
                height: 5,
                alignSelf: 'flex-end',
                backgroundColor: '#F4D664',
                borderRadius: 5,
              }} />
            ): null
          }
          </TouchableOpacity>
          </View>
            {bringsticker()} 

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FDFCF1',
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',

  },
  top2:
  {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: '#F8EAB1',
    flexDirection:'row',
  },
  top3:
  {
    
    flex: 2,
  },
  funcion:
  {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-evenly'

  },
  share:
  {
    marginTop: 15,
    flex: 1,
    flexDirection:'row',
  },
  
  gotit2:
  {
    marginTop: 15,
    flexDirection:'row',
  },
  brown:
  {
    alignSelf: 'center',
    width: 330,
    height: 400,
    top: 10,
    marginBottom: 15,
    backgroundColor: "#F0E8DE",
    borderRadius: 33,
  },
});