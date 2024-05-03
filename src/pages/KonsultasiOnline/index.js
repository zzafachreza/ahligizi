import { View, Text, ScrollView, Image, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import axios from 'axios'
import { apiURL } from '../../utils/localStorage'

export default function konsultasionline({ navigation }) {
  const backPage = () => {
    navigation.goBack();
  }

  const [comp, setComp] = useState({
    tlp: 0,
  });

  useEffect(() => {
    axios.post(apiURL + 'company').then(res => {
      console.log(res.data);
      setComp(res.data.data)
    })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader judul="Konsultasi Online" onPress={backPage} />

      <ScrollView>
        <View style={{ padding: 10, }}>
          <Image source={require('../../assets/photoprofilepembuataplikasi.png')} style={{
            width: 138,
            height: 200,
            alignSelf: 'center',


          }} />

          <Text style={{ fontFamily: fonts.primary[600], textAlign: "center", fontSize: MyDimensi / 3, marginTop: 20 }}>Suska Ari Setyawan</Text>

          <TouchableNativeFeedback onPress={() => {

            Linking.openURL('https://wa.me/' + comp.tlp)
          }}>
            <View style={{ padding: 10, backgroundColor: colors.success, width: 200, alignSelf: 'center', borderRadius: 10, marginTop: 50 }}>
              <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" }}>
                <Text style={{ color: "white", fontFamily: fonts.primary[600], fontSize: MyDimensi / 3 }}>Konsultasi</Text>
                <Image source={require('../../assets/waicon.png')} style={{ height: 31, width: 31, }} />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  )
}