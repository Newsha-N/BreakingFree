import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import Free from "../assets/Peace.png"
export default function ChatScreen({ route, navigation }) {
  const [imageURI, setImageURI] = useState(null);
  const [messages, setMessages] = useState([]);

  const { chatName, currUser } = route.params;

  useEffect(() => {
    let unsubscribeFromNewSnapshots = db
      .collection("Chats")
      .doc(chatName)
      .onSnapshot((snapshot) => {
        console.log("New Snapshot!");
        let newMessages = snapshot.data().messages.map((singleMessage) => {
          singleMessage.createdAt = singleMessage.createdAt.seconds * 1000;
          return singleMessage;
        });
        setMessages(newMessages);
      });

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);

  const onSend = useCallback(
    async (messages = []) => {
      if (messages.length < 1) return;

      if (imageURI !== null) {
        let downloadURL = await uploadImage();
        if (downloadURL) {
          messages[0].image = downloadURL;
        }
      }

      db.collection("Chats")
        .doc(chatName)
        .update({
          // arrayUnion appends the message to the existing array
          messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
          lastUpdated: Date.now(),
        });
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [imageURI]
  );

  const uploadImage = async () => {
    const filepath = imageURI;
    setImageURI(null);
    const filename = filepath.substring(filepath.lastIndexOf("/") + 1);
    const response = await fetch(filepath);
    const blob = await response.blob();

    const uploadTask = firebase
      .storage()
      .ref(user.uid + "/" + filename)
      .put(blob);
    // set progress state
    uploadTask.on("state_changed", (snapshot) => {
      // setTransferred(
      //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      // );
    });

    let downloadURL = null;

    try {
      await uploadTask;
      downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
    } catch (e) {
      console.error(e);
    }

    return downloadURL;
  };

  // Replace if using SNAP MINI...
  //const renderAccessory = null;
  const renderAccessory = (props) => (
    <View>
      <TouchableOpacity
        onPress={() => {
         navigation.navigate("BreakingBread");
        }}>
          <Text style= {{
            textAlign: 'center'
          }}>Launch Snap Mini!</Text>
        <Image sytle = {
          {
            marginTop: 10,
            height: 5,
            width: 5,
            }
        } source={Free} />
      </TouchableOpacity>
    </View>
  );

  const renderActions = (props) => {
    return (
   
      <Actions
        {...props}
        options={{
          ["Camera"]: handleCamera,
          ["Image Library"]: handleLibrary,
          Cancel: () => {
            console.log("Cancel");
          },
        }}
        icon={() =>
          imageURI ? (
            <Image
              style={{ width: 32, height: 32 }}
              source={{ uri: imageURI }}
            />
          ) : (
            <View style = {{
             
              width: 40, 
              height: 40,
              borderRadius: 50,
              backgroundColor: '#EDEFF2',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#E4E9F2',
            }}>
             <Ionicons name={"camera"} size={30} color={'#424344'} />
            </View>
          )
        }
      />
    );
  };

 const  renderInputToolbar= (props) =>
   {
     return (
       <InputToolbar {...props} containerStyle={{
        backgroundColor: 'white',
        paddingTop: 6,
      }}
      primaryStyle={{ alignItems: 'center' }} />
     );
   }
  const handleCamera = async () => {
    if (Platform.OS !== "web") {
      let permissions = await ImagePicker.getCameraPermissionsAsync();
      if (!permissions.granted) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    }

    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      setImageURI(result.uri);
    }
  };
  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: '#222B45',
        width: 10,
        backgroundColor: '#EDF1F7',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E4E9F2',
        paddingHorizontal: 12,
        marginLeft: 20,
      }}
    />
  );
  const renderSend = (props) => (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        //marginHorizontal: 4,
        marginRight: 10,
      }}
    >
      
    </Send>
  );
  const handleLibrary = async () => {
    if (Platform.OS !== "web") {
      let permissions = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!permissions.granted) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageURI(result.uri);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        // current "blue bubble" user
        _id: currUser.uid,
        name: currUser.displayName,
        avatar: currUser.photoURL ? currUser.photoURL : null,
      }}
      renderInputToolbar={renderInputToolbar}
      inverted={false}
      placeholder={"Chat"}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
      renderActions={renderActions}
      renderAccessory={renderAccessory}
      renderComposer={renderComposer}
      renderSend = {renderSend}
    />
  );
}

