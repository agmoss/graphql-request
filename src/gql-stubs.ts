/**
 * Stub DocumentNode
 *
 * Originally imported from 'graphql/language/ast' as a named import
 */
export type DocumentNode = string

/**
 * Stub TypedDocumentNode
 *
 * Originally imported from '@graphql-typed-document-node/core' as a named import
 */
export type TypedDocumentNode<T, S> = string

/**
 * Stub OperationDefinitionNode
 *
 * Originally imported from 'graphql/language/ast' as a named import
 */
export type OperationDefinitionNode = any

/**
 * Stub GraphQLError
 *
 * Originally imported from 'graphql/error/GraphQLError' as a named import
 */
export class GraphQLError extends Error {}

/**
 * GRAPHQL-JS LIBRARY DESCRIPTION:
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * Originally imported from 'graphql/language/parse' as a named import
 */
export function parse(source: string, options?: never) {
  return source
}

/**
 * GRAPHQL-JS LIBRARY DESCRIPTION:
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 *
 * Originally imported from 'graphql/language/printer' as a named import
 */

export function print(ast: string) {
  return ast
}
