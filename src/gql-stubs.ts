/**
 * Stub DocumentNode
 *
 * Originally imported from 'graphql/language/ast'
 */
export type DocumentNode = string

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
export declare function parse(source: string, options?: never): string

/**
 * GRAPHQL-JS LIBRARY DESCRIPTION:
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 *
 * Originally imported from 'graphql/language/printer'
 */
export declare function print(ast: string): string
