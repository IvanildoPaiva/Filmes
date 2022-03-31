import React, { useState, useEffect } from "react";
import { Button, Image, FlatList, View, Text } from "react-native";
import {
  Container,
  TotalMoviesText,
  Lista,
  MoviesImage,
  MoviesItem,
  MovieTitle,
} from "../styles/style";

const Filmes = () => {
  const [movies, setMovies] = useState([]);

  const handleLoadButton = async () => {
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const json = await req.json();

    if (json) {
      setMovies(json);
    }
  };

  return (
    <Container>
      <Button title="Carregar Filmes" onPress={handleLoadButton} />
      <TotalMoviesText>Total de Filmes: {movies.length}</TotalMoviesText>

      <Lista
        data={movies}
        renderItem={({ item }) => (
          <MoviesItem>
            <MoviesImage source={{ uri: item.avatar }} resizeMode="contain" />
            <MovieTitle>{item.titulo}</MovieTitle>
          </MoviesItem>
        )}
        keyExtractor={(item) => item.titulo}
      />
    </Container>
  );
};
export default Filmes;
