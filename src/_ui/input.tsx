'use client';

import { useState } from 'react';
import clsx from 'clsx';

import SvgIcon from '@/_ui/svgIcon';
import Message from '@/_ui/message';

import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputProps<TFormValues extends FieldValues> = {
  tag?: 'input' | 'textarea';
  name: Path<TFormValues>;
  label: string;
  type?: 'text' | 'email';
  placeholder?: string;
  append?: boolean;
  clearBth?: boolean;
  disabled?: boolean;
  errors?: FieldErrors;
  value?: string;
  register?: UseFormRegister<TFormValues>;
  onClear?: () => void;
};

const Input = <TFormValues extends FieldValues>({
  tag = 'input',
  name,
  label,
  type = 'text',
  placeholder,
  append = true,
  clearBth = true,
  disabled,
  errors,
  value,
  register,
  onClear
}: InputProps<TFormValues>) => {
  const TagName = tag;
  const errorMessage = errors ? errors?.[name]?.message?.toString() : undefined;
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={clsx('input', {
        'input--textarea': tag === 'textarea',
        _active: value?.length || placeholder,
        _focus: focused,
        _error: errorMessage,
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
              {...(register && register(name))}
              className="input__control"
              type={type}
              inputMode={type}
              name={name}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
          {append && (
            <div className="input__append">
              {clearBth && (
                <button
                  type="button"
                  className="input__btn input__btn--clear"
                  disabled={disabled}
                  onClick={onClear}
                  aria-label="Очистить поле"
                >
                  <SvgIcon name="close" size="20" aria-hidden="true" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {errorMessage && <Message className="input__message" text={errorMessage} tag="span" status="error" />}
    </div>
  );
};

export default Input;
