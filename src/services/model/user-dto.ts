import { RolesDto } from "./roleDto";

export interface UserProfile {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateDeNaissance?: number;
  moteDePasse?: string;
  photo?: string;
    roles?: Array<RolesDto>;
  }