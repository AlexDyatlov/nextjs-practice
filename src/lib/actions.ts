'use server';

import { revalidatePath } from 'next/cache';

import { sendMail } from '@/lib/mail';

import { State, fromErrorToFormState, sendMessageSchema, toFormState } from '@/lib/utils/toFormState';

export async function sendContactForm(prevState: State | null, formData: FormData): Promise<State> {
  try {
    const data = sendMessageSchema.parse({
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
}
