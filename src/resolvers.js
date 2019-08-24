import { User } from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "hello world! SinFronterasTax GraphQL server ready!",
    users: () => User.find()
  },
    Mutation: {
      createUser: async (_, { nombre, apellido_p, apellido_m, email, dateOfBirth, curp, photoIDmx, photoIDusa }) => {
        const user = new User({ nombre, apellido_p, apellido_m, email, dateOfBirth, curp, photoIDmx, photoIDusa });
        await user.save();
        return user;
      }
  }
};
