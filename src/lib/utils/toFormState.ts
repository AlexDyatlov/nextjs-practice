import { ZodError } from 'zod';

export type FormState = {
  status: 'unset' | 'success' | 'error';
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
};

export const initialState: FormState = {
  status: 'unset' as const,
  message: '',
  fieldErrors: {}
};

export const fromErrorToFormState = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      status: 'error' as const,
      message: '',
      fieldErrors: error.flatten().fieldErrors
    };
  } else if (error instanceof Error) {
    return {
      status: 'error' as const,
      message: error.message,
      fieldErrors: {}
    };
  } else {
    return {
      status: 'error' as const,
      message: ' Произошла неизвестная ошибка',
      fieldErrors: {}
    };
  }
};

export const toFormState = (status: FormState['status'], message: string): FormState => {
  return {
    status,
    message,
    fieldErrors: {}
  };
};
