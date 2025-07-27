import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline' | 'glass' | 'neon'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  animation?: 'none' | 'bounce' | 'pulse' | 'wiggle' | 'spin'
  className?: string
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = 'md',
  shadow = 'sm',
  animation = 'none',
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }
  
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl'
  }
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 border-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 border-gray-300',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus:ring-purple-500 border-transparent',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 focus:ring-white/50',
    neon: 'bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]'
  }
  
  const animationClasses = {
    none: '',
    bounce: 'hover:animate-bounce',
    pulse: 'hover:animate-pulse',
    wiggle: 'hover:animate-wiggle',
    spin: 'hover:animate-spin'
  }
  
  const widthClasses = fullWidth ? 'w-full' : ''

  return (
    <button 
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${roundedClasses[rounded]}
        ${shadowClasses[shadow]}
        ${animationClasses[animation]}
        ${widthClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      
      {/* Left Icon */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2 flex items-center">
          {icon}
        </span>
      )}
      
      {/* Button Content */}
      <span className="flex items-center">
        {children}
      </span>
      
      {/* Right Icon */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2 flex items-center">
          {icon}
        </span>
      )}
    </button>
  )
}