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

export interface CardProps{
  title: string;
  content: string;
}

export interface PostModalProps{
  isOpen: boolean;
  onClose: () => void;
  onSubmit : (data: {title: string; content: string}) => void;
}

export interface ButtonProps{
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  onClick?: () => void;

}

export interface PostProps{
  title: string;
  content: string;
  userId: number;
}

export interface UserProps{
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
};
}