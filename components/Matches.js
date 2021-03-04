import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StartGame } from './StartGame';

export function Matches(props) {
    return (
        <>
        {props.isStart ?
        <StartGame 
        firstMove={props.firstMove}
        opponentsFirstMove={props.opponentsFirstMove}
        /> 
        : 
        <View>
           <Text style={style.text}>
               {props.quantityOfMatches} Matches
            </Text> 
           <View style={style.result}>
               <Text style={style.text}>
                   Player Matches: {props.playerMatches}
                </Text>
           </View>
           <View style={style.result}>
               <Text style={style.text}>
                   {props.count}/3 matches selected
                </Text>
           </View>
           <View style={style.result}>
               <Text style={style.text}>
                   Opponent Matches: {props.opponentMatches}
                </Text>
           </View>
           {props.count ? 
           <Button
           title="Make a move"
           onPress={props.onMove}
           />
           : <Button 
             title="Make a move"
             color='#ccc'
            />}
           <View style={style.imgContainer}>
                {Array(props.quantityOfMatches).fill(null).map((item, index) =>
                    <TouchableOpacity 
                    key={index} 
                    onPress={props.onCount}
                    style={style.imgTouch}
                    >
                    <Image 
                    source={require('../assets/matches.jpg')}
                    style={style.img}
                    />
                    </TouchableOpacity>
                )}
           </View>
        </View>
        }
        </>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: '1.5em',
        paddingTop: '1em',
        paddingBottom: '1em',
    }, 
    result: {
        marginTop: '0.5em',
        marginBottom: '0.5em',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '80%',
        backgroundColor: '#00BFFF',
    },
    img: {
        width: '5em',
        height: '5em',
    }, 
    imgTouch: {
        margin: '0.3em',
        border: '2px',
        borderColor: '#000',
        borderRadius: '3px',
    },
    imgContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        margin: '0.5em',
    }, 
})