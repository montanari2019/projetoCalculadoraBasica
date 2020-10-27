import React, { Component } from 'react'
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'

export default function (props) {

    return (
        <View>
            <TouchableOpacity style={styles.Touchable} onPress={props.onClick}>
                <Text style={styles.button}>
                    {props.titulo}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize:40,
        backgroundColor: '#252525',
        color: '#f2f2f2',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: '#ff574d',
        borderRadius: 10,
        // padding: 10,
        height: Dimensions.get('window').height / 7,
        width: Dimensions.get('window').width / 4
    },
    Touchable: {
        padding: 5
    }
})