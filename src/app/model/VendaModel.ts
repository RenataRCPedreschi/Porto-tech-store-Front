import { UserModel } from './UserModel';
import { ProdutoModel } from "./ProdutoModel";

export class VendaModel{
  id!:number;
  produto!:ProdutoModel;
  idCarrinho!:number;
  qtdeProduto!:number;
  formaPagamento!:string;
  usuario!:UserModel;
  nomeProduto!:string;
  total!:number | string;
  createdDateProduto!:Date | string;

}
