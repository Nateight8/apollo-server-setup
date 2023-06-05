import gql from "graphql-tag";
const typeDefs = gql `
  type Post {
    id: String
    title: String
    username: String
  }

  type Query {
    getAllPosts: [Post]
  }

  type Mutation {
    createPost(title: String, username: String): Post
  }
`;
export default typeDefs;
