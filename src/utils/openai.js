

// MOCK OpenAI (NO BILLING, NO API KEY)

const openai = {
  chat: {
    completions: {
      create: async () => {
        return {
          choices: [
            {
              message: {
                content:
                  "Inception, Interstellar, The Dark Knight, Tenet, Avatar",
              },
            },
          ],
        };
      },
    },
  },
};

export default openai;









/*import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai; */