import { ArticleDto } from "./article";
import { CommandeFournisseurDto } from "./commande-four-dto";

export interface LigneCommandeFournisseurDto {
    id?: number;
    article?: ArticleDto;
    commandeFournisseur?: CommandeFournisseurDto;
    quantite?: number;
    prixUnitaire?: number;
  }
  