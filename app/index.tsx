import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Itens Disponíveis</Text>
          <Text style={styles.subtitle}>Encontre algo que precisa</Text>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/perfil")}
        >
          <Text style={styles.profileButtonText}>👤</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Buscar itens..."
        style={styles.search}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        <Text style={styles.activeCategory}>Todos</Text>
        <Text style={styles.category}>Eletrônicos</Text>
        <Text style={styles.category}>Roupas</Text>
        <Text style={styles.category}>Móveis</Text>
        <Text style={styles.category}>Livros</Text>
      </ScrollView>

      <View style={styles.grid}>
        <ProductCard
          title="Cadeira de Escritório"
          description="Em bom estado, pouco uso"
          location="São Paulo, SP"
        />

        <ProductCard
          title="Livros de Receitas"
          description="Coleção com 5 livros"
          location="Curitiba, PR"
        />

        <ProductCard
          title="Camisetas (P)"
          description="3 camisetas variadas"
          location="Belo Horizonte, MG"
        />

        <ProductCard
          title='Monitor 22"'
          description="Funcionando perfeitamente"
          location="Rio de Janeiro, RJ"
        />

        <ProductCard
          title="Bicicleta Infantil"
          description="Para crianças de 5-8 anos"
          location="Florianópolis, SC"
        />

        <ProductCard
          title="Vasos de Plantas"
          description="Kit com 4 vasos cerâmicos"
          location="Porto Alegre, RS"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFE8",
    padding: 20,
  },

  // NOVO
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 30,
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F5C4A",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },

  // NOVO
  profileButton: {
    backgroundColor: "#FFF",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },

  // NOVO
  profileButtonText: {
    fontSize: 20,
  },

  search: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },

  categories: {
    marginBottom: 20,
  },

  activeCategory: {
    backgroundColor: "#1F5C4A",
    color: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 12,
  },

  category: {
    backgroundColor: "#FFF",
    color: "#1F5C4A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});