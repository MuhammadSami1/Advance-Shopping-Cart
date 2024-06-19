import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItem from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItem.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div></div>
      </div>
    </Stack>
  );
};

export default CartItem;
