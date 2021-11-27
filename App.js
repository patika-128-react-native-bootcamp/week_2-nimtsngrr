import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,


} from 'react-native';
var productTime ='';
var data='';
const renderItem = ({ item }) => (
  <Text style={styles.listTitle}>{item.productName} {item.productPrice}</Text>
);
//sortedActivities = item.value.sort((a, b) => b.productTime - a.productTime);
//const sortedActivities = this.state.products.sort((a, b) => b.productName - a.productName)
const getCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  //Alert.alert(date + '-' + month + '-' + year +'-'+hours +'-'+min+'-'+sec);
  //time = date + '-' + month + '-' + year +'-'+hours +'-'+min+'-'+sec;
  return date + '-' + month + '-' + year +'-'+ hours +'-'+ min +'-'+ sec;//format: dd-mm-yyyy;
}
productTime = getCurrentDate();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {productName: '' ,productPrice:0, productTime:''  , products : [{}] };
  }
  //sortedActivities = props.products.sort((a, b) => b.productTime - a.productTime);
  render() {    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity  onPress= {()=> {}} style={styles.title}><Text style={styles.title}>Artan Fiyat</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title}><Text style={styles.title}>Azalan Fiyat</Text></TouchableOpacity>
          <TouchableOpacity style={styles.title}><Text style={styles.title}>Tarih</Text></TouchableOpacity>
        </View>
        <View style={styles.flat}>
        <FlatList
            //style = {{flex:1}}
          data={this.state.products}
          renderItem={renderItem}
          keyExtractor={item => item.key}        
      />
        </View>
        <View style={styles.input}>
          <Text>Name</Text>
          <TextInput
            onChangeText={(text)=>{
              this.setState({productName:text})
            }}
            value={this.state.text}
            backgroundColor="#eeeeee"
          />
          <Text>Price</Text>
          <TextInput
            onChangeText={(text)=>{  this.setState({ productPrice :text}) }}
            value={this.state.text}
            backgroundColor="#eeeeee"
          />
         <TouchableOpacity  onPress = {()=> {   this.setState({products : this.state.products.concat({"productName":this.state.productName,"productPrice":this.state.productPrice,"productTime":this.state.productTime})  })     }} style = {styles.title}><Text style={styles.title}>Add</Text></TouchableOpacity> 
        </View>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    width:100,
    //color:"black",
    backgroundColor:"#78909c"
  },
  listTitle: {
    flex:1,
    //textAlign: 'center',
    height:20,
    marginVertical: 8,
    width:100,
    color:"black",
    //backgroundColor:"grey"
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    color: '#BDC7C9',
    margin: 1,
    borderRadius: 3,
    minWidth: '1%',
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 3,
    //padding: 3,
    //margin: 16,
    justifyContent: 'center',
    //borderRadius: 3,
  },
  flat: {
    flex: 4,
    //justifyContent: 'space-between',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

//export default App;
