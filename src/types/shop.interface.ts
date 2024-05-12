import { IDisplayAssets } from './display_assets.interface.ts';
import { IPrice } from './price.interface.ts';
import { IRarity } from './rarity.interface.ts';
import { IBanner } from './banner.interface.ts';
import { IGranted } from './granted.interface.ts';

export interface IShop {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  devName: string;
  displayAssets: IDisplayAssets[];
  firstReleaseDate: string;
  previousReleaseDate: string;
  giftAllowed: true;
  buyAllowed: true;
  price: IPrice;
  rarity: IRarity;
  series: string;
  banner: IBanner;
  offerTag: string;
  granted: IGranted[];
}
