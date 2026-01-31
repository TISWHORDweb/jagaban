import { Link } from 'react-router-dom'

/**
 * All action buttons lead to Contact page.
 * variant: 'primary' | 'secondary' | 'outline'
 */
export default function CTAButton({ to = '/contact', children, variant = 'primary', className = '' }) {
  const v = variant === 'secondary' ? 'btn-secondary' : variant === 'outline' ? 'btn-outline' : 'btn-primary'
  return (
    <Link to={to} className={`btn ${v} ${className}`.trim()}>
      {children}
    </Link>
  )
}
