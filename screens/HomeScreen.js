import { View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import{useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
    headerShown: false,
    });
  }, []);



  return (
    <SafeAreaView className = "bg-white pt-5">
      <Text className = "text-red-500" >
        {/* Header */}
        <View className = "flex-row pb-3 items-centre mx-4 space-x-2 px-4">
          <Image
            source ={{
              uri: 'https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp',
            }}
            className= "h-7 w-7 bg-gray-300 p-4 rounded-full"/>
          <View>
            <Text classNAme="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
            </Text>
          </View>
        </View>

      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;