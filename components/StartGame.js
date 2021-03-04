import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export function StartGame(props) {
    return (
        <View>
            <Text style={style.text}>
                Who makes the first move?
            </Text>
            <Button
            title='Me'
            onPress={props.firstMove}
            color='#FF4500'
            />
            <Button
            title='SkyNet'
            onPress={props.opponentsFirstMove}
            />
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: '1.5em',
        paddingTop: '1em',
        paddingBottom: '1em',
    }, 
    btn: {
        marginBottom: '0.5em',
    },
})