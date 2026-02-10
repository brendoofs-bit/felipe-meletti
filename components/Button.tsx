import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-sm transition-all duration-300 font-semibold uppercase tracking-wider text-sm";
  const widthStyles = fullWidth ? "w-full" : "";
  
  const variants = {
    primary: "gold-gradient text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;