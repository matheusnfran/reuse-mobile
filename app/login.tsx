import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.icon}>🌿</Text>
      </View>

      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>
        Bem-vindo(a) de volta ao ReUse
      </Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cadastro")}>
        <Text style={styles.registerText}>
          Não possui conta?{" "}
          <Text style={styles.bold}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFE8",
    justifyContent: "center",
    padding: 30,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#0E5F3B",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  icon: {
    fontSize: 28,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    color: "#0E5F3B",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#6A8B7B",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#0E5F3B",
    padding: 18,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 25,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },

  registerText: {
    textAlign: "center",
    color: "#6A8B7B",
  },

  bold: {
    fontWeight: "700",
    color: "#0E5F3B",
  },
});