import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 30
    },
    contentButton: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10
    },
    buttonParams: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#15133d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonParamsText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    contentAvatarMenu: {
        //backgroundColor: 'red'
        alignItems: 'center'
    },
    contentOptionMenu: {
        margin: 30,
        gap:10   //separación entre los elemnetos del contenedor
    },
    textMenu:{
        fontSize:20
    }

});