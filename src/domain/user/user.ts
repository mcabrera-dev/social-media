export interface User {
  id: 1;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  address: Address
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  id: string;
  img: string;
  name: string;
  author: string;
  summary: string;
}




