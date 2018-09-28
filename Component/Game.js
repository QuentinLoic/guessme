import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux'

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.timer
    this.state = {
      random: this.GenerateRandomNumber(),
      chrono: 0,
      number: "",
      text: "?",
      bestscore: "?",
      nbessai: 0
    }
  }

  componentDidUpdate() {
    console.log(this.props.histoScore)
  }

  GenerateRandomNumber() {
    let random = Math.floor(Math.random() * 100) + 1;
    console.log(random)
    return random
  }

  click(number) {
    console.log({ number });
    this.setState({ number });
  }

  checkResult() {
    let count = this.state.nbessai
    this.setState({ nbessai: count + 1 })
    if (this.timer == undefined || this.timer == null) {
      this.timer = setInterval(() => {
        this.setState({chrono:this.state.chrono+=1})
      }, 1000)
    }
    if (this.state.number < this.state.random) {
      this.setState({ text: 'Plus' })
      this.setState({ number: "" })
    }
    else if (this.state.number > this.state.random) {
      this.setState({ text: 'Moins' })
      this.setState({ number: "" })
    }
    else {
      this.setState({ text: 'Bravo' })
      clearInterval(this.timer)
      this.addtohistorique()
      this.timer = undefined
      if (this.state.nbessai < this.state.bestscore || this.state.bestscore == "?") {
        this.setState({ bestscore: count + 1})
        console.log('BestScore: ' + this.state.bestscore)
      }
    }
  }

  refreshall() {
    clearInterval(this.timer)
    this.timer = undefined
    this.setState({ text: "", random: this.GenerateRandomNumber(), nbessai: 0, number: "", chrono: 0, timerOn: false })
  }

  addtohistorique() {
    const action = { type: 'ADD_IN_HISTORIQUE', value: this.state.nbessai }
    this.props.dispatch(action)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textsolo}>Chrono : {this.state.chrono}</Text>
        <Text style={styles.textsolo}>BestScore : {this.state.bestscore}</Text>
        <Text style={styles.textsolo}>Coups : {this.state.nbessai}</Text>
        <TextInput style={styles.textinput} onSubmit={() => this.checkResult()} onChangeText={(number) => this.click(number)} keyboardType='numeric' value={this.state.number}></TextInput>
        <TouchableOpacity style={styles.toucheable} onPress={() => this.checkResult()} >
          <Text style={styles.text}>Press Me</Text>
        </TouchableOpacity>
        <Text style={styles.textsolo}>Indic : {this.state.text}</Text>
        <TouchableOpacity style={styles.toucheable} onPress={() => this.refreshall()}>
          <Text style={styles.text}>Refresh</Text>
        </TouchableOpacity>
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
  },
  toucheable: {
    marginTop: 50,
    borderColor: 'black',
    width: 200,
    backgroundColor: '#323840',
    shadowOpacity: 1,
    borderRadius: 10,
    elevation: 10
  },
  text: {
    fontStyle: ('normal', 'italic'),
    textAlign: 'center',
    color: '#EEEEEE',
    padding: 10
  },
  textsolo: {
    marginTop: 20,
    fontStyle: ('normal', 'italic'),
    textAlign: 'center',
    color: '#EEEEEE',
    padding: 15,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#3C434C',
    elevation: 10
  },
  textinput: {
    width: 200,
    height: 50,
    borderColor: '#8191A6',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginTop: 40
  }
});


const mapStateToProps = (state) => {
  return {
    histoScore: state.histoScore
  }
}

export default connect(mapStateToProps)(Game)