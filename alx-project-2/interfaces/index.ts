// Define a general structure for address data
export interface Address {
  street?: string;
  city: string;
  country: string;
}

// Define a structure for a property listing
export interface PropertyListing {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  address: Address;
  
}
