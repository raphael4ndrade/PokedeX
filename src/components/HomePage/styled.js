import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ['#FFF', '#69C8FF', '#1CACFF', '#69C8FF']
})`
    flex: 1;
`;

export const Content = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    padding: 10px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`;

export const SearchBar = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0px 10px;
`;

export const SearchInput = styled.TextInput`
    padding: 0px 5px;
    margin-right: 5px;
    background-color: white;
    border-radius: 4px;
    border: solid .5px gray
    font-size: 16px;
    flex: 1;
`;

export const SearchButton = styled.Button`

`;

export const PokeList = styled.FlatList`
    margin-top: 5px;
    padding-right: 10px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
    color: 'white',
    size: 'large'
})``;

export const LoadingContainer = styled.View`
    justify-content: center;
    align-items: center;
`;