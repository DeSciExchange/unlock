import { gql } from 'apollo-boost'

export default function keysCount() {
  return gql`
    query keysCount($addresses: [String!], $timestamp: BigInt! = 0) {
      totalKeys: locks(where: { address_in: $addresses }) {
        keys(where: { expiration_gt: 0 }, first: 1000) {
          keyId
          lock {
            address
            name
          }
        }
      }
      activeKeys: locks(where: { address_in: $addresses }) {
        keys(where: { expiration_gt: $timestamp }, first: 1000) {
          keyId
          lock {
            address
            name
          }
        }
      }
    }
  `
}
