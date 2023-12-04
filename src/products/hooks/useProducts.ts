import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useDeleteProductsMutation, useGetAllProductsQuery } from "../service";
import { useModal } from "../../categories/hooks/useModal";
import { Product } from "../interface";

export const useProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const [deleteProductApi] = useDeleteProductsMutation();
  const { products, selectedProduct } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const deleteModal = useModal();

  const handleOpenDeleteModal = useCallback(
    (product: Product) => () => {
      deleteModal.handleOpenModal(() => {
        dispatch({ type: "products/setSelectedProduct", payload: product });
      });
    },
    [deleteModal, dispatch]
  );

  const handleCloseDeleteModal = useCallback(() => {
    deleteModal.handleClose(() => {
      dispatch({ type: "products/setSelectedProduct", payload: null });
    });
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    deleteProductApi(selectedProduct!.id)
      .unwrap()
      .then(() => {
        deleteModal.handleClose(() => {
          dispatch({
            type: "products/deleteProduct",
            payload: selectedProduct!.id,
          });
        });
      });
  }, [selectedProduct, deleteModal, dispatch, deleteProductApi]);

  useEffect(() => {
    if (products) return;
    if (data) dispatch({ type: "products/setProducts", payload: data });
  }, [data]);

  return {
    products,
    isLoading,
    openDelete: deleteModal.open,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteConfirm,
  };
};
