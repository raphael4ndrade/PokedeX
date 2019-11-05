import React from 'react';
import { StatusBar, Text, TextInput } from 'react-native';

import { Container, Content, Header, Title, PokeList, LoadingContainer, LoadingIndicator } from './styled';

import CardAction from '../CardAction';
import pokemons from '../../pokemon.json';

export default function HomePage() {
    const _loading = (<LoadingContainer>
        <LoadingIndicator />
    </LoadingContainer>);

    return (<Container>
        <StatusBar barStyle="dark-content" />
        <Content>
            <Header>
                <Title>PokedeX</Title>
            </Header>
            <PokeList
                ListEmptyComponent={_loading}
                data={pokemons}
                numColumns={2}
                keyExtractor={(item) => Number(item.number)}
                renderItem={({ item }) => <CardAction {...item} />}
            />
        </Content>
    </Container>);
}