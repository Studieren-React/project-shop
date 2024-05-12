import { IUpdate } from './update.interface.ts';
import { IShop } from './shop.interface.ts';

export interface IResponse {
  result: true;
  fullShop: true;
  lastUpdate: IUpdate;
  currentRotation: string;
  nextRotation: string;
  carousel: string;
  specialOfferVideo: string;
  customBackground: string;
  shop: IShop[];
}
