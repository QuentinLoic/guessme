import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux'

class Game extends React.Component {
  
  constructor(props) {
    super(props);
    this.timerOn = false
    this.timer
    this.state = {
      random: this.GenerateRandomNumber(),
      chrono: 0,
      number: "",
      text: "",
      bestscore:"",
      nbessai: 0,
      numberFinal: ""
    }
  }

  GenerateRandomNumber(){
    let random = Math.floor(Math.random()* 100) + 1;
    console.log(random)
    return random
  }
  
  click(number) {
    console.log({number});
    this.setState({number});
  }
  
  incrementCount() {
    this.setState(prevState => ({chrono: prevState.chrono + 1}))
  }

  checkResult(){
    let count = this.state.nbessai

    if(this.timerOn == false){
      this.timerOn = true
      this.timer = setInterval(() => {
        this.incrementCount()
      },1000)
    }
    if (this.state.number < this.state.random){
      this.setState({nbessai:count+1})
      this.setState ({text: 'Plus'})
      this.setState({number:""})
    }
    else if (this.state.number > this.state.random){
      this.setState({nbessai:count+1})
      this.setState ({text: 'Moins'})
      this.setState({number:""})
    }
    else{
      this.setState ({text: 'Bravo'})
      this.setState({timerOn: false})
      if (this.state.nbessai < this.state.bestscore || this.state.bestscore == ""){
        this.setState({bestscore : count+1})
        console.log('BestScore: ' + this.state.bestscore)
      }
    }
  }

  historique() {
    const action = { type: "HISTORIQUE", value: this.state.nbessai }
    this.props.dispatch(action)
  }

  refreshall(){
    this.setState({text:"",random: this.GenerateRandomNumber(), nbessai:0, number: "", chrono: 0})
  }
  
  render() {
    //console.log(this.props)
    return (
      <View style = {styles.container}>
        <Text style = {{color:'blue', paddingTop:10}}>Chrono : {this.state.chrono}</Text>
        <Text style = {{color:'blue', paddingTop:10}}>BestScore : {this.state.bestscore}</Text>
        <Text style = {{color:'blue', paddingTop:10}}>Coups : {this.state.nbessai}</Text>
        <TextInput style={{width:68, height: 60, borderColor: 'red', borderWidth: 2, borderRadius:15, padding: 15, marginTop:10}} 
                                onSubmit={() => this.checkResult()}
                                onChangeText={(number) => this.click(number)} keyboardType='numeric' value={this.state.number}></TextInput>
        <TouchableOpacity style = {{borderColor:'black', borderWidth:3, marginTop:10, borderRadius:15, padding: 15, backgroundColor:'black'}} onPress={() => this.checkResult()} ><Text style = {{color:'red'}}>Press Me</Text></TouchableOpacity>
        <TouchableOpacity style = {{borderColor:'black', borderWidth:3, marginTop:10, borderRadius:15, padding: 15, backgroundColor:'black', marginBottom:25}} onPress={() => this.refreshall()}><Text style = {{color:'red'}}>Refresh</Text></TouchableOpacity>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
 });


 const mapStateToProps = (state) => {
  return {
    histScore: state.histScore
  }
}

export default connect(mapStateToProps)(Game)