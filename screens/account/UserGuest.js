import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()
    return (
        <ScrollView
            style={styles.viewBody}
            centerContent={true}>
            <Image
                source={require("../../assets/retauranteLogo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.tittle}>Consulat tu perfil en restaurante</Text>
            <Text style={styles.description}>Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado mas y comenta como ha sido tu experiencia</Text>

            <Button
                buttonStyle={styles.button}
                title='Ver tu perfil'
                onPress={() => navigation.navigate('login')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
    },
    tittle: {
        fontWeight: 'bold',
        fontSize: 19,
        marginVertical: 10,
        textAlign: 'center'
    },
    description: {
        justifyContent: 'center',
        marginBottom: 2,
        color: 'black'
    },
    button: {
        backgroundColor: '#a27652'
    }
})
