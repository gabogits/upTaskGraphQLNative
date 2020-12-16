import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';

// Apollo 
import client from "./config/apollo";
import {ApolloProvider} from "@apollo/client"

const upTaskApp = () => ( //cuando se da por implicito el return para un componente, eso es código de react
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => upTaskApp);
