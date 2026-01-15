import styles from './propertyFilter.module.scss';
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"
import PriceSlider from "../../atoms/PriceSlider/PriceSlider"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import { BEDROOM_OPTIONS, COUNTRY_OPTIONS, OPERATION_TYPES, PROPERTY_TYPES } from "../../../constants/constants"
import { useDispatch, useSelector } from "react-redux";
import { setAllFilters, resetFilters } from "../../../store/propertyFilterSlice";
import { useEffect, useMemo, useState } from 'react';
import { initialState as DEFAULT_FILTERS } from "../../../store/propertyFilterSlice";


export default function PropertyFilter() {
    const dispatch = useDispatch();
    const appliedFilters = useSelector(state => state.propertyFilters)
    const [draft, setDraft] = useState(appliedFilters)

    const onChange = (key, value) => {
        setDraft(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const applyFilters = () => {
        dispatch(setAllFilters(draft))
    }

    useEffect(() => {
        setDraft(appliedFilters)
    }, [appliedFilters])

    const hasAppliedFilters = useMemo(() => {
        return Object.keys(appliedFilters).some(
            key => appliedFilters[key] !== DEFAULT_FILTERS[key]
        )
    }, [appliedFilters])

    const hasDraftChanges = useMemo(() => {
        return Object.keys(draft).some(
            key => draft[key] !== appliedFilters[key]
        )
    }, [draft, appliedFilters])


    return (
        <div className={styles.filterContainer}>
            <div className={styles.input_wrapper}>
                <Search />
                <Input
                    placeholder="Buscar propiedad"
                    value={draft.search}
                    onChange={(e) =>
                        onChange("search", e.target.value)
                    }
                    className={styles.input_custom}
                />
            </div>
            <div className={styles.row}>
                <TypeSelector
                    options={PROPERTY_TYPES}
                    value={draft.propertyType}
                    onChange={(value) => {
                        onChange("propertyType", value)
                    }}
                    style={{ flex: '1', backgroundColor: '#f6f8fb' }}
                />
                <TypeSelector
                    options={BEDROOM_OPTIONS}
                    value={draft.beds}
                    onChange={(v) =>
                        onChange("beds", Number(v))
                    }
                    style={{ flex: '1' }}
                />
            </div>
            <div className={styles.row}>
                <TypeSelector
                    options={OPERATION_TYPES}
                    value={draft.operationType}
                    onChange={(v) =>
                        onChange("operationType", v)
                    }
                    style={{ flex: '1', backgroundColor: '#f6f8fb' }}
                />
                <TypeSelector
                    options={COUNTRY_OPTIONS}
                    value={draft.country}
                    onChange={(v) =>
                        onChange("country", v)
                    }
                    style={{ flex: '1', backgroundColor: '#f6f8fb' }}
                />
            </div>
            <div className={styles.row}>
                <PriceSlider
                    value={draft.maxPrice}
                    onChange={(v) => {
                        setDraft(prev => ({
                            ...prev,
                            maxPrice: v
                        }))
                    }}
                />
            </div>
            <div className={styles.row}>
                <Button
                    variant="outline"
                    disabled={!(hasAppliedFilters || hasDraftChanges)}
                    onClick={() => {
                        dispatch(resetFilters())
                        setDraft(DEFAULT_FILTERS)
                    }}
                    className={styles.actionBtn}
                >
                    Limpiar filtros
                </Button>
                <Button
                    variant="primary"
                    disabled={!hasDraftChanges}
                    onClick={applyFilters}
                    className={styles.actionBtn}
                >
                    Filtrar
                </Button>
            </div>
        </div>
    )
}