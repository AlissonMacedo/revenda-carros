import { Decimal } from '@prisma/client/runtime/library';

export class VehicleEntity {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: Decimal;
  vendido: boolean;
  cpfComprador: string | null;
  dataVenda: Date | null;

  createdAtDate: Date;
  updatedAtDate: Date;

  constructor(
    id: string,
    marca: string,
    modelo: string,
    ano: number,
    cor: string,
    preco: Decimal,
    vendido: boolean,
    cpfComprador: string | null,
    dataVenda: Date | null,
  ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
    this.vendido = vendido || false;
    this.cpfComprador = cpfComprador || null;
    this.dataVenda = dataVenda || null;

    this.createdAtDate = new Date();
    this.updatedAtDate = new Date();
  }
}
