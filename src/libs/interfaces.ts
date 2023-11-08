export interface Images {
   id : string; 
  accentColor: string;
  contentSize: string;
  contentUrl: string;
  datePublished: string;
  encodingFormat: string;
  height: number;
  hostPageDiscoveredDate: string;
  hostPageDisplayUrl: string;
  hostPageDomainFriendlyName: string;
  hostPageFavIconUrl: string;
  hostPageUrl: string;
  imageId: string;
  imageInsightsToken: string;
  insightsMetadata: {
    availableSizesCount: number;
    pagesIncludingCount: number;
  };

  isFamilyFriendly: boolean;
  name: string;
  thumbnail: {
    height: number;
    width: number;
  };
  thumbnailUrl: string;
  webSearchUrl: string;
  width: string;
}

export interface ImageCardProps {
  height: number;
  width: number;
  thumbnailUrl: string;
  name: string;
  id: string;
  hostPageUrl: string;
}
