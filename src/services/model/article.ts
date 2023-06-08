import { CategoryDto } from "./categoryDto";

export interface ArticleDto {
  id?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
}
