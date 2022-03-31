import React, { useState, useEffect } from "react";
import { Button, ActivityIndicator } from "react-native";
import {
  Container,
  TotalMoviesText,
  Lista,
  MoviesImage,
  MoviesItem,
  MovieTitle,
  LoadingArea,
  LoadingText,
} from "../styles/style";

const Filmes = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestMovies = async () => {
      setLoading(true);

      const req = await fetch("https://api.b7web.com.br/cinema/");
      const json = await req.json();

      if (json) {
        setMovies(json);
      }

      setLoading(false);
    };

    requestMovies();
  }, []);

  return (
    <Container>
      {loading && (
        <LoadingArea>
          <ActivityIndicator size="large" color="#FFF" />
          <LoadingText>Carregando....</LoadingText>
        </LoadingArea>
      )}

      {!loading && (
        <>
          <TotalMoviesText>Total de Filmes: {movies.length}</TotalMoviesText>

          <Lista
            data={movies}
            renderItem={({ item }) => (
              <MoviesItem>
                <MoviesImage
                  source={{ uri: item.avatar }}
                  resizeMode="contain"
                />
                <MovieTitle>{item.titulo}</MovieTitle>
              </MoviesItem>
            )}
            keyExtractor={(item) => item.titulo}
          />
        </>
      )}
    </Container>
  );
};
export default Filmes;
