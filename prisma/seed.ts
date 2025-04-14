import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.vehicle.deleteMany();

  await prisma.vehicle.createMany({
    data: [
      {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2020,
        cor: 'Preto',
        preco: 50000,
        vendido: false,
        cpfComprador: null,
        dataVenda: null,
      },
      {
        marca: 'Chevrolet',
        modelo: 'Astra',
        ano: 2020,
        cor: 'Preto',
        preco: 22500,
        vendido: false,
        cpfComprador: null,
        dataVenda: null,
      },
      {
        marca: 'Chevrolet',
        modelo: 'Onix',
        ano: 2022,
        cor: 'Branco',
        preco: 44000,
        vendido: false,
        cpfComprador: null,
        dataVenda: null,
      },
      {
        marca: 'Volkswagen',
        modelo: 'Gol',
        ano: 2019,
        cor: 'Azul',
        preco: 30000,
        vendido: false,
        cpfComprador: null,
        dataVenda: null,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
