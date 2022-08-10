/**
 * Stub DocumentNode
 *
 * Originally imported from 'graphql/language/ast'
 */
export type DocumentNode = string

export type TypedDocumentNode<T, S> = string

// export interface TypedDocumentNode<
//   Result = {
//     [key: string]: any
//   },
//   Variables = {
//     [key: string]: any
//   }
// > extends DocumentNode {
//   /**
//    * This type is used to ensure that the variables you pass in to the query are assignable to Variables
//    * and that the Result is assignable to whatever you pass your result to. The method is never actually
//    * implemented, but the type is valid because we list it as optional
//    */
//   __apiType?: (variables: Variables) => Result
// }

/**
 * Stub OperationDefinitionNode
 *
 * Originally imported from 'graphql/language/ast'
 */
export type OperationDefinitionNode = any

/**
 * Stub GraphQLError
 *
 * Originally imported from 'graphql/error/GraphQLError'
 */
export class GraphQLError extends Error {}

/**
 * GRAPHQL-JS LIBRARY DESCRIPTION:
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
export function parse(source: string, options?: never) {
  return source
}

/**
 * GRAPHQL-JS LIBRARY DESCRIPTION:
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 *
 * Originally imported from 'graphql/language/printer'
 */

export function print(ast: string) {
  return ast
}
