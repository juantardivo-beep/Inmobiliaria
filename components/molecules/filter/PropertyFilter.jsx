import styles from './propertyFilter.module.scss';
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"
import PriceSlider from "../../atoms/PriceSlider/PriceSlider"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import { BEDROOM_OPTIONS, COUNTRY_OPTIONS, OPERATION_TYPES, PROPERTY_TYPES } from "../../../constants/constants"

export default function PropertyFilter() {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.input_wrapper}>
                <Search />
                <Input
                    placeholder="Buscar propiedad"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.input_custom}
                />
            </div>
            <div className={styles.row}>
                <TypeSelector options={PROPERTY_TYPES} style={{ flex: '1', backgroundColor: '#f6f8fb' }} />
                <TypeSelector options={BEDROOM_OPTIONS} style={{ flex: '1' }} />
            </div>
            <div className={styles.row}>
                <TypeSelector options={OPERATION_TYPES} style={{ flex: '1', backgroundColor: '#f6f8fb' }} />
                <TypeSelector options={COUNTRY_OPTIONS} style={{ flex: '1', backgroundColor: '#f6f8fb' }} />
            </div>
            <div className={styles.row}>
                <PriceSlider />
            </div>

            <Button variant="primary">Filtrar</Button>
        </div>
    )
}