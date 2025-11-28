import { useEffect, useState } from "react";
import styles from "./CartButton.module.css";
import { selectCartItems } from "../../store/cart-slice";
import { useSelector } from "react-redux";

const CartButton = () => {
    const [isButtonAnimated, setIsButtonAnimated] = useState(true);

    const items = useSelector(selectCartItems);
    const cartButtonClasses = `${styles.button} ${
        isButtonAnimated ? styles.bump : ""
    }`;
    console.log("RENDER");
    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setIsButtonAnimated(true);

        const timer = setTimeout(() => {
            setIsButtonAnimated(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, [items]);

    return (
        // <button className={styles.button}>
        <button className={cartButtonClasses}>
            <span>Корзина</span>
            <span className={styles.badge}>2</span>
        </button>
    );
};

export default CartButton;
