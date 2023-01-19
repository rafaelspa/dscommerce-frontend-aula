import { OrderDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository";

export function saveCart(cart: OrderDTO) {
    return cartRepository.save(cart);
}