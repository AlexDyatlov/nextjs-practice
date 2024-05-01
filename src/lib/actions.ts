'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { FormState, fromErrorToFormState, toFormState } from '@/lib/utils/toFormState';

import { sendMail } from '@/lib/mail';

const createMessageSchema = z.object({
  name: z.string().trim().min(1, 'Поле обязательно для заполнения'),
  email: z.string().email('Некорректный email адрес'),
  subject: z.string().trim().min(1, 'Поле обязательно для заполнения'),
  message: z.string().trim().min(1, 'Поле обязательно для заполнения')
});

export const sendContactForm = async (formState: FormState, formData: FormData) => {
  try {
    const data = createMessageSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    });

    await sendMail({
      ...data
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }

  revalidatePath('/');

  return toFormState('success', 'Сообщение отправлено!');
};
