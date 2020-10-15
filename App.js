import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Animated,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dialog, Portal } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from "react-native-masked-text";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { Provider as PaperProvider } from "react-native-paper";

import chip from "./assets/card-chip.png";

import styles from "./style";

const debito_aut = () => {
  const [cartao, setcartao] = useState("");
  const [validade, setvalidade] = useState("");
  const [cvv, setcvv] = useState("");
  const [checked, setChecked] = React.useState("0");
  const [nome, setnome] = useState("");
  const [visible, setvisible] = React.useState(false);
  const showDialog = () => setvisible(true);
  const hideDialog = () => setvisible(false);
  const [front, setfront] = useState("");
  const [back, setback] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [card] = useState(new Animated.Value(0));
  const frontInterpolate = card.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"]
  });
  const backInterpolate = card.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"]
  });

  function flipCard1() {
    Animated.spring(card, {
      toValue: 0,
      friction: 8,
      tension: 10,
      useNativeDriver: false
    }).start();
  }

  function flipCard2() {
    Animated.spring(card, {
      toValue: 180,
      friction: 8,
      tension: 10,
      useNativeDriver: false
    }).start();
  }

  useEffect(() => {
    async function loadanim() {
      const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate }]
      };
      setfront(frontAnimatedStyle);
      const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }]
      };
      setback(backAnimatedStyle);
    }
    loadanim();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.Container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <View style={styles.viewHeader}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cartoes_pagamentos")}
            >
              <Icon name="angle-left" style={styles.iconLeft} />
            </TouchableOpacity>
            <Text style={styles.text}>Cadastrar cartão</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <Text style={styles.text1}>
                Olá {"\n"} Para concluir insira os dados do cartão
              </Text>
              <Text style={styles.text2}>
                Fique tranquilo(a), você está em um ambiente seguro!
              </Text>

              <Animated.View
                style={[styles.viewcartao, styles.flipCard, front]}
              >
                <LinearGradient
                  colors={["#38BFEF", "#7156A3"]}
                  start={[0, 1]}
                  end={[1, 0]}
                  style={styles.cartao}
                >
                  <Image source={chip} style={styles.logo} />
                  <Text style={styles.numero_cartao}>{cartao}</Text>
                  <Text style={styles.nome}>{nome}</Text>
                  <View style={styles.validade}>
                    <Text style={styles.val1}>Validade:</Text>
                    <Text style={styles.val2}>{validade}</Text>
                  </View>
                </LinearGradient>
              </Animated.View>

              <Animated.View
                style={[back, styles.flipCard, styles.flipCardBack]}
              >
                <LinearGradient
                  colors={["#38BFEF", "#7156A3"]}
                  start={[0, 1]}
                  end={[1, 0]}
                  style={styles.cartao}
                >
                  <View style={styles.tarja} />
                  <View style={styles.faixa}>
                    <Text style={styles.textcvv}>{cvv}</Text>
                  </View>
                </LinearGradient>
              </Animated.View>

              <View style={styles.input1}>
                <Text style={styles.textnumero}>Número do cartão</Text>
                <TextInputMask
                  type={"credit-card"}
                  style={styles.input}
                  returnKeyType="done"
                  onFocus={flipCard1}
                  keyboardType="number-pad"
                  placeholder="0000 0000 0000 0000"
                  options={{
                    format: "0000 0000 0000 0000"
                  }}
                  value={cartao}
                  onChangeText={text => setcartao(text)}
                />
                <View style={styles.underline} />
              </View>

              <View
                style={{
                  ...styles.input1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text style={styles.textnumero}>Validade do cartão</Text>
                  <TextInputMask
                    type={"custom"}
                    style={styles.input}
                    returnKeyType="done"
                    onFocus={flipCard1}
                    keyboardType="number-pad"
                    placeholder="MM/AAAA"
                    options={{
                      mask: "99/9999"
                    }}
                    value={validade}
                    onChangeText={text => setvalidade(text)}
                  />
                  <View style={{ ...styles.underline, width: 200 }} />
                </View>
                <View>
                  <View style={styles.cvv}>
                    <Text style={styles.textnumero}>CVV</Text>
                    <TouchableOpacity
                      style={styles.press}
                      onPress={() => showDialog()}
                    >
                      <Icon2 name="info-outline" style={styles.iconinfo} />
                    </TouchableOpacity>
                  </View>
                  <TextInputMask
                    type={"custom"}
                    style={styles.input}
                    returnKeyType="done"
                    onFocus={flipCard2}
                    keyboardType="number-pad"
                    placeholder="000"
                    options={{
                      mask: "999"
                    }}
                    value={cvv}
                    onChangeText={text => setcvv(text)}
                  />
                  <View style={{ ...styles.underline, width: 100 }} />
                </View>
              </View>

              <View style={styles.input1}>
                <Text style={styles.textnumero}>Nome impresso no cartão</Text>
                <TextInputMask
                  type={"custom"}
                  style={styles.input}
                  onFocus={flipCard1}
                  placeholder="Ex Maria"
                  options={{
                    mask:
                      "******************************************************"
                  }}
                  autoCapitalize="none"
                  value={nome}
                  onChangeText={text => setnome(text)}
                />
                <View style={styles.underline} />
              </View>
              <View style={styles.containerradio}>
                <View style={styles.credito}>
                  <View
                    style={
                      Platform.OS === "ios" && checked === "0"
                        ? styles.radioioschecked
                        : Platform.OS === "ios"
                        ? styles.radioios
                        : null
                    }
                  >
                    <RadioButton
                      value="0"
                      status={checked === "0" ? "checked" : "unchecked"}
                      onPress={() => setChecked("0")}
                    />
                  </View>
                  <Text style={styles.textnumero}>Crédito</Text>
                </View>
                <View style={styles.credito}>
                  <View
                    style={
                      Platform.OS === "ios" && checked === "1"
                        ? styles.radioioschecked
                        : Platform.OS === "ios"
                        ? styles.radioios
                        : null
                    }
                  >
                    <RadioButton
                      value="1"
                      status={checked === "1" ? "checked" : "unchecked"}
                      onPress={() => setChecked("1")}
                    />
                  </View>
                  <Text style={styles.textnumero}>Débito</Text>
                </View>
              </View>

              {isLoading == true ? (
                <View style={styles.Loading}>
                  <ActivityIndicator color={"#1978B5"} size={50} />
                </View>
              ) : (
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.cad}>CADASTRAR</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>O que é o CVV?</Dialog.Title>
              <Dialog.Content>
                <View style={styles.viewcartao}>
                  <LinearGradient
                    colors={["#38BFEF", "#7156A3"]}
                    start={[0, 1]}
                    end={[1, 0]}
                    style={{ ...styles.cartao, height: 200 }}
                  >
                    <View style={styles.tarja} />
                    <View style={styles.faixa}>
                      <Text style={styles.textcvv}>123</Text>
                    </View>
                    <View style={styles.circle} />
                  </LinearGradient>
                  <View style={styles.verticalline} />
                  <View style={styles.boxtext}>
                    <Text style={styles.codseg}>Código de Segurança</Text>
                  </View>
                  <View style={styles.boxtext2}>
                    <Text style={styles.textbox}>
                      Esse termo é utilizado pela empresa de cartões de crédito
                      Visa para referir-se ao Código de Segurança do Cartão
                      (CSC). E é utilizado pelos sistemas de pagamento com o
                      objetivo de garantir que a pessoa que está realizando o
                      pagamento tenha o cartão fisicamente disponível no momento
                      da compra. Ou seja, O CVV do cartão funciona como uma
                      forma de proteção contra fraudes em transações feitas na
                      Internet.
                    </Text>
                  </View>
                </View>
              </Dialog.Content>
              <Dialog.Actions>
                <TouchableOpacity style={styles.touch} onPress={hideDialog}>
                  <Text style={styles.dialog}>OK</Text>
                </TouchableOpacity>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default debito_aut;
