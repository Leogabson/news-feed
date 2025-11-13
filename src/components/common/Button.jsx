const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed active:scale-95
  `;

  const variants = {
    primary: `
      bg-primary text-white hover:bg-primary-dark 
      focus:ring-primary shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-gray-200 text-text-primary hover:bg-gray-300 
      focus:ring-gray-400
    `,
    outline: `
      bg-transparent border-2 border-primary text-primary 
      hover:bg-primary hover:text-white focus:ring-primary
    `,
    ghost: `
      bg-transparent text-text-primary hover:bg-gray-100 
      focus:ring-gray-300
    `,
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm gap-1.5",
    medium: "px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base gap-2",
    large: "px-5 py-3 sm:px-6 sm:py-3.5 text-base sm:text-lg gap-2.5",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
