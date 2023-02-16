import { Home } from '../screens';
import PurchaseSVG from '../assets/icons/purchase.svg';
import InventorySVG from '../assets/icons/inventory.svg';
import PartnerSVG from '../assets/icons/partner.svg';
import { NAVIGATION } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NAVIGATION.dashboard}
        component={Home}
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ focused }) => <PurchaseSVG fill={focused ? theme.colors.primary : '#000'} width="30" height="30" />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION.chatScreen}
        component={Home}
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ focused }) => <InventorySVG fill={focused ? theme.colors.primary : '#000'} width="30" height="30" />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION.settingScreen}
        component={Home}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => <PartnerSVG fill={focused ? theme.colors.primary : '#000'} width="30" height="30" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;