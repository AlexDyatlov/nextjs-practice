import clsx from 'clsx';

import SvgIcon from '@/_ui/svgIcon';

interface Button {
  className?: string;
  children?: string | React.ReactNode;
  text?: string;
  type?: 'button' | 'submit';
  variant?: 'base' | 'primary';
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  className,
  children,
  text,
  variant = 'base',
  type = 'button',
  isLoading,
  disabled
}: Button) {
  return (
    <button
      className={clsx('btn', className, {
        'btn--base': variant === 'base',
        _disabled: disabled,
        _loading: isLoading
      })}
      type={type}
      disabled={disabled || isLoading}
    >
      <span className="btn__text">{text}</span>
      {children}

      {isLoading && (
        <span className="btn__loader loader">
          <SvgIcon className="loader__circle" name="loader" size="24" />
        </span>
      )}
    </button>
  );
}
