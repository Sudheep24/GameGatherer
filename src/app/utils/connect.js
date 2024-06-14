import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  try {
    prisma = new PrismaClient();
  } catch (error) {
    console.error('Error initializing Prisma client in production:', error);
    // Handle the error appropriately, e.g., terminate the application or provide fallback behavior
    process.exit(1);
  }
} else {
  if (!global.prisma) {
    try {
      global.prisma = new PrismaClient();
    } catch (error) {
      console.error('Error initializing Prisma client in development:', error);
      // Handle the error appropriately, e.g., terminate the application or provide fallback behavior
      process.exit(1);
    }
  }
  prisma = global.prisma;
}

export default prisma;
