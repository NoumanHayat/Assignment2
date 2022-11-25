import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, homeStyleheet, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../hook/useData';
import {homeStyle} from '../style'
export default function Screen(props) {
    const { getDetails } = useContext(DataContext);
     const navigation = props.navigation;
    console.log(props.navigation)
    const [data, setData] = useState([]);
    useEffect(() => {
        async function featchData() {
            let a = await getDetails();
            console.log(a[0]._embedded.show.image.medium);
            setData(a.slice(0, 7))
        }
        featchData();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1 }}>

                <Image style={homeStyle.bannerStyle} source={require('./../../assets/banner.jpg')} />
                <View style={homeStyle.HeaderView}>
                    <Text style={homeStyle.HeaderStyle}>Where Imagination Becomes Reality!</Text>
                    <Text style={homeStyle.tetStyle}>We provide best shows for any gender any age.You can see list of most popular and best shows ever</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 23, color: 'White', margin: 10 }}>Top trending</Text>
                    {/* <Card /> */}
                    <FlatList
                        style={{ paddingBottom: 15 }}
                        data={data}
                        renderItem={({ item, index, separators }) => {
                            console.log(item._embedded.show.name)
                            return (
                                <TouchableOpacity onPress={() => {  navigation.navigate('Details', item); }}>
                                    <View style={homeStyle.cardView}>
                                        <View >
                                            <Image source={{ uri: item._embedded.show.image.medium }}
                                                style={{ width: 60, height: 60, borderRadius: 30 }} />
                                        </View>
                                        <View style={{ padding: 10 }} >
                                            <Text style={{ fontSize: 17 }}>{item._embedded.show.name}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 15 }}>type:{item._embedded.show.type}</Text>
                                                <Text style={{ fontSize: 15, marginLeft: 20 }}>status:{item._embedded.show.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        </View>
    );
}
