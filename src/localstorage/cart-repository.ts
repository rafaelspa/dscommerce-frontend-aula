import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    return localStorage.setItem("com.devsuperior.dscommerce/Cart", str);
}