import { Product } from "../products/interface";

export interface Stast {
    productsWithouCategoriesDTOList: Product[],
    productsLowStock: Product[],
    productsDeactivate: Product[]
}