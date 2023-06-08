import { FournisseurDto } from "./fournisseur-dto";
import { LigneCommandeFournisseurDto } from "./ligne-comm-four-dto";

export interface CommandeFournisseurDto {
    id?: number;
    code?: string;
    dateCommande?: number;
    etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
    fournisseur?: FournisseurDto;
    idEntreprise?: number;
    ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
    commandeLivree?: boolean;
  }
  