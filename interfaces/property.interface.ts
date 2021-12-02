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
  title?: any;
  url: string;
  orderIndex: number;
  nimaScore: number;
  main: boolean;
}

export interface Photo {
  id: number;
  externalID: string;
  title?: any;
  url: string;
  orderIndex: number;
  nimaScore: number;
}

export interface Image2D {
  id: number;
}

export interface Image3D {
  id: number;
}

export interface Image {
  id: number;
  externalID: string;
  orderIndex: number;
  image2D: Image2D;
  image3D: Image3D;
  label?: any;
}

export interface PlaceholderImage {
  id: number;
}

export interface Model {
  id: number;
  externalID: string;
  orderIndex: number;
  placeholderImage: PlaceholderImage;
  label?: any;
  modelURL?: any;
}

export interface FloorPlan {
  id: number;
  typeIdentifier: string;
  typeIdentifierValue: string;
  images: Image[];
  models: Model[];
}

export interface Amenity2 {
  text: string;
  text_l1: string;
  value: string;
  rank: number;
  slug: string;
  format: string;
  externalID: number;
}

export interface Amenity {
  externalGroupID: number;
  groupRank: number;
  text: string;
  text_l1: string;
  amenities: Amenity2[];
}

export interface PhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  proxyMobile: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
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
  status: string;
  type: string;
  eligible: boolean;
  comment?: any;
  updatedAt: number;
  verifiedAt: number;
  visitedAt?: any;
}

export interface IPropertyDetails {
  id: number;
  objectID: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  geography: Geography;
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber: string;
  title: string;
  title_l1: string;
  description: string;
  description_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  location: Location[];
  category: Category[];
  createdAt: number;
  approvedAt: number;
  updatedAt: number;
  touchedAt: number;
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
  photos: Photo[];
  floorPlans: any[];
  floorPlan: FloorPlan;
  videos: any[];
  panoramas: any[];
  amenities: Amenity[];
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: Agency;
  active: boolean;
  hasExactGeography: boolean;
  verification: Verification;
  isVerified: boolean;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  furnishingStatus: string;
  extraFields?: any;
  type: string;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  hasMatchingFloorPlans: boolean;
}
