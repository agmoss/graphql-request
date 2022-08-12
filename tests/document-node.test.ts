import graphqlTag from 'graphql-tag'
import { request } from '../src'
import { setupTestServer } from './__helpers'

const ctx = setupTestServer()

it.skip('accepts graphql DocumentNode as alternative to raw string', async () => {
  const mock = ctx.res({ body: { data: { foo: 1 } } })
  await request(
    ctx.url,
    `
        {
          query {
            users
    }`
  )
  expect(mock).toMatchSnapshot()
})
