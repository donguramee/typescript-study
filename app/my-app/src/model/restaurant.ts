export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = { city: string; detail: string; zipCode: number };

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithOutZipCode = Omit<Address, "zipCode">; //Omit을 이용해서 zipCode의 타입만 뺀 타입

export type RestaurantOnlyCategory = Pick<Restaurant, "category">; // Pick을 이용해서 Restaurant에서 카테고리의 타입만 가져오기
