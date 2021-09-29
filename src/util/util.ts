import { HOME_LINK } from './constants';
import { PageLinkInfo } from './types';

export const isNotHomeLink = ({ link }: PageLinkInfo): boolean => link !== HOME_LINK;