import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//interface - props navegacion
interface Props extends StackScreenProps<RootStackParams, 'Persona'> { };

export const PersonaScreen = ({ route }: Props) => {
    //console.log(route.params);
    //almacenar los parametros de navegación
    const params = route.params;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
        </View>
    )
}
