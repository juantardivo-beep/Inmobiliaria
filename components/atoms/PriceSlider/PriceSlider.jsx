import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import styles from "./priceSlider.module.scss";

export default function PriceSlider() {

    const [price, setPrice] = useState([200000, 800000]);

    return (
        <Slider
            className={styles.priceSlider}
            range
            min={50000}
            max={1000000}
            step={50000}
            value={price}
            onChange={setPrice}
            handleRender={(node, props) => (
                console.log(node),
                <div className={styles.thumbWrapper}>
                    {node}
                    <span className={styles.thumbLabel}>
                        {props.value.toLocaleString()}
                    </span>
                </div>
            )}
        />
    )
}
