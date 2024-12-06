import React from 'react';

export interface KSLButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const KSLButton: React.FC<KSLButtonProps> = ({ children, type='button', onClick, className = '', disabled = false }) => {
  const buttonClass = `${className} ${disabled ? 'button--disabled' : ''}`;
  
  return (
    <button className={`button ${buttonClass}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default KSLButton;
