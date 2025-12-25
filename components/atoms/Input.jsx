"use client"

export default function Input({ placeholder, value, onChange, className = "" }) {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
