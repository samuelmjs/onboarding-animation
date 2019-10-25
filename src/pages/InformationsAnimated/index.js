import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import onBoardingCar from '../../../assets/onBoardingCar.png';
import onBoardingMap from '../../../assets/onBoardingMap.png';
import onBoardingMessage from '../../../assets/onBoardingMessage.png';

import styles from './styles';

const { width } = Dimensions.get('window');

const information = [
    {
        id: Math.random(),
        image: onBoardingCar,
        title: 'Olá, Bem Vindo !',
        content: 'lorem ipsum dolor sit amet consectetur adipiscing elit sagittis velit ',
        backgroundColor: '#fff',
        colorText: '#48AB6A'
    },
    {
        id: Math.random(),
        image: onBoardingMessage,
        title: 'Boa Comunicaçao !',
        content: 'lorem ipsum dolor sit amet consectetur adipiscing',
        backgroundColor: '#fff',
        colorText: '#48AB6A'
    },
    {
        id: Math.random(),
        image: onBoardingMap,
        title: 'Seu Destino !',
        content: 'lorem ipsum dolor sit amet consectetur adipiscing',
        backgroundColor: '#fff',
        colorText: '#48AB6A'
    },
];

export default function InformationsAnimated() {
    const [info, setInfo] = useState(information);
    const [currentPage, setCurrentPage] = useState(0);

    function getItemLayout(data, index) {
        return (
            {
                length: width,
                offset: width * index,
                index
            }
        );
    }

    useEffect(() => {
        flatlist.scrollToIndex({ animated: true, index: currentPage });
    }, [currentPage])

    setTimeout(() => {
        animatedScroll()
    }, 3000)

    function animatedScroll() {
        if (currentPage < 2)
            setCurrentPage(currentPage + 1)

        if (currentPage === 2)
            setCurrentPage(0)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={info}
                ref={ref => flatlist = ref}
                keyExtractor={item => String(item.id)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                horizontal
                getItemLayout={(data, index) => getItemLayout(data, index)}
                renderItem={({ item }) =>
                    <View key={item.id} style={[styles.containerItem, { backgroundColor: item.backgroundColor }]}>
                        <Image source={item.image} style={styles.image} />
                        <Text
                            style={[styles.text, { color: item.colorText }]}
                        >{item.title}</Text>

                        <View style={styles.containerContent}>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                    </View>}
            />

        </View>
    );
}
