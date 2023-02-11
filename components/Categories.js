import React from 'react'
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard 
      imgUrl = "https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp" 
      title ="Testing1"/>
      <CategoryCard 
      imgUrl = "https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp" 
      title ="Testing2"/>
      <CategoryCard 
      imgUrl = "https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp" 
      title ="Testing3"/>

    </ScrollView> 
    
  )
}

export default Categories;