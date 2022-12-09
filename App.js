/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider as PaperProvider,TextInput, Text, Button, HelperText } from 'react-native-paper'; 

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [textE, setTextE] = React.useState("");

  const onChangeTextE = textE => setTextE(textE);  

  const [textT, setTextT] = React.useState(""); 

  const onChangeTextT = textT => setTextT(textT);  

  const hasErrorsEmail = () => { 
    return (
      textE.search(/^[a-zA-Z0-9]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/) 
      );    
  };
  
  const hasErrorsTelefon = () => { 
    return (
      textT.search(/^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/) 
      );    
  }; 

  const EntradaDEmail = () => {
    return (
    <View>
    <TextInput label="Email" value={textE} keyboardType="email-address" 
    onChangeText={onChangeTextE}  right={<TextInput.Icon icon="check" iconColor='green' 
    visible={!hasErrorsEmail()}/>}   
    />    
    <HelperText type="error" visible={hasErrorsEmail()}>
      Adreça email incorrecta! 
    </HelperText> 
    </View>
    ) 
  } 
 
  const EntradaDeTelefon = () => {
    return (
    <View>
    <TextInput label="Telèfon" value={textT} keyboardType="phone-pad" 
    onChangeText={onChangeTextT} right={<TextInput.Icon icon="check" iconColor="green" 
    visible={!hasErrorsTelefon()}/>}  
    />     
    <HelperText type="error" visible={hasErrorsTelefon()}> 
      Telèfon incorrecte!  
    </HelperText> 
    </View>
    ) 
  }

  return (
    <PaperProvider>
      {nom('Ivan López', styles.estilDeText)} 
      {EntradaDEmail()}
      {EntradaDeTelefon()} 
    </PaperProvider> 
  );
};

const nom = (nom, estils) => {  
  return <Text style={estils}> {nom} </Text>;      
} 

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputIcon: {
    color: '#42FF33', 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },     
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
