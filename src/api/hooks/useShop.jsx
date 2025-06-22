import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useShop = () => {
    const getShop = useQuery({
        queryKey:["product"],
        queryFn: () => api.get("/products")
    })
    
    return {getShop}
}
