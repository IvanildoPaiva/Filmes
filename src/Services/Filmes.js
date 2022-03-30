import React, {useState, useEffect} from 'react';
import {Button, Image, FlatList, View, Text} from 'react-native';
import  {Container, TotalMoviesText} from '../styles/style';





const Filmes = () =>{

    const [movies, setMovies] = useState([]);
    

    const handleLoadButton = async () =>{

        const req = await fetch ("https://api.b7web.com.br/cinema/");
        const json = await req.json();
        
        if(json){
            setMovies(json)


        }
        
    }

return(

    <Container>
        
        <Button title="Carregar Filmes" onPress={handleLoadButton}/>
        <TotalMoviesText>Total de Filmes: {movies.length}</TotalMoviesText>

        <FlatList 
        
        data={movies}
        renderItem={({item})=> (
         
             <View>
                 <Image source={{uri:item.avatar}} style={{width:200, height:200}}/>
                <Text>{item.titulo}</Text> 
                
             </View>

        )}
        keyExtractor={item => item.titulo}

        />

    </Container>
);

}  
 export default Filmes;