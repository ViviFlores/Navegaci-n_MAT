import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

//Definir las rutas y parámetros de navegación
export type RootStackParams = {
    Pantalla1: undefined,
    Pantalla2: undefined,
    Pantalla3: undefined,
    Persona: { id: number, nombre: string, correo: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //initialRouteName='Pantalla2' define pantalla principal
            screenOptions={{
                //headerShown: false,  ocultar cabecera de navegación
                headerStyle: {
                    elevation: 0
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen name="Pantalla1" options={{ title: 'Home' }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{ title: 'Pantalla Second' }} component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3" options={{ title: 'Pantalla Final' }} component={Pantalla3Screen} />
            <Stack.Screen name='Persona' options={{ title: 'Datos Persona' }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}