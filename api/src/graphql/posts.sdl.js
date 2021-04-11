export const schema = gql`
  type Post {
    id: Int!
    url: String!
    title: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    url: String!
    title: String!
    description: String!
  }

  input UpdatePostInput {
    url: String
    title: String
    description: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
