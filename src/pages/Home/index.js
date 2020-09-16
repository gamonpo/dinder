import React from 'react';

import {Head, Header} from './styles';

import {Container} from '../../components/Background/styles';

import img from '../../assets/pictures/background.png';

export default function Home() {
    return (
        <Container source={img}>
            <Head>
                <Header>Welcome, Gabriel!</Header>
            </Head>
        </Container>
    );
}
