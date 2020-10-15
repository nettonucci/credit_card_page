import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  viewHeader: {
    width: "100%",
    height: 40,
    backgroundColor: "#1978B5",
    justifyContent: "center"
  },
  iconLeft: {
    left: 20,
    fontSize: 30,
    color: "#fff"
  },
  text: {
    position: "absolute",
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "center"
  },
  body: {
    flex: 1,
    width: "90%",
    //backgroundColor: "#f1f", // para teste
    alignItems: "center",
    //justifyContent: "center",
    alignSelf: "center"
  },
  text1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#737380",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 5
  },
  text2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#737380",
    textAlign: "center",
    marginBottom: 10
  },
  viewcartao: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1
  },
  cartao: {
    width: "100%",
    height: 230,
    borderRadius: 10
  },
  validade: {
    flexDirection: "row"
  },
  numero_cartao: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 20,
    marginTop: 10
  },
  nome: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    textTransform: "uppercase"
  },
  val1: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginHorizontal: 20,
    marginTop: 10
  },
  val2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginTop: 10
  },
  logo: {
    //alignSelf: "flex-start",
    marginTop: 20,
    height: 90,
    width: 90,
    resizeMode: "cover"
    //backgroundColor: "#f12" // para teste,
  },
  underline: {
    width: "100%",
    height: 1,
    backgroundColor: "#2D2D2D",
    opacity: 0.5
  },
  containerradio: {
    alignSelf: "flex-start",
    marginTop: 20
    //backgroundColor: "#f1f"
  },
  radioios: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    width: 35,
    height: 35,
    borderWidth: 0.5
  },
  radioioschecked: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    borderColor: "#82dac4",
    width: 35,
    height: 35,
    borderWidth: 1
  },
  credito: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100
    //backgroundColor: "#f1f"
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    //fontWeight: "500",
    color: "#737380"
  },
  input1: {
    //backgroundColor: "#f12", // para teste,
    marginTop: 30,
    width: "100%",
    height: 50
  },
  textnumero: {
    fontSize: 16,
    //fontWeight: "500",
    color: "#737380"
  },
  btn: {
    backgroundColor: "#1978B5",
    width: "100%",
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
  },
  cad: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff"
  },
  viewnull: {
    width: "100%",
    height: 250
  },
  cvv: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconinfo: {
    marginLeft: 5,
    color: "#FF3F3C"
  },
  press: {
    height: 15,
    width: 30
  },
  tarja: {
    width: "100%",
    height: 40,
    backgroundColor: "#000",
    marginTop: 40
  },
  faixa: {
    width: "70%",
    height: 30,
    backgroundColor: "#fff",
    marginTop: 20,
    marginLeft: 10,
    justifyContent: "center"
  },
  textcvv: {
    alignSelf: "flex-end",
    fontSize: 22,
    marginRight: 5
  },
  flipCard: {
    width: "100%",
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "blue",
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    //backgroundColor: "red",
    position: "absolute",
    top: 80
  },
  circle: {
    //ackgroundColor: "#fff",
    position: "absolute",
    marginTop: 95,
    marginLeft: "53%",
    //width: 10,
    height: 40,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#FF3F3C"
  },
  verticalline: {
    position: "absolute",
    marginTop: 135,
    left: "63%",
    width: 1,
    height: 80,
    borderWidth: 2,
    borderColor: "#FF3F3C"
  },
  boxtext: {
    alignItems: "flex-end",
    marginTop: 20
  },
  codseg: {
    fontSize: 19
  },
  boxtext2: {
    marginTop: 20
  },
  textbox: {
    color: "#707070"
  }
});
