import { View, Text, ScrollView, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React ,{ useState, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FaqView = ({id,title,body}) => {
    const [showContent, setshowContent] =useState(false)
    const animationController = useRef(new Animated.Value(0)).current;

    const ToggleListItem =()=>{
        const config ={
            duration:300,
            toVlaue: showContent ? 0 : 1,
            useNativeDriver: true,
        }
        Animated.timing(animationController, config).start()
        setshowContent(!showContent)
    }
    const arrowTransform = animationController.interpolate({
        inputRange:[0,1],
        outputRange:['0deg', '90deg'],
        
    })
  return (
    <ScrollView className='p-3'>
        
      <TouchableOpacity
      onPress={()=>ToggleListItem()}
      className='bg-white p-3 rounded-xl shadow-sm'>
        <View className='flex-row '>
        <Text className='flex-1  text-lg'>{title}</Text>

        <Animated.View style={{transform:[{rotateZ:arrowTransform}]}}>
        <Ionicons name='chevron-forward' color='#00CCBB' size={22}/>
        </Animated.View>

        </View>
        
        {showContent && <Text className='mb-5 text-gray-500'>{body}</Text>}
        </TouchableOpacity>
    </ScrollView>
  )
}

export default FaqView