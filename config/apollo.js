import { ApolloClient } from "@apollo/client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createHttpLink} from 'apollo-link-http';
//import {Platform} from "react-native";
import { setContext} from "apollo-link-context"
import AsyncStorage from '@react-native-async-storage/async-storage';

const httplink = createHttpLink({

    uri: "https://polar-beach-92252.herokuapp.com"
})

const authLink = setContext( async (_ , {headers}) => {
    //leer el token 
    const token  = await AsyncStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: ''
        }
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httplink) //concatenar este arreglo, enviar el token a la direccion de httplink
}) //mostrar e token en cada peticion que hagamos al servidor

export default client;

    //uri: Platform.OS === "ios" ? 'http://localhost:4000/': 'http://10.0.2.2:4000/'