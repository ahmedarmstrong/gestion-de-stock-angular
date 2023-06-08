import { ArticleDto } from "./article";

export interface LigneCommandeClientDto {
    id?: number;
    article?: ArticleDto;
    quantite?: number;
    prixUnitaire?: number;
  }
  