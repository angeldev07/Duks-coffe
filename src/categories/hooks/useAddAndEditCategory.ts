import { useCallback, useState } from "react";
import { useAddCategoryMutation, useUpdateCategoryMutation } from "../service";
import { useAppDispatch } from "../../store";
import { useModal } from "./useModal";
import { Category } from "../interface";

export type option = "create" | "edit";

export const useAddAndEditCategory = (option: option) => {
  const [error, setError] = useState(false);
  const { open, handleAccept, handleClose, handleOpenModal } = useModal();
  const [addCategory] = useAddCategoryMutation();
  const [editCategory] = useUpdateCategoryMutation();

  const dispath = useAppDispatch();

  const handleAddCategory = useCallback((category: Category) => {
    addCategory(category)
      .unwrap()
      .then((res) => {
        dispath({
          type: "categories/addNewCategory",
          payload: res,
        });
        handleOpenModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditCategory = useCallback((category: Category) => {
    editCategory(category)
      .unwrap()
      .then(() => {
        dispath({
          type: "categories/updateCategory",
          payload: category,
        });
        handleOpenModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e: FormData) => {
    const data = Object.fromEntries(e);

    if (data.name === "") {
      setError(true);
      return;
    }

    const category:Category = {
      name: data.name.toString(),
      active: !!data.activate,
    };

    if (option === "create") {
      handleAddCategory(category);
      return;
    } else {
      category['id']= Number(data.id);
      handleEditCategory(category);
    }
  };

  return {
    error,
    onSubmit,
    open,
    handleAccept,
    handleClose,
  };
};
