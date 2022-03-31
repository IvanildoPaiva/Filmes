import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const LoadingArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  color: #fff;
`;

export const TotalMoviesText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Lista = styled.FlatList`
  flex: 1;
`;

export const MoviesItem = styled.View`

margin-bottom 30px;

`;

export const MoviesImage = styled.Image`
  height: 400px;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
