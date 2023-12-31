import { Category } from "../categories/interface";

export interface Product {
    profileImg: null | string | undefined;
    id: number;
    name:       string;
    basePrice:  number;
    amount:     number;
    active:    boolean;
    category:   Category | null;
}