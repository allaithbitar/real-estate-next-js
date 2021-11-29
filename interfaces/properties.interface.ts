export interface Geoloc {
  lat: number;
  lng: number;
}

export interface Geography {
  lat: number;
  lng: number;
}

export interface Location {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
}

export interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  nameSingular: string;
  nameSingular_l1: string;
}

export interface CoverPhoto {
  id: number;
  externalID: string;
  title: string;
  url: string;
  orderIndex: number;
  nimaScore: number;
  main: boolean;
}

export interface PhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  proxyMobile: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
  proxyPhone: string;
}

export interface License {
  number: string;
  authority: string;
}

export interface Logo {
  id: number;
  url: string;
}

export interface Agency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  externalID: string;
  product: string;
  productScore: number;
  licenses: License[];
  logo: Logo;
  slug: string;
  slug_l1: string;
  tier: number;
}

export interface Verification {
  updatedAt: number;
  eligible: boolean;
  status: string;
  verifiedAt?: number;
}

export interface ReferenceNumber {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface ExternalID {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Name {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Agency2 {
  name: Name;
}

export interface Keyword {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  referenceNumber: ReferenceNumber;
  title: Title;
  externalID: ExternalID;
  agency: Agency2;
  keywords: Keyword[];
}

export interface CoverVideo {
  externalID: number;
  title?: any;
  host: string;
  url: string;
  orderIndex: number;
}

export interface IProperty {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: Geoloc;
  geography: Geography;
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber: string;
  title: string;
  title_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  location: Location[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  coverPhoto: CoverPhoto;
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: Agency;
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: Verification;
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  floorPlanID?: number;
  furnishingStatus: string;
  extraFields?: any;
  type: string;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  objectID: string;
  _highlightResult: HighlightResult;
  coverVideo: CoverVideo;
}
