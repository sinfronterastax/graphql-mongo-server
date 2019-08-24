import mongoose from "mongoose";

export const User = mongoose.model("User", { 
    nombre: String,
    segundo_nombre: String,
    apellido_p: String,
    apellido_m: String,
    email: String
});
