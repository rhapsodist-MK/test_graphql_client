import React from 'react'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './lib/apolloClient'
import { Test } from './components/Test'

function App() {
	return (
		<ApolloProvider client={client}>
			<Test />
		</ApolloProvider>
	)
}

export default App
