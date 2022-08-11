import { parse } from '../src/gql-stubs'
import request from '../src'
import { setupTestServer } from './__helpers'

const ctx = setupTestServer()

test('typed-document-node code should TS compile', async () => {
  ctx.res({ body: { data: { foo: 1 } } })

  const query: string = parse(/* GraphQL */ `
    query greetings($str: String!) {
      echo(str: $echo)
    }
  `)

  // variables are mandatory here!


  await request(ctx.url, query, {})

  await request(ctx.url, query)

  await request(ctx.url, query, { str: 'Hi' })

  const document: string= parse(/* GraphQL */ `
    query greetings($str: String!) {
      echo(str: $echo)
    }
  `)

  // variables are mandatory here!


  await request({
    url: ctx.url,
    document,
  })

  await request({
    url: ctx.url,
    document,

    variables: {},
  })

  await request({
    url: ctx.url,
    document,

    variables: { aaa: 'aaa' },
  })

  await request({
    url: ctx.url,
    document,

    variables: { str: 1 },
  })

  await request({
    url: ctx.url,
    document,
    variables: {
      str: 'foo',
    },
  })

  expect(1).toBe(1)
})