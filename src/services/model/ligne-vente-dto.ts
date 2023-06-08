import { ArticleDto } from "./article";
import { VentesDto } from "./vente-dto";

export interface LigneVenteDto {
    id?: number;
    vente?: VentesDto;
    article?: ArticleDto;
    quantite?: number;
    prixUnitaire?: number;
  }
  