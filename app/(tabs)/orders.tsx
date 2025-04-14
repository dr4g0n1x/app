import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Clock } from 'lucide-react-native';

export default function OrdersScreen() {
  const orders = [
    {
      id: '1',
      restaurant: 'Pizza Palace',
      items: ['Margherita Pizza', 'Garlic Bread'],
      status: 'In Progress',
      time: '25-30 min',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      restaurant: 'Burger House',
      items: ['Classic Burger', 'Fries'],
      status: 'Delivered',
      time: 'Delivered at 2:30 PM',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Orders</Text>
      </View>

      {orders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Image source={{ uri: order.image }} style={styles.orderImage} />
          <View style={styles.orderContent}>
            <View style={styles.orderHeader}>
              <Text style={styles.restaurantName}>{order.restaurant}</Text>
              <View style={[
                styles.statusBadge,
                { backgroundColor: order.status === 'Delivered' ? '#E8F5E9' : '#FFF3E0' }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: order.status === 'Delivered' ? '#2E7D32' : '#EF6C00' }
                ]}>{order.status}</Text>
              </View>
            </View>
            
            <Text style={styles.itemsList}>{order.items.join(', ')}</Text>
            
            <View style={styles.timeContainer}>
              <Clock size={16} color="#666666" />
              <Text style={styles.timeText}>{order.time}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  orderCard: {
    margin: 20,
    marginTop: 0,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  orderImage: {
    width: '100%',
    height: 120,
  },
  orderContent: {
    padding: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  itemsList: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666666',
  },
});