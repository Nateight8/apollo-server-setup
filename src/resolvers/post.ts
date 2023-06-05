import { prisma } from "../../db.js";

interface createPostInput {
  title: string;
  username: string;
}

const resolvers = {
  Mutation: {
    createPost: async (_parent: any, args: createPostInput) => {
      const post = await prisma.post.create({
        data: {
          title: args.title,
          username: args.username,
        },
      });

      return post;
    },
  },
  Query: {
    getAllPosts: async () => {
      return await prisma.post.findMany(); // Easy way to get a list of posts -> [post1, ....]
    },
  },
};

export default resolvers;
