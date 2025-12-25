import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import styles from "./priceSlider.module.scss";

export default function PriceSlider() {
    const MIN_PRICE = 50000;

    const [maxPrice, setMaxPrice] = useState(800000);

    return (
        <div className={styles.priceSliderWrapper}>
            <Slider
                className={styles.priceSlider}
                min={MIN_PRICE}
                max={1000000}
                step={20000}
                value={maxPrice}
                onChange={setMaxPrice}
                handleRender={(node) => (
                    <div className={styles.thumbWrapper}>
                        {node}
                    </div>
                )}
            />

            <span className={styles.priceValue}>
                Hasta ${maxPrice.toLocaleString()}
            </span>
        </div>
    );
}

