import { ApolloClient, InMemoryCache } from '@apollo/client'

const HOST_URL = 'https://mern-test-ts.herokuapp.com'

export const client = new ApolloClient({
	uri: `${HOST_URL}/graphql`,
	cache: new InMemoryCache(),
})
