import { PrismaAdapter } from '@auth/prisma-adapter';
import { Prisma } from '@prisma/client';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './connect';

 const authOptions = {
  adapter:PrismaAdapter(prisma),
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export default authOptions;

