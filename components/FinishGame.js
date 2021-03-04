import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export function FinishGame(props) {
    return (
        <View>
            <Text style={style.text}>
                {props.text}
            </Text>
            <Button
            title='Play again?'
            onPress={props.onPlayAgain}
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
})