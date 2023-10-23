import { Endereco } from "./endereco";

export interface Aluno {
    nome: string;
    email: string;
    descricao: string;
    nivel: string;
    usuarioAtivo: boolean;
    senha?: string; //opcional
    endereco: Endereco;
}
