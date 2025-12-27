"use client"

import Link from "next/link"

export default function Button({ children, variant = "primary", className = "", onClick, type = "button", href }) {
  const variantClasses = {
    primary: "btn-custom-primary",
    outline: "btn-custom-outline",
    ghost: "btn-custom-ghost",
  }

  const classes = `${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
