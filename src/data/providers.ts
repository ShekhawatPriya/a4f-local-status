
import { Provider } from '@/types';

// Sample data for illustrative purposes
export const providers: Provider[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    routes: [
      {
        name: 'Chat Completion',
        isWorking: true,
      },
      {
        name: 'Text to Speech',
        isWorking: false,
        details: 'Service is currently experiencing high latency. Our team is investigating the issue.'
      },
      {
        name: 'Speech to Text',
        isWorking: true,
      }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    routes: [
      {
        name: 'Chat Completion',
        isWorking: true,
      },
      {
        name: 'Image Generation',
        isWorking: true,
      },
      {
        name: 'Text to Speech',
        isWorking: true,
      },
      {
        name: 'Speech to Text',
        isWorking: false,
        details: 'API authentication issues detected. A fix is being deployed and should be resolved within 30 minutes.'
      }
    ]
  },
  {
    id: 'google',
    name: 'Google AI',
    routes: [
      {
        name: 'Text Generation',
        isWorking: true,
      },
      {
        name: 'Chat Completion',
        isWorking: false,
        details: 'Service temporarily unavailable due to scheduled maintenance. Expected to be back online at 15:00 UTC.'
      }
    ]
  },
  {
    id: 'stability',
    name: 'Stability AI',
    routes: [
      {
        name: 'Image Generation',
        isWorking: true,
      }
    ]
  },
  {
    id: 'replicate',
    name: 'Replicate',
    routes: [
      {
        name: 'Image Generation',
        isWorking: true,
      },
      {
        name: 'Text Generation',
        isWorking: false,
        details: 'We are experiencing unexpected downtime. Our engineers are working to restore service as quickly as possible.'
      }
    ]
  },
  {
    id: 'azure',
    name: 'Azure OpenAI',
    routes: [
      {
        name: 'Chat Completion',
        isWorking: true,
      },
      {
        name: 'Text Embedding',
        isWorking: true,
      }
    ]
  }
];
