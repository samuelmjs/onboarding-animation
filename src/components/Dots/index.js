import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function Dots({ current }) {
    return (
        <View style={styles.container}>
            <View style={[styles.dot, current === 0 && { backgroundColor: '#333' }]} />
            <View style={[styles.dot, current === 1 && { backgroundColor: '#333' }]} />
            <View style={[styles.dot, current === 2 && { backgroundColor: '#333' }]} />
            <View style={[styles.dot, current === 3 && { backgroundColor: '#333' }]} />
        </View>
    );
}
