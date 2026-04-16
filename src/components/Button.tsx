interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3.5 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#C75A3A] text-white hover:bg-[#B54A2A] focus:ring-[#C75A3A] shadow-sm hover:shadow-md',
    secondary: 'bg-[#F6E9D7] text-[#0B2545] hover:bg-[#EDD9C1] focus:ring-[#F6E9D7]',
    outline: 'border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white focus:ring-[#0B2545]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
