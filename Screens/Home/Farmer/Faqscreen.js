import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import FaqView from '../../../Components/FaqView'

const Faqscreen = () => {
  return (
    <ScrollView className='bg-lime-100'>
      <FaqView
      id={12}
      title='what is kisanSetu?'
      body='Kisansetu is farmers agri tech app launched first time in the karnataka...!'
      />
      <FaqView 
      id={13}
      title='what is kisan'
      body='Kisansetu is farmers agri tech app launched first time in the karnataka...!'
      />
      <FaqView
      id={1}
      title='testing'
      body='testing testing testing testing'
      />
      
    </ScrollView>
  )
}

export default Faqscreen