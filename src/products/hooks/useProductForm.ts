import { useState } from "react";
import { Product } from "../interface";
import { Category } from "../../categories/interface";
import { useGetAllCategoryQuery } from "../../categories/service";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../store";
import { useAddProductsMutation } from "../service";
import { addNewProduct} from '../slice'
import { useNavigate } from "react-router-dom";

export const useProductForm = () => {
    const [nameError, setNameError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [category, setCategory] = useState<Category | null | undefined>(null);
    const { data } = useGetAllCategoryQuery();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [addProduct] = useAddProductsMutation();
  
    const getBase64 = (file: File): Promise<string | null> => {
      return new Promise((resolve, reject) => {
        if (!file) {
          reject(null);
          return;
        }
    
        const reader = new FileReader();
    
        reader.onload = () => {
          resolve(reader.result as string);
        };
    
        reader.onerror = (error) => {
          reject(error);
        };
    
        reader.readAsDataURL(file);
      });
    };
  
    const onChange = (e: SelectChangeEvent<string>) => {
      setCategory(
        data?.filter((category) => category.name === e.target.value)[0]
      );
    };
  
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name = e.currentTarget["name"].value;
      const basePrice = e.currentTarget["price"].value;
  
      if (!name) {
        setNameError(true);
      } else {
        setNameError(false);
      }
  
      if (!basePrice) {
        setPriceError(true);
      } else {
        setPriceError(false);
      }
  
      const product: Product = {
        active: e.currentTarget["active"].checked,
        category: category!,
        name,
        amount: 0,
        basePrice: Number(basePrice),
        profileImg: '',
      };
  
      getBase64(e.currentTarget["profileImg"].files[0]).then((res) => {
        product.profileImg = `${res!}`;
        addProduct(product).unwrap().then((res: Product) => {
          dispatch(addNewProduct(product));
          navigate('/backoffice/products');
        })
      })


      
    };

    return {
        nameError,
        priceError,
        category,
        data,
        onChange,
        onSubmit,
    }
}