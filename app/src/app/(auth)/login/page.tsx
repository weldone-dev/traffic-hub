// app/login/page.tsx
'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

import {
  EmailIcon,
  EnterIcon,
  LockIcon,
  NewUserIcon,
  PersonIcon
} from '@/shared/icons'
import { FieldInput, Button } from '@/shared/ui'

type LoginForm = {
  login: string
  password: string
}

export default function LoginPage () {
  const router = useRouter()
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    setServerError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if (res.ok) {
      router.push('/i')
    } else {
      setServerError(result.error || 'Ошибка авторизации')
    }
  }

  return (
    <div className='flex items-center justify-center bg-bg p-[36px] my-[100px] text-white'>
      <div className='card w-full max-w-[846px] bg-navy p-8'>
        <h1 className='text_title-second text-center mb-[36px]'>
          Добро пожаловать
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[36px]'>
      
          <FieldInput
            label='Логин'
            placeholder='Введите логин'
            startContent={<PersonIcon />}
            {...register('login', {
              required: 'Логин обязателен',
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: 'Только латиница и цифры'
              }
            })}
            error={errors.login?.message || ''}
          />

          <FieldInput
            label='Пароль'
            startContent={<LockIcon />}
            placeholder='Введите пароль'
            mode='password'
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: { value: 8, message: 'Минимум 8 символов' }
            })}
            error={errors.password?.message || ''}
          />

          <div className='flex justify-between'>
             <Link href='/register' className='text_base text-white/60 hover:underline'>
              Регистрация
            </Link>
            <Link href='/forgot-password' className='text_base text-white/60 hover:underline'>
              Забыли пароль?
            </Link>
          </div>

          {serverError && (
            <p className='text-sm text-red-500 text-center'>{serverError}</p>
          )}

          <Button
            as='button'
            type='submit'
            disabled={isSubmitting}
            startContent={<EnterIcon className='mt-[1px]'/>}
            className='w-full'
          >
            {isSubmitting ? 'Входим…' : 'Войти'}
          </Button>
        </form>
      </div>
    </div>
  )
}
