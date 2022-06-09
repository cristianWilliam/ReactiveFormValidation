export interface IPessoa {
  nome: string
  sobrenome: string,
  nacionalidade?: string,
  idade?: number,
  dataNascimento?: Date | null,
  endereco: IEndereco
}

interface IEndereco {
  rua: string,
  bairro: string,
  estado: string,
  cidade: string,
  cep: string,
  complemento?: string
}