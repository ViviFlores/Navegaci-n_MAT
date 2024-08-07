import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

//interface - objeto
interface Persona {
    id: number;
    nombre: string;
    correo: string;
}

//recibir las propiedades de navegación
//interface - props de navegación
interface Props extends StackScreenProps<RootStackParams, 'Pantalla1'> { };

export const Pantalla1Screen = ({ navigation }: Props) => {
    //console.log(props);
    //objeto persona
    const persona1: Persona = {
        id: 1,
        nombre: 'Ariel',
        correo: 'aron@gmail.com'
    }
    const persona2: Persona = {
        id: 2,
        nombre: 'Matilde',
        correo: 'mcahuenias@gmail.com'
    }
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pantalla 1</Text>
            <Button
                title='Ir página 2'
                onPress={() => navigation.navigate('Pantalla2')} />
            {/*<Button
                title='Ir persona'
                onPress={() =>navigation.navigate('Persona')} />*/}
            <Text>Navegar con argumentos</Text>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={{
                        ...styles.buttonParams,
                        backgroundColor: 'red'
                    }}
                    onPress={() => navigation.navigate('Persona', persona1)}>
                    <Text style={styles.buttonParamsText}>Ariel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonParams}
                    onPress={() => navigation.navigate('Persona', persona2)}>
                    <Text style={styles.buttonParamsText}>Matilde</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
