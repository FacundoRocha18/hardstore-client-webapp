import {
	Card,
} from "@nextui-org/react";
import { type ICartItem } from "../../../common/interfaces";
import { CartItemControls } from './cart-item-controls';
import { CartItemImage } from './cart-item-image';
import { CartItemTitle } from './cart-item-title';
import { CartItemPriceTag } from './cart-item-price-tag';

interface Props {
	item: ICartItem;
}

export const CartItem = ({ item }: Props) => {
	const { id, name, price, quantity, image } = item;

	return (
		<Card className="rounded p-4 min-w-full lg:max-h-40 cart-item-layout">
			<CartItemImage image={image} />
			<CartItemTitle id={id} name={name} />
			<CartItemPriceTag price={price} />
			<CartItemControls quantity={quantity} />
		</Card>
	);
};
