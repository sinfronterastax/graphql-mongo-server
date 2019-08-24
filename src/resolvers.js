import { User } from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "hello world! SinFronterasTax GraphQL server ready!",
    users: () => User.find()
  },
    Mutation: {
      createUser: async (_, { nombre, segundo_nombre, apellido_p, apellido_m, email }) => {
        const user = new User({ nombre, segundo_nombre, apellido_p, apellido_m, email });
        await user.save();
        return user;
      }
  }
};
