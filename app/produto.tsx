import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function ProdutoScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.imageArea}>
        <Text style={styles.box}>📦</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Cadeira de Escritório</Text>

        <View style={styles.infoRow}>
          <Text style={styles.status}>Bom estado</Text>
          <Text style={styles.location}>📍 São Paulo, SP</Text>
        </View>

        <Text style={styles.description}>
          Cadeira ergonômica em bom estado, com ajuste de
          altura e apoio lombar. Pouco tempo de uso, sem
          marcas significativas.
        </Text>

        <View style={styles.sellerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>

          <View>
            <Text style={styles.sellerName}>Carlos M.</Text>
            <Text style={styles.sellerInfo}>
              ★ 4.8 · Membro desde 2024
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            Tenho Interesse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>
            Trocar / Solicitar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFE8",
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

  imageArea: {
    height: 280,
    backgroundColor: "#DCE2D7",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    fontSize: 60,
  },

  content: {
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0E5F3B",
    marginBottom: 14,
  },

  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  status: {
    backgroundColor: "#D8F0C8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },

  location: {
    color: "#777",
  },

  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 24,
    marginBottom: 30,
  },

  sellerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFE6DD",
    padding: 16,
    borderRadius: 14,
    marginBottom: 30,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#0E5F3B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  avatarText: {
    color: "#FFF",
  },

  sellerName: {
    fontWeight: "700",
    color: "#0E5F3B",
  },

  sellerInfo: {
    color: "#7E9A80",
    fontSize: 12,
  },

  primaryButton: {
    backgroundColor: "#0E5F3B",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },

  primaryButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },

  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "#0E5F3B",
    padding: 18,
    borderRadius: 14,
  },

  secondaryButtonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#0E5F3B",
  },
});