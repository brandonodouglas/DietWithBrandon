import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

const ShopInputForm = () => {
     const [form, setForm] = useState({shopName: '',});

    const handleSubmit =() => {
        return(console.log(form.shopName));

    }
return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Enter the name of the shop you visit here..."
            value={form.shopName}
            onChangeText={(text) => setForm({ ...form, shopName: text})}
        />
        <Button title="add Shop" onPress={handleSubmit} />
        </View>


);
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#9a25c4ff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,

    },
});


export default ShopInputForm;