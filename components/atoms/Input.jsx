"use client"

export default function Input({ placeholder, value, onChange, className = "" }) {
  return (
    <input
      type="text"
      className={`input-custom ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
