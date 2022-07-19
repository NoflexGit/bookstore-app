import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-lg bg-indigo-500 p-3 text-xs text-white transition-colors hover:bg-indigo-400"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
