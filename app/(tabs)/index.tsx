import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoText}>NETSAKHAR</Text>
          <Text style={styles.logoAccent}>LIK</Text>
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.title}>What would you like to eat?</Text>
      </View>

      <View style={styles.featuredContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80' }}
          style={styles.featuredImage}
        />
        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle}>Pizza of the Day</Text>
          <Text style={styles.featuredDescription}>Margherita with fresh basil</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>20% OFF</Text>
          </View>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {['Pizza', 'Burgers', 'Sushi', 'Salads', 'Desserts'].map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <View style={styles.popularGrid}>
          {[
            {
              name: 'Pepperoni Pizza',
              image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=80',
              price: '$12.99'
            },
            {
              name: 'Veggie Supreme',
              image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=800&auto=format&fit=crop&q=80',
              price: '$11.99'
            }
          ].map((item, index) => (
            <View key={index} style={styles.popularItem}>
              <Image source={{ uri: item.image }} style={styles.popularImage} />
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1a1a1a',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  logoAccent: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FF3B30',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  greeting: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  featuredContainer: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#666666',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  categoryItem: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  popularContainer: {
    padding: 20,
  },
  popularGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  popularImage: {
    width: '100%',
    height: 120,
  },
  popularName: {
    fontSize: 16,
    fontWeight: '500',
    padding: 12,
    paddingBottom: 4,
  },
  popularPrice: {
    fontSize: 14,
    color: '#666666',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});