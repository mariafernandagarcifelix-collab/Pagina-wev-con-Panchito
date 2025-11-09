import {z} from "zod";
export const registerSchema = z.object({
        name: z.string({required_error: "El nombre es obligatorio"}),
        email: z.string({required_error: "El email es obligatorio"}).email("El email no es válido"),
        password: z.string({required_error: "La contraseña es obligatorio"}).min(6,"La contraseña debe medir 6 caracteres")
})