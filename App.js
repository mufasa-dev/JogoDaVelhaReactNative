

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import base from './src/base'



class App extends React.Component {
  constructor(props) {
    super(props);

    base.start();

  this.state = {
    board : base.board,
    gameOver : base.gameOver
  }
}
 resetar(){
  base.start();

  this.setState({
    board : base.board,
    gameOver : base.gameOver
  })
 }

makePlay(index){
  base.make_play(index);

  this.setState({board : base.board,
    gameOver : base.gameOver})    
}

jaAcabouJessica(){
  if(this.state.gameOver){
    return <Text style={styles.titulo}>Game Over</Text>
  }
}

render(){
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Jogo da Velha</Text>

      
        {this.state.board.map((value, index) =>(
          <TouchableOpacity key={index} style={styles.peca}
                            onPress={()=>{this.makePlay(index)}}>
            <Text style = {styles.Xis}>{value}</Text>                  
          </TouchableOpacity>
        ))}
        {this.jaAcabouJessica()}
        <Button
          title="Limpar"
          onPress={() => this.resetar()}
        />
      </View>
  );
};
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#168442',
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: 'right',
    justifyContent: "center",
    margin: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  peca: {
    width: (Dimensions.get('window').width / 3) - 4,
    height: (Dimensions.get('window').height / 6) - 11,
    backgroundColor: 'rgba(50,50,50,0.5)',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
  },
  titulo: {
    color: 'white',
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  Xis: {
    color: 'white',
    fontSize: 60,
    
  },
  quadrado: {
    backgroundColor: 'rgba(50,50,50,0.5)'
  }
});

export default App;
