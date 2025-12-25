import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './typeSelector.module.scss';

export default function TypeSelector({ options, type }) {

    const [propertyType, setPropertyType] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    const selectedLabel = options.find(type => type.value === propertyType)?.label;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={`${styles.selector_container} ${type || ''}`} ref={containerRef}>
            <button
                className={styles.property_selector}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel}</span>
                <ChevronDown size={20} className={styles.chevron_icon} />
            </button>

            {isOpen && (
                <div className={styles.options_menu}>
                    {options.map((type) => (
                        <button
                            key={type.value}
                            className={`${styles.option} ${propertyType === type.value ? styles.selected : ''}`}
                            onClick={() => {
                                setPropertyType(type.value)
                                setIsOpen(false)
                            }}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}