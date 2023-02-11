import { View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import{useNavigation} from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  } from "react-native-heroicons/outline";
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
    headerShown: false,
    });
  }, []);



  return (
    <SafeAreaView className = "bg-white pt-5">

        {/* Header */}
        <View className = "flex-row pb-3 items-centre mx-4 space-x-2">
          <Image
            source ={{
              uri: 'https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp',
            }}
            className= "h-7 w-7 bg-gray-300 p-4 rounded-full"/>
          <View className= 'flex-1'>
            <Text classNAme="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

      {/* search */}
      <View className="flex-row item-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom:100
        }}
      >
        {/* Categories */}
        <Categories/>
        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;