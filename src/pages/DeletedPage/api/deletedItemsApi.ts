import { api } from "src/api";
import { DeletedItemsFetchResponse } from "src/types";

export const fetchDeletedItems = () =>
  api
    .get<DeletedItemsFetchResponse>(`/deletedItems`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
