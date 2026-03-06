import styles from "./styles.module.css"
import {useForm} from 'react-hook-form'
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const userSchema = z.object({
    name: z.string().nonempty().regex(/^\D+$/, {message: '* Não pode ter números'}),
    username: z.string().nonempty('* O usuário não pode ser vazio').refine(value => value.trim().length > 0, { message: '* Não pode ter espaços' }).regex(/^[a-zA-Z0-9]+$/, {message: '* Não pode ter acentos'}),
    email: z.string().nonempty('* O E-mail não pode ser vazio').refine(value => z.string().safeParse(value).success, {message: '* O e-mail não é válido'}),
    password: z.string().nonempty('Senha não pode ser vazia').min(6, "A senha deve ter no mínimo 6 caracteres").regex(/^\S+$/, "A senha Não pode conter espaços"),
    confirmPassword: z.string().nonempty('A confirmação de senha não pode ser vazia')
}).refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não cincidem',
    path: ['confirmPassword']
})

type User = z.infer<typeof userSchema>

export default function RegisterPage() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    
    function createUser(data: User) {
        try{
            console.log(data)
            throw new Error('Erro ao criar usuário')
            reset()
        } catch {
            setError('root', {
                message: "Erro ao criar usuário"
            })
        }
    }
    return(
        <>  
            <section className={styles.background}>
                <div  className={styles.redBox}>
                    <h2 className={styles.titulo}>Registre-se</h2>
                   
                    <form onSubmit={handleSubmit(createUser)}>
                        
                        <div className={styles.allInputs}>
                            <input type="text" placeholder="Nome"
                            {...register('name')}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                            <input type="text" placeholder="Nome de Usuário"
                            {...register('username')}
                            />
                            {errors.username && <span>{errors.username.message}</span>}
                            <input type="email" placeholder="E-mail" 
                            {...register('email')}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                            <input type="password" placeholder="Senha"
                            {...register('password')}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                            <input type="password" placeholder="Confirmar senha"
                            {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                        </div>

                        <button className={styles.button}>{isSubmitting ? 'CARREGANDO...' : 'REGISTRAR'}</button>
                        {errors.root && <span>{errors.root.message}</span>}

                    </form> 
                </div>
            </section>
        </>
    )
}