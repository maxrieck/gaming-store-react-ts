

export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    category: string;
    quantity?: number;
}


export interface CartState {
    cartItems: Product[]
}


export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface Order {
    id: string;
    userId: string;
    products: {
        productId: string;
        quantity: number;
        price: number;
        title?: string;
    }[];
    totalPrice: number;
    createdAt: Date;
}
