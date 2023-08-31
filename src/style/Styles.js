import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexWrap: 'wrap'
    },
    squareColor: {
        width: 200,
        height: 200,
        margin: 10,
        borderWidth: 5,
        borderColor: '#000',
        borderRightWidth: 10,
        padding: 3,
        paddingRight: 28
    }
});