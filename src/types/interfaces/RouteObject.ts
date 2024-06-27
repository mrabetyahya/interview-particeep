import { ReactElement } from 'react';
import { RouteIdEnum } from '../../config/enums/routes.enum';

export default interface RouteObject {
  id?: string;
  path: RouteIdEnum;
  element?: ReactElement;
  children?: RouteObject[];
}
