import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProductCardProps {
  title: string;
  description: string;
  location: string;
}

export default function ProductCard({
  title,
  description,
  location,
}: ProductCardProps) {
  const [favorito, setFavorito] = useState(false);

  // Ao carregar o card, verifica se já está favoritado
  useEffect(() => {
    async function verificarFavorito() {
      const salvo = await AsyncStorage.getItem(`favorito_${title}`);
      if (salvo === "true") {
        setFavorito(true);
      }
    }
    verificarFavorito();
  }, []);

  // Alterna favorito e salva no AsyncStorage
  async function toggleFavorito() {
    const novoValor = !favorito;
    setFavorito(novoValor);
    await AsyncStorage.setItem(`favorito_${title}`, novoValor.toString());
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/produto")}
    >
      <View style={styles.imageArea}>
        <Text style={styles.box}>📦</Text>

        {/* BOTÃO DE FAVORITO */}
        <TouchableOpacity
          style={styles.heartButton}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorito();
          }}
        >
          <Text style={styles.heartIcon}>
            {favorito ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.location}>
          📍 {location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#F5F1EC",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
  },

  imageArea: {
    height: 90,
    backgroundColor: "#DDE7D2",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    fontSize: 32,
  },

  // NOVO
  heartButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },

  // NOVO
  heartIcon: {
    fontSize: 18,
  },

  content: {
    padding: 12,
  },

  title: {
    fontWeight: "700",
    fontSize: 14,
    color: "#1F5C4A",
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    color: "#777",
    marginBottom: 6,
  },

  location: {
    fontSize: 11,
    color: "#888",
  },
});