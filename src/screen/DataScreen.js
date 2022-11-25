import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../hook/useData';
import { styles } from '../style'
import DropDownPicker from 'react-native-dropdown-picker';

export default function Screen(props) {
    const [openType, setOpenType] = useState(false);
    const [valueType, setValueType] = useState(null);
    const [itemsType, setItemsType] = useState([
        { label: 'regular', value: 'regular' },
        { label: 'Scripted', value: 'Scripted' },
        { label: 'Animation', value: 'Animation' },
        { label: 'Reality', value: 'Reality' },
        { label: 'Talk Show', value: 'Talk Show' },
        { label: 'News', value: 'News' },
        { label: 'Documentary', value: 'Documentary' }
    ]);

    //=============================
    const [openLanguage, setOpenLanguage] = useState(false);
    const [valueLanguage, setValueLanguage] = useState(null);
    const [itemsLanguage, setItemsLanguage] = useState([
        { label: 'Chinese', value: 'Chinese' },
        { label: 'English', value: 'English' },
        { label: 'Russian', value: 'Russian' },
    ]);
    //==========================================
    const [openStatus, setOpenStatus] = useState(false);
    const [valueStatus, setValueStatus] = useState(null);
    const [itemsStatus, setItemsStatus] = useState([
        { label: 'Running', value: 'Running' },
        { label: 'Ended', value: 'Ended' },
    ]);
    return (
        <View style={{ flex: 1, margin: 15 }}>
            <View style={{ marginBottom: 15, zIndex: 4 }}>
                <Text style={{ fontSize: 23 }}>Language</Text>
                <DropDownPicker
                    open={openLanguage}
                    value={valueLanguage}
                    items={itemsLanguage}
                    setOpen={setOpenLanguage}
                    setValue={setValueLanguage}
                    setItems={setItemsLanguage}
                />

            </View>
            <View style={{ marginBottom: 15, zIndex: 3 }}>
                <Text style={{ fontSize: 23 }}>Type</Text>
                <DropDownPicker
                    open={openType}
                    value={valueType}
                    items={itemsType}
                    setOpen={setOpenType}
                    setValue={setValueType}
                    setItems={setItemsType}
                />
            </View>
            <View style={{ marginBottom: 15, zIndex: 2 }}>
                <Text style={{ fontSize: 23 }}>Status</Text>
                <DropDownPicker
                    open={openStatus}
                    value={valueStatus}
                    items={itemsStatus}
                    setOpen={setOpenStatus}
                    setValue={setValueStatus}
                    setItems={setItemsStatus}
                />
            </View>
            <View style={{ marginBottom: 15, zIndex: 1,marginTop:'60%' }}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#DDDDDD",
                        padding: 10,
                        borderRadius:15

                    }}
                    onPress={() => { alert('ok') }}
                >
                    <Text>Check</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
