export default function Badge({ children, className = "" }) {
  return <span className={`badge-exclusive ${className}`}>{children}</span>
}
