import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const LateralMenuCustom = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInternal {...props} />}>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Configuración' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

//Menú Lateral personalizado
const MenuInternal = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.contentAvatarMenu}>
                <Image
                    source={{
                        uri: 'https://p1.hiclipart.com/preview/169/1023/715/login-logo-user-users-group-customer-education-button-typeface-credential-png-clipart.jpg'
                    }}
                    style={styles.avatar} />
            </View>

            <View style={styles.contentOptionMenu}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StackNavigator')}>
                    <Text style={styles.textMenu}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.textMenu}>Configuración</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}