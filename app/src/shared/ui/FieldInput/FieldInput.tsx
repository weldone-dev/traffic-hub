// shared/ui/FieldInput.tsx
'use client'
import { useState, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { EyeOffIcon } from '@/shared/icons' // или замени путь, если нужно

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  error: string;
  mode?: 'default' | 'password';
}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (
    {
      label,
      className,
      error,
      startContent,
      endContent,
      onFocus,
      onBlur,
      mode = 'default',
      type,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = mode === 'password'

    const containerClasses = twMerge(
      clsx(
        'relative flex bg-steel-blue items-center w-full px-4 py-3 rounded-[12px] transition-all duration-200 border',
        {
          'ring-1 ring-primary-blue border-primary-blue': isFocused && !error,
          'border-red-500': error && !isFocused,
          'ring-1 ring-red border-red': error,
          'bg-gray-100 cursor-not-allowed': props.disabled,
          'border-transparent': !error && !isFocused,
        }
      ),
      className
    )

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    return (
      <div className="w-full">
        <div className="flex flex-wrap items-baseline">
          {label && (
            <label className="block mb-2 text_base font-medium text-white/60">
              {label}
            </label>
          )}

          {error && (
            <p className="text_base ml-[10px] text-red transition-all duration-200">
              {error}
            </p>
          )}
        </div>

        <div className={containerClasses}>
          {startContent && (
            <span className="mr-[19px] text-white">{startContent}</span>
          )}

          <input
            ref={ref}
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            className={clsx(
              'w-full bg-transparent outline-none text_button text-white placeholder:text-gray-400',
              {
                'cursor-not-allowed': props.disabled,
              }
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="ml-2 text-white outline-none"
              tabIndex={-1}
            >
              <EyeOffIcon
                className={clsx(
                  'transition',
                  showPassword ? 'opacity-40' : ''
                )}
              />
            </button>
          ) : (
            endContent && <span className="ml-2 text-white">{endContent}</span>
          )}
        </div>
      </div>
    )
  }
)

FieldInput.displayName = 'FieldInput'
