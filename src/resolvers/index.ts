import userResolvers from "./user.js";
import postResolvers from "./post.js";
import merge from "lodash.merge";
const resolvers = merge({}, postResolvers, userResolvers);

export default resolvers;
