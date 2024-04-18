'use client';

import { useState } from 'react';
import clsx from 'clsx';

import SvgIcon from '@/_ui/svgIcon';

interface InputProps {
  tag?: 'input' | 'textarea';
  name: string;
  label: string;
  type?: 'text' | 'email';
  placeholder?: string;
  initValue?: string;
  append?: boolean;
  clearBth?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({
  tag = 'input',
  name,
  label,
  type = 'text',
  placeholder,
  initValue,
  append = true,
  clearBth = true,
  disabled,
  error,
  errorText,
  onChange
}: InputProps) {
  const TagName = tag;
  const [value, setValue] = useState(initValue || '');
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={clsx('input', {
        'input--textarea': tag === 'textarea',
        _active: value.length || placeholder,
        _focus: focused,
        _error: error,
        _disabled: disabled
      })}
    >
      <label className="input__label" htmlFor={name}>
        <span className="input__label-text">{label}</span>
      </label>
      <div className="input__wrapper">
        <div className="input__item">
          <div className="input__field">
            <TagName
              className="input__control"
              type={type}
              inputMode={type}
              name={name}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              id={name}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
            />
          </div>
          {append && (
            <div className="input__append">
              {clearBth && (
                <button
                  type="button"
                  className="input__btn input__btn--clear"
                  disabled={disabled}
                  onClick={() => setValue('')}
                  aria-label="Очистить поле"
                >
                  <SvgIcon name="close" size="20" aria-hidden="true" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {error && errorText && <span className="message input__message input__message--error">{errorText}</span>}
    </div>
  );
}
