import { ZodError, z } from 'zod';

export const sendMessageSchema = z.object({
  name: z.string().trim().min(1, 'Поле обязательно для заполнения'),
  email: z.string().email('Некорректный email адрес'),
  subject: z.string().trim().min(1, 'Поле обязательно для заполнения'),
  message: z.string().trim().min(1, 'Поле обязательно для заполнения')
});

export type sendMessageSchemaType = z.infer<typeof sendMessageSchema>;

export type State =
  | { status: 'success'; message: string }
  | {
      status: 'error';
      message: string;
      errors?: {
        path: string;
        message: string;
      }[];
    }
  | null;

export const fromErrorToFormState = (e: unknown) => {
  if (e instanceof ZodError) {
    return {
      status: 'error' as const,
      message: 'Неверные данные формы',
      errors: e.issues.map(issue => ({
        path: issue.path.join('.'),
        message: `Server validation: ${issue.message}`
      }))
    };
  }

  return {
    status: 'error' as const,
    message: 'Что-то пошло не так. Пожалуйста попробуйте снова.'
  };
};

export const toFormState = (status: 'success', message: string) => {
  return {
    status,
    message
  };
};
