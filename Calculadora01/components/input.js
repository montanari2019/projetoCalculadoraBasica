import React from 'react'
import{
    View,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native'

export default (props) => {
    return (
        <View>
            <TextInput
                keyboardType='numeric' 
                style={styles.input}
                underlineColorAndroid='grey'
                placeholder={props.titlePlaceholder}
                onChangeText={(text) => props.onChangeText(parseFloat(text))}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
       width: Dimensions.get('window').width / 2     
    }
})