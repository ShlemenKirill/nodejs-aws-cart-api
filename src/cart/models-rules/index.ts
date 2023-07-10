import { CartItem } from '../entity/cart-item.entity';

/**
 * @param {CartItem[]} items
 * @returns {number}
 */
export function calculateCartTotal(items: CartItem[]): number {
  return items
    ? items.reduce((acc: number, { product, count }: CartItem) => {
        return (acc += product.price * count);
      }, 0)
    : 0;
}
