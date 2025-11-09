import mongoose from 'mongoose';
export const conncetDB = async () =>{
try{
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("[MongoDB] Conexión exitosa a la base de datos.")
} catch (error) {
    console.log(error);
}
}
