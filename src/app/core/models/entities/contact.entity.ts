import { singleStoreFactory } from '@core/config/single-store';

export interface Contact_m {
  id: string;
  name: string;
  email: string;
  phone: number;
  isFavorite: boolean;
  createdAt: string;
}

export const Entity_Contact = singleStoreFactory<Contact_m>();
