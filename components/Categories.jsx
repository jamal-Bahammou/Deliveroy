import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import SanityClient from '../sanity'

const Categories = () => {
  const [categories,setCategories] = useState([])

  useEffect(() => {
    (async() => {
      const query = `
      *[_type == "category"]
      `
      const res = await SanityClient.fetch(query)
      setCategories(res)
    })();
  }, [])

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="mt-4"
    >
      {categories.map(({_id,name,image}) =>
        <CategoryCard
          key={_id}
          name={name}
          image={image}
        />
      )}
    </ScrollView>
  )
}

export default Categories