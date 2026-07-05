import { apiFetch } from './client';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  await apiFetch('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
