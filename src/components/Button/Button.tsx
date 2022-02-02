import { ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children: string | ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, loading, disabled, onClick }: ButtonProps) => {
  return (
    <button type="submit" disabled={disabled || false} className="button" onClick={onClick}>
      {loading ? (
        <>
          <i className="material-icons">loading</i>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
