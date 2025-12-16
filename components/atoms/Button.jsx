"use client"

export default function Button({ children, variant = "primary", className = "", onClick, type = "button" }) {
  const variantClasses = {
    primary: "btn-custom-primary",
    outline: "btn-custom-outline",
    ghost: "btn-custom-ghost",
  }

  return (
    <button type={type} className={`${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
