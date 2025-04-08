import { Provider } from '@/types';

export const providers: Provider[] = [
  {
    id: 'provider-1',
    name: 'Provider 1',
    routes: [
      {
        name: 'Text to Speech',
        isWorking: true, // Set as working per your request
        details: 'Operational', // Optional detail
      },
    ],
  },
  // All other providers removed
];
