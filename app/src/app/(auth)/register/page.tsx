'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { FieldInput, Button } from '@/shared/ui'
import { PersonIcon, EmailIcon, LockIcon, NewUserIcon } from '@/shared/icons'
import Link from 'next/link'

interface RegisterFormValues {
  login: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterPage () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>()
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  // Получаем текущее значение пароля для сравнения с подтверждением
  const passwordValue = watch('password', '')

  const onSubmit = async (data: RegisterFormValues) => {
    setServerError(null)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        // Если сервер вернул ошибку, пытаемся прочитать сообщение
        let errorMessage = 'Ошибка сервера'
        try {
          const result = await response.json()
          errorMessage = result.message || result.error || errorMessage
        } catch {
          const text = await response.text()
          errorMessage = text || errorMessage
        }
        setServerError(errorMessage)
      } else {
        // Успех: перенаправляем на /i
        router.push('/i')
      }
    } catch (error: any) {
      setServerError(error.message || 'Ошибка при отправке запроса')
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='card flex w-full max-w-[864px] flex-col items-center justify-center my-[100px] p-[36px] gap-[36px]'>
        <h1 className='mb-[36px] text_title-second font-semibold'>
          Создайте аккаунт
        </h1>
        {serverError && <p className='mb-4 text-red-500'>{serverError}</p>}
        <form
          className='w-full flex flex-col gap-[36px] justify-center items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldInput
            id='login'
            label='Логин'
            startContent={<PersonIcon />}
            placeholder='Введите логин'
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
            id='email'
            label='Почта'
            startContent={<EmailIcon />}
            type='email'
            placeholder='Введите email'
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Неверный формат email'
              }
            })}
            error={errors.email?.message || ''}
          />
          <FieldInput
            id='password'
            label='Пароль'
            startContent={<LockIcon />}
            type='password'
            mode='password'
            placeholder='Введите пароль'
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              }
            })}
            error={errors.password?.message || ''}
          />
          <FieldInput
            id='confirmPassword'
            label='Подтверждение пароля'
            startContent={<LockIcon />}
            type='password'
            mode='password'
            placeholder='Повторите пароль'
            {...register('confirmPassword', {
              required: 'Поле обязательно',
              validate: value =>
                value === passwordValue || 'Пароли должны совпадать'
            })}
            error={errors.confirmPassword?.message || ''}
          />
          <Button
            type='submit'
            disabled={isSubmitting}
            className='max-w-[310px]'
            startContent={<NewUserIcon />}
          >
            Зарегистрироваться
          </Button>
        </form>
        <div className='text_base'>
          Уже зарегистрированы?{' '}
          <Link
            href='/register'
            className='text_base text-primary-blue hover:underline'
          >
            Нажмите сюда
          </Link>
        </div>
      </div>
    </div>
  )
}
