import React, { useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false
  const error = false



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went worng</Text>
        ) : (
          <FlatList />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
