import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_TODO = gql`
	query {
		getTodos {
			_id
			title
			description
			createdAt
			updatedAt
		}
	}
`

type BaseProps = {}
export type TestProps = BaseProps

export const Test: React.FC<TestProps> = () => {
	const [data, setData] = useState()
	useQuery(GET_TODO, {
		onCompleted: (data: any) => {
			console.log(data)
			setData(data)
		},
	})

	if (!data) return <div>no data</div>

	return <div>{JSON.stringify(data, null, 2)}</div>
}
