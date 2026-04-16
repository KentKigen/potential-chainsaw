interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
}

export function FormField({ label, multiline = false, className = '', ...props }: FormFieldProps) {
  const baseStyles = 'w-full px-4 py-3 bg-[#F6E9D7] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75A3A] focus:border-transparent transition-all duration-200';

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#0B2545] font-medium">{label}</label>
      {multiline ? (
        <textarea
          className={`${baseStyles} ${className} min-h-32 resize-y`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`${baseStyles} ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
