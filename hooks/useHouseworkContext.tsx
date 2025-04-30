// /contexts/HouseworkContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';//非同期ストレージ

const STORAGE_KEY = 'houseworkList';
const HouseworkContext = createContext(null);

export const HouseworkProvider = ({ children }) => {
  const [houseworkList, setHouseworkList] = useState([]);

  // 永続保存
  const saveToStorage = async (item) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('保存に失敗しました', e);
    }
  };

  // 読み込み
  const loadFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        setHouseworkList(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('読み込みに失敗しました', e);
    }
  };

  // 起動時に読み込む
  useEffect(() => {
    loadFromStorage();
  }, []);

  // houseworkListが変わったら保存
  useEffect(() => {
    saveToStorage(houseworkList);
  }, [houseworkList]);

  return (
    <HouseworkContext.Provider value={{ houseworkList, setHouseworkList }}>
      {children}
    </HouseworkContext.Provider>
  );
};

export const useHousework = () => useContext(HouseworkContext);
