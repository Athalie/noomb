import dayjs from "dayjs";

type TGeoLocation = {
  city: string;
  country: string;
};

type TAuthor = {
  name: string;
  surname: string;
};

export interface IAd {
  img: string;
  title: string;
  geoLocation: TGeoLocation;
  price: string;
  author: TAuthor;
  publicationDate: dayjs.Dayjs;
  raiting: number;
  reviewsAmount: number;
}
