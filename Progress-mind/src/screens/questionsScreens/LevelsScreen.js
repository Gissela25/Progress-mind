import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, FlatList, Alert, Image } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { List } from 'react-native-paper'
const LevelsScreen = ({ route, navigation }) => {
    const { id, array, setConsultAPI } = route.params;

    const [questionsByLevel, setQuestionsByLevel] = useState([]);

    useEffect(() => {


        if (id == "html") {
            if (array.subcategoria.html.content == true) {
                setQuestionsByLevel(array.subcategoria.html)
            }
            else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "css") {
            if (array.subcategoria.css.content === true) {
                setQuestionsByLevel(array.subcategoria.css)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "js") {
            if (array.subcategoria.js.content == true) {
                setQuestionsByLevel(array.subcategoria.js)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "csharp") {
            if (array.subcategoria.csharp.content == true) {
                setQuestionsByLevel(array.subcategoria.csharp)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "php") {
            if (array.subcategoria.php.content == true) {
                setQuestionsByLevel(array.subcategoria.php)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "react") {
            if (array.subcategoria.react.content == true) {
                setQuestionsByLevel(array.subcategoria.react)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "cad") {
            if (array.subcategoria.cad.content == true) {
                setQuestionsByLevel(array.subcategoria.cad)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "cai") {
            if (array.subcategoria.cai.content == true) {
                setQuestionsByLevel(array.subcategoria.cai)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "cvv") {
            if (array.subcategoria.cvv.content == true) {
                setQuestionsByLevel(array.subcategoria.cvv)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "caa") {
            if (array.subcategoria.caa.content == true) {
                setQuestionsByLevel(array.subcategoria.caa)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "edi") {
            if (array.subcategoria.edi.content == true) {
                setQuestionsByLevel(array.subcategoria.edi)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "cdp") {
            if (array.subcategoria.cdp.content == true) {
                setQuestionsByLevel(array.subcategoria.cdp)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "eym") {
            if (array.subcategoria.eym.content == true) {
                setQuestionsByLevel(array.subcategoria.eym)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }
        else if (id == "ofc") {
            if (array.subcategoria.ofc.content == true) {
                setQuestionsByLevel(array.subcategoria.ofc)
            } else {
                Alert.alert('Error', 'Los datos no han sido cargados. Vuelve más tarde'),
                    [{ Text: 'Ok' }];
            }
        }

    })

    return (
        <ScrollView style={GlobalStyles.quizCategoryContainer}>
            <Pressable
                style={GlobalStyles.buttonsCategory}
                onPress={() => navigation.navigate('Questions', {
                    questions: questionsByLevel.nivel1,
                    setConsultAPI
                })}>
                <Text style={GlobalStyles.textButtonsCaterogry}>Nivel 1</Text>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttonsCategory}
                onPress={() => navigation.navigate('Questions', {
                    questions: questionsByLevel.nivel2,
                    setConsultAPI
                })}>
                <Text style={GlobalStyles.textButtonsCaterogry}>Nivel 2</Text>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttonsCategory}
                onPress={() => navigation.navigate('Questions', {
                    questions: questionsByLevel.nivel3,
                    setConsultAPI
                })}>
                <Text style={GlobalStyles.textButtonsCaterogry}>Nivel 3</Text>
            </Pressable>


        </ScrollView>
    );
}

export default LevelsScreen