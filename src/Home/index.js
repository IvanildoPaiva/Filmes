import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View } from 'react-native';


const Home = () =>{
 
    return(
        <View>
           <StatusBar 
            barStyle = "dark-content"
            hidden = {false}
            backgroundColor = "#0066CC"
            translucent = {false}
            networkActivityIndicatorVisible = {true}
            
            />
        </View>
    );
}

export default Home;