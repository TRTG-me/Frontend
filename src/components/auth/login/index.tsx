import React, { Fragment } from 'react'
import { TextField, Button, Typography} from '@mui/material'
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin>= (props:IPropsLogin): JSX.Element => {
    const {navigate, register, errors}=props;
    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите вашлогин и пароль</Typography>
            <TextField 
            error={!!errors.email}
            fullWidth={true} 
            margin='normal' 
            label="Email" 
            variant="outlined" 
            helperText={errors.email ? `${errors.email.message}`: ''}
            placeholder='Введите ваш email'
            {...register('email', {
                required: 'Это обязательное поле',
                pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/


            })}
            />

            <TextField 
            error={!!errors.password}
            type ='password' 
            fullWidth={true} 
            margin='normal' 
            label="Password" 
            variant="outlined" 
            helperText={errors.password ? `${errors.password.message}`: ''}
            placeholder='Введите ваш пароль'
            {...register('password', {
                required: 'Это обязательное поле',
                minLength: 3
            })}
            />

            <Button type="submit" sx={{fontFamily:'Poppins',marginTop: 2, marginBottom: 2, width: '60%', marginLeft: 'auto', marginRight: 'auto'}} variant="contained">Войти</Button>
            <Typography variant="body1" textAlign='center' sx={{fontFamily: 'Poppins'}}>У вас нет аккаунта?<span className='incitingText' onClick={()=>navigate('/register')}>Регистрация</span></Typography>
        </>
    )
}

export default LoginPage
