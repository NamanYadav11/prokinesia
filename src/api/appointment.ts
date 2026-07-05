import { apiFetch } from './client';

export type AppointmentPayload = {
  name: string;
  phone: string;
  email: string;
  doctor: string;
  service: string;
  slot: string;
  date: string;
};

export async function bookAppointment(payload: AppointmentPayload): Promise<void> {
  await apiFetch('/appointment', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
