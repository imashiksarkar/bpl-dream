import { ButtonHTMLAttributes, ReactNode } from 'react'

const variants = {
  primary: 'bg-white',
  secondary: 'bg-lime-300',
  gradient: 'bg-gradient-to-r from-rose-400 to-yellow-400',
} as const

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
  rounded?: boolean
  outlined?: boolean
  className?: string
  variant?: keyof typeof variants
  rest?: any
}

const Button = ({
  children,
  rounded = false,
  outlined = false,
  variant = 'primary',
  className = '',
  ...rest
}: IProp) => {
  const calculatedClass = `
  py-[14px] px-5 font-bold
  ${outlined && 'outline outline-2 outline-white outline-offset-8'}
  ${rounded && 'rounded-xl'}
  ${variants[variant]}
  ${className}
  `

  return (
    <button {...rest} className={calculatedClass}>
      {children}
    </button>
  )
}

export default Button
