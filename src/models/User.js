import mongoose from "mongoose";

export const User = mongoose.model("User", { 
    nombre: String,
    apellido_p: String,
    apellido_m: String,
    email: String,
    dateOfBirth: String,
    curp: String,
    photoIDmx: String,
    photoIDusa: String,
    address_mx: {
        city: String,
        delegacion: String,
        colonia: String,
        street: String,
        houseNumber: String,
        zip: String
    },
    address_usa: {
        city: String,
        street: String,
        houseNumber: String,
        zip: String
    }
});
