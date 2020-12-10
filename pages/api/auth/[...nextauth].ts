import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
  providers: [
    Providers.Slack({
      clientId: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
