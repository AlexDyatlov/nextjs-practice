'use client';

import { useFormState } from 'react-dom';
import { useEffect, useTransition } from 'react';
import { FieldPath, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@/_ui/input';
import Button from '@/_ui/button';
import Message from '@/_ui/message';

import { sendContactForm } from '@/lib/actions';
import { State, sendMessageSchema, sendMessageSchemaType } from '@/lib/utils/toFormState';

export default function SendMessageForm() {
  const {
    register,
    reset,
    watch,
    setValue,
    setError,
    formState: { errors, isValid }
  } = useForm<sendMessageSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  const [state, formAction] = useFormState<State, FormData>(sendContactForm, null);
  const [isPending, startTransition] = useTransition();

  const getValueFields = watch();

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === 'error') {
      state.errors?.forEach(error => {
        setError(error.path as FieldPath<sendMessageSchemaType>, {
          message: error.message
        });
      });
    }

    if (state.status === 'success') {
      reset();
    }
  }, [state, setError]);

  const handleClear = (fieldName: FieldPath<sendMessageSchemaType>) => {
    setValue(fieldName, '');
  };

  return (
    <>
      <form className="form" action={formData => startTransition(() => formAction(formData))}>
        <div className="form__item">
          <Input
            name="name"
            label="Имя"
            value={getValueFields.name}
            onClear={() => handleClear('name')}
            register={register}
            errors={errors}
          />
        </div>
        <div className="form__item">
          <Input
            type="email"
            name="email"
            label="Email"
            value={getValueFields.email}
            onClear={() => handleClear('email')}
            register={register}
            errors={errors}
          />
        </div>
        <div className="form__item">
          <Input
            name="subject"
            label="Тема"
            value={getValueFields.subject}
            onClear={() => handleClear('subject')}
            register={register}
            errors={errors}
          />
        </div>
        <div className="form__item">
          <Input
            tag="textarea"
            name="message"
            label="Сообщение"
            value={getValueFields.message}
            onClear={() => handleClear('message')}
            register={register}
            errors={errors}
          />
        </div>
        <Button text="Отправить" type="submit" isLoading={isPending} disabled={!isValid} />
      </form>
      {state && (
        <>
          <Message text={state.message} tag="p" status={state.status} />
          <p>
            Статус: <Message text={state.status} tag="span" status={state.status} />
          </p>
        </>
      )}
    </>
  );
}
