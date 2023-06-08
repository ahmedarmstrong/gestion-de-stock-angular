import { CategoryDto } from "./categoryDto";
import { LigneCommandeFournisseurDto } from "./ligne-comm-four-dto";
import { LigneCommandeClientDto } from "./ligne-commande-client-dto";
import { LigneVenteDto } from "./ligne-vente-dto";
import { MvtStkDto } from "./mvt-stk-dto";

export interface Article {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
  ligneVentes?: Array<LigneVenteDto>;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
  mvtStks?: Array<MvtStkDto>;
}
