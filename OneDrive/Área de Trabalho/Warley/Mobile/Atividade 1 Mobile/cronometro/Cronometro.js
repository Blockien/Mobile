import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cronometro = () => {
    const [tempo, setTempo] = useState(0);
    const [cronometroAtivo,  setCronometroAtivo] = useState(false);
    const [ultimoTempo, setUltimoTempo] = useState(null);
  
    useEffect(() => {
      let intervalo;
      if (cronometroAtivo) {
        intervalo = setInterval(() => {
          setTempo((tempo) => tempo + 0.1);
        }, 100);
      } else {
        clearInterval(intervalo);
      }
      return () => clearInterval(intervalo);
    }, [cronometroAtivo]);   
    const iniciarPausar = () => {
      setCronometroAtivo(!cronometroAtivo);
    };
    const limparCronometro = () => {
      setUltimoTempo(tempo);
      setTempo(0);
      setCronometroAtivo(false);
    };
    const formatarTempo = (tempo) => {
      const minutos = Math.floor(tempo / 60);
      const segundos = (tempo % 60).toFixed(1);
      return `${minutos}:${segundos.padStart(4, '0')}`;
    };

    return (
      <View style={styles.container}>
        <View style={styles.cronometroContainer}>
          <Text style={styles.tempo}>{formatarTempo(tempo)}</Text>
        </View>
        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={iniciarPausar} style={styles.botaoIniciarPausar}>
            <Text style={styles.textoBotao}>{cronometroAtivo ? 'PAUSAR' : 'INICIAR'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={limparCronometro} style={styles.botaoLimpar}>
            <Text style={styles.textoBotao}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
        {ultimoTempo !== null && (
          <Text style={styles.ultimoTempo}>Último tempo: {formatarTempo(ultimoTempo)}</Text>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  cronometroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  tempo: {
    fontSize: 48,
    color: '#3498db',
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  botaoIniciarPausar: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,   
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoLimpar: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: 'bold',
  },
  ultimoTempo: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
});
export default Cronometro;
