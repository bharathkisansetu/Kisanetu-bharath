import { View, Text,TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/Logo/KisansetuLogo.png'
import CropList from '../../../../Components/Addcrop/CropList'
import Vege from '../../../../Components/Addcrop/Vege'
import Fruits from '../../../../Components/Addcrop/Fruits'
import Pulses from '../../../../Components/Addcrop/Pulses'
import CropCategory from '../../../../Components/Addcrop/CropCategory'
const AddCrop = ({navigation}) => {
  return (
    <ScrollView className='bg-slate-100'
    showsHorizontalScrollIndicator='false'>
      <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
      <TouchableOpacity
       onPress={()=>{
         navigation.openDrawer()
        }}
        style={{marginLeft:4, }}
      >
        <Ionicons name='reorder-three-outline' size={25} color='#00CCBB'  />
      </TouchableOpacity>
      <View style={{flex:1}}>
        <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>SELECT CROP</Text>
      </View >
      <Ionicons name='call-outline' size={25} color='#00CCBB' />
      <Image source={KisansetuLogo} style={{marginLeft:16, height:30, width:30, marginRight:10,}}/>
      </View>
       {/* Name of the crop categories */}
       <CropCategory
      id='1'
      title='Crop'
       />
       <CropCategory
      id='2'
      title='Pulses'
       />
       <CropCategory
      id='3'
      title='Fruits'
       />
       <CropCategory
      id='4'
      title='Vegetables'
       />
       <CropCategory
      id='5'
      title='LiveStock'
       />
    </ScrollView>
  )
}

export default AddCrop