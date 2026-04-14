import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function PerfilScreen() {
  const [foto, setFoto] = useState<string | null>(null);

  async function abrirCamera() {
    if (Platform.OS === "web") {
      alert("A câmera não está disponível no navegador. Use o Expo Go no celular!");
      return;
    }

    const ImagePicker = await import("expo-image-picker");

    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (permissao.status !== "granted") {
      alert("Permissão para usar a câmera é necessária!");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>

      {/* BOTÃO DE VOLTAR */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Perfil</Text>

      {/* AVATAR COM CÂMERA */}
      <View style={styles.avatarWrapper}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.avatarImage} />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CM</Text>
          </View>
        )}

        <TouchableOpacity style={styles.cameraButton} onPress={abrirCamera}>
          <Text style={styles.cameraIcon}>📷</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>Carlos Mendes</Text>
      <Text style={styles.email}>carlos.mendes@email.com</Text>
      <Text style={styles.location}>São Paulo, SP</Text>

      <View style={styles.bioBox}>
        <Text style={styles.bio}>
          Apaixonado por sustentabilidade e consumo consciente.
        </Text>
        <Text style={styles.bio}>
          Sempre buscando formas de reutilizar e compartilhar.
        </Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Meus Itens</Text>

      <View style={styles.itemCard}>
        <Text style={styles.itemTitle}>Cadeira de Escritório</Text>
        <Text style={styles.itemStatus}>Disponível</Text>
      </View>

      <View style={styles.itemCard}>
        <Text style={styles.itemTitle}>Livros de Receitas</Text>
        <Text style={styles.itemStatus}>Trocado</Text>
      </View>

      <View style={styles.itemCard}>
        <Text style={styles.itemTitle}>Monitor 22"</Text>
        <Text style={styles.itemStatus}>Disponível</Text>
      </View>

      {/* MENU INFERIOR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text>🏠 Início</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/perfil")}>
          <Text>👤 Perfil</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3EE",
    padding: 20,
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#FFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    fontSize: 22,
    fontWeight: "700",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0D5C3F",
    marginBottom: 20,
    marginTop: 60,
  },

  avatarWrapper: {
    alignSelf: "center",
    marginBottom: 4,
  },

  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#0D5C3F",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0D5C3F",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F7F3EE",
  },

  cameraIcon: {
    fontSize: 13,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    color: "#0D5C3F",
  },

  email: {
    textAlign: "center",
    color: "#777",
  },

  location: {
    textAlign: "center",
    marginBottom: 20,
    color: "#777",
  },

  bioBox: {
    backgroundColor: "#EFE7DD",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  bio: {
    color: "#0D5C3F",
  },

  editButton: {
    borderWidth: 1,
    borderColor: "#0D5C3F",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
  },

  editButtonText: {
    color: "#0D5C3F",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#0D5C3F",
  },

  itemCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  itemTitle: {
    fontWeight: "bold",
    color: "#0D5C3F",
  },

  itemStatus: {
    color: "#777",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#DDD",
  },
});