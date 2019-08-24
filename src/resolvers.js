import { User } from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "hi",
    users: () => User.find()
  },
    Mutation: {
      createUser: async (_, { name }) => {
        const user = new User({ name });
        await user.save();
        return user;
      }
  }
};
