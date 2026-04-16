interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[#F6E9D7] text-[#0B2545]',
    accent: 'bg-[#C75A3A] text-white',
    outline: 'border border-[#0B2545] text-[#0B2545] bg-white'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
