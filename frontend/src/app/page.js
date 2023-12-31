'use client'
import { createContext } from 'react'

import './page.css'
import LoginPanel from './login/panel.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:8080/v1/graphql',
		headers: {
			'x-hasura-admin-secret': `test123`
		}
	}),
	cache: new InMemoryCache(),
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export default function Home() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<LoginPanel>

				</LoginPanel>
			</ThemeProvider>
		</ApolloProvider>
	)
}

