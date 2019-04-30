import React, { Component } from 'react';
import { View } from 'react-native';
import { Cabecalho, BarraInferior } from './lib';
import Resumo from './Resumo';

class Inicio extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Cabecalho tituloCabecalho="Início" />
                <Resumo />
                <BarraInferior 
                    primeiro="home" 
                    segundo="refresh" 
                    terceiro="list" 
                    quarto="user"                     
                />
            </View>
        );
    }
}

export default Inicio;
