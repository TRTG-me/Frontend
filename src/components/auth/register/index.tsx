import React from 'react'
import { TextField, Button, Typography} from '@mui/material'
import { IPropsRegister } from '../../../common/types/auth'


const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const{setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props

    return (

        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваш имя' onChange={(e)=> setFirstName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username' onChange={(e)=> setUsername(e.target.value)} />
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e)=> setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={(e)=> setPassword(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Repeat password" variant="outlined" placeholder='Повторите ваш пароль' onChange={(e)=> setRepeatPassword(e.target.value)}/>
            <Button type="submit" sx={{ fontFamily: 'Popins', marginTop: 2, marginBottom: 2, width: '60%', marginLeft: 'auto', marginRight: 'auto' }} variant="contained">Регистрация</Button>
            <Typography variant="body1" textAlign='center' sx={{ fontFamily: 'Popins' }}>У вас есть аккаунт?<span className='incitingText' onClick={() => navigate('/login')}>Login</span></Typography>
        </>

    )
}

export default RegisterPage