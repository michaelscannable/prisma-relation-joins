import prisma from './lib/prisma';
const user = await prisma.user.findFirst();

if (!user) throw new Error('No user found');

await await prisma.product.findMany({
  where: {
    userId: user.id,
  },
  include: {
    inspections: {
      orderBy: {
        createdAt: 'desc',
      },
    },
  },
});
