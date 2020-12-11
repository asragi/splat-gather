import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Callbacks, InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const callbacks: Callbacks = {
  signIn: async (user, account, metadata) => {
    if (!metadata || !metadata.ok) return false;
    const { name, id, email, image_24, image_32, image_48, image_72, image_192, image_512 } = metadata.user;
    console.log(`${name}:${id}`);
    return true;
  }
};

const options: InitOptions = {
  providers: [
    Providers.Slack({
      clientId: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  callbacks
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
