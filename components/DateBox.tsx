import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const { WEATHER_API_KEY } = Constants.expoConfig?.extra || {};

const DateBox = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const [weather, setWeather] = useState(null);

    useEffect(() => {
      const fetchWeather = async () => {
        try {
            //位置情報の許可をリクエスト
            let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Permission to access location was denied');
                    return;
                }

            // 現在地を取得
            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            console.log('位置情報:', latitude, longitude);

            //APIで天気情報を取得   
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=ja`
            );
            const data = await response.json();
            setWeather(data);
            } catch (error) {
            console.error(error);
        }
      };
      fetchWeather();
    }, []);

    const renderWeatherIcon = () => {
        if (!weather) return null;

        const weatherMain = weather.weather[0].main;
        if (weatherMain === 'Clear') {
            return <MaterialCommunityIcons name="weather-sunny" size={32} color="#FFD700" />;
        } else if (weatherMain === 'Clouds') {
            return <MaterialCommunityIcons name="weather-cloudy" size={32} color="#A9A9A9" />;
        } else if (weatherMain === 'Rain') {
            return <MaterialCommunityIcons name="weather-rainy" size={32} color="#1E90FF" />;
        } else {
            return <MaterialCommunityIcons name="weather-partly-cloudy" size={32} color="#A9A9A9" />; // その他
        }
    };

  return (
    <View style={styles.dayContainer}>
        <View style={styles.dayTitleContainer}>
          <MaterialCommunityIcons name="calendar-blank" size={24} color="#28B4FF" />
          <Text style={styles.dayTitleText}>日付</Text>
        </View>
        <View style={styles.currentTimeContainer}>
          <Text style={styles.dateText}>{dateString}</Text>
          <View>
                    {renderWeatherIcon()}
            </View>
        </View>
      </View>
  );
};
export default DateBox;

const styles = StyleSheet.create({
    dayContainer: {
      width: 360,
      paddingVertical: 10,
      borderColor: '#BAE7FF',
      borderWidth: 1,
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: '#BAE7FF',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    dayTitleContainer: {
      width: 350,
      height: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
    },
    currentTimeContainer: {
      width: 350,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleText: {
      fontSize: 22,
      fontFamily: 'Arial',
      color: '#E95A5A',
      fontWeight: 'bold',
    },
    dayTitleText: {
      fontSize: 20,
      fontFamily: 'Arial',
      color: '#28B4FF',
      fontWeight: 'bold',
    },
    dateText: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'white',
      },
  });
  