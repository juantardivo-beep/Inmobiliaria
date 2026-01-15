import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './typeSelector.module.scss';

export default function TypeSelector({ options, value, onChange, classname, style }) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const hasValue = Boolean(value)

    const selectedLabel =
        options.find(opt => opt.value === value)?.label;

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
        <div className={styles.selector_container} style={style} ref={containerRef}>
            <button
                className={`${classname ?? styles.property_selector} ${hasValue ? styles.hasValue : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel}</span>
                <ChevronDown size={20} className={styles.chevron_icon} />
            </button>

            {isOpen && (
                <div className={styles.options_menu}>
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            className={`${styles.option} ${value === opt.value ? styles.selected : ''}`}
                            onClick={() => {
                                onChange(opt.value);
                                setIsOpen(false)
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}