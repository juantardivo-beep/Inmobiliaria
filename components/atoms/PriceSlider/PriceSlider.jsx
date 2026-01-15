
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./priceSlider.module.scss";

export default function PriceSlider({ value, onChange, min = 0, max = 1000000 }) {

    return (
        <div className={styles.priceSliderWrapper}>
            <Slider
                className={styles.priceSlider}
                min={min}
                max={max}
                step={10000}
                value={value}
                onChange={onChange}
                handleRender={(node) => (
                    <div className={styles.thumbWrapper}>
                        {node}
                    </div>
                )}
            />

            <span className={styles.priceValue}>
                Hasta ${value.toLocaleString()}
            </span>
        </div>
    );
}

