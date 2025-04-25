import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true, 
        headerTitleAlign: 'center',
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
          headerStyle: {
            backgroundColor: '#8BDAFF', // ヘッダーの背景色を設定
          },
          headerTitleStyle: {
            color: 'white', // ヘッダーのテキストの色を白に設定
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '設定',
          tabBarIcon: ({ color }) => <FontAwesome name="pencil-square-o" size={24} color={color} />,
          headerStyle: {
            backgroundColor: '#8BDAFF', // ヘッダーの背景色を設定
          },
          headerTitleStyle: {
            color: 'white', // ヘッダーのテキストの色を白に設定
          },
        }}
      />
    </Tabs>
  );
}
