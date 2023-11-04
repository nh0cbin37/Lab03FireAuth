import { TextInput, Button,HelperText } from 'react-native-paper';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableHighlight,Alert } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth'
const Signup = ({ navigation }) => {
  imageBackground = { uri: 'https://legacy.reactjs.org/logo-og.png' }
  imageOnFront = { uri: 'https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png' }
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [EnPassword, setEnPassword] = useState("")
  const [isLoad, setIsLoad] = useState(false)
  const [setSecurity, IsSetcurity] = useState(true)

  const hasErrors = (type) => {
    switch(type){
      case 'isEmail':
        return !Email.includes('@') && Email ;
      case 'isPassword':
        return Password.length < 6 && Password;
      case 'isEnPassword':
        return EnPassword !== Password && EnPassword;
      default:false;
    }
  };

  const signupWithEmailaPassword = async (email,password,type) =>
  {
    if(Email.includes('@') && Password.length >= 6  && EnPassword === Password ){
    try {
      await auth().createUserWithEmailAndPassword(email,password);
      navigation.navigate('Login');
      console.log('Dki thanh cong');
    }
    catch(e)
    {
     //tiep
      Alert.alert(e)
    }
    }else Alert.alert("Thông tin không đúng")
  } 



  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
        <View style={styles.containerTilte}>
          <Image source={imageOnFront} resizeMode="center" style={styles.imageOnFront} />
          <Text style={styles.text}>Đăng kí</Text>
          <TextInput
            style={styles.textInput}
            lable="Email"
            value={Email}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={text => setEmail(text)}></TextInput>
            <HelperText type="error" visible={hasErrors('isEmail')}>
            Email chưa đúng định dạng
        </HelperText> 
          <TextInput
            style={styles.textInput}
            lable="Password"
            value={Password}
            placeholder="Mật khẩu"
            mode='outlined'
            secureTextEntry={setSecurity}
            right={
              <TextInput.Icon
                name="eye-settings"
                onPress={() => {
                  IsSetcurity(!setSecurity);
                }}
              />}
            underlineColorAndroid="transparent"
            onChangeText={text => setPassword(text)}>
          </TextInput>
          <HelperText type="error" visible={hasErrors('isPassword')}>
            Mật khẩu phải có từ 6 kí tự
        </HelperText>
          <TextInput
            style={styles.textInput}
            lable="En-Password"
            value={EnPassword}
            placeholder="Nhập lại mật khẩu"
            mode='outlined'
            secureTextEntry={setSecurity}
            right={
              <Icon name="email" size={24} style={styles.Icon} />}
            underlineColorAndroid="transparent"
            onChangeText={text => setEnPassword(text)}>
          </TextInput>
          <HelperText type="error" visible={hasErrors('isEnPassword')}>
            Mật khẩu nhập lại không đúng
        </HelperText>   
          <Text style={{ color: "white", alignSelf: "flex-end", paddingRight: 60, fontStyle: "italic" ,paddingBottom:'5%',fontSize:15}}  onPress={() =>navigation.navigate('Login')}>Đăng nhập ngay</Text>
          <TouchableHighlight 
            mode="contained-tonal"
            onPress={() => { signupWithEmailaPassword(Email,Password)}} style={{backgroundColor:'aqua',width:150,height:50,borderRadius:40,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Đăng kí</Text></TouchableHighlight>
        </View>
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text:
  {

    color: '#fff',
    fontSize: 42,

  },
  imageOnFront:
  {
    width: 500,
    height: 200,
  },
  containerTilte: {
    flexDirection: "column",
    backgroundColor: '#000000c0',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput:
  {

    height: 40,
    width: 300,
    borderWidth: 1
  },
  Icon:{
    position:"absolute"
  }
});


export default Signup 