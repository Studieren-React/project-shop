import { IType } from './type.interface.ts';
import { IRarity } from './rarity.interface.ts';
import { IAdded } from './added.interface.ts';
import { IImages } from './images.interface.ts';
import { IDisplayAssets } from './display_assets.interface.ts';
import { IStyles } from './styles.interface.ts';

export interface IGranted {
  id: string;
  type: IType;
  name: string;
  description: string;
  rarity: IRarity;
  series: string;
  price: 0;
  added: IAdded;
  builtInEmote: string;
  copyrightedAudio: true;
  upcoming: true;
  reactive: true;
  releaseDate: string;
  lastAppearance: string;
  interest: 0;
  images: IImages;
  video: string;
  audio: string;
  gameplayTags: string[];
  apiTags: string[];
  searchTags: string[];
  battlepass: string;
  set: string;
  introduction: string;
  displayAssets: IDisplayAssets[];
  shopHistory: string[];
  styles: IStyles[];
  grants: string[];
  grantedBy: string[];
}
