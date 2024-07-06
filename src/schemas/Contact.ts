import {z} from 'zod'

export const typeEnum = ['Familiar', 'Trabajo', 'Amigo', 'Otros'] as const;

export const ContactSchema = z.object({
    name: z
    .string()
    .min(1, {message: 'Campo Requerido'})
    .min(3, {message: 'Caracteres Insuficientes'}),
    lastname: z
    .string()
    .min(1, {message: 'Campo Requerido'})
    .min(3, {message: 'Caracteres Insuficientes'}),
    email: z
    .string()
    .email('Correo Invalido'),
    type: z
    .enum(typeEnum, {errorMap: () => ({message: 'Seleccione el tipo'})})
})

export type Contact = z.infer<typeof ContactSchema> & { id: string } 