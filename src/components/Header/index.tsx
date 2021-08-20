import './styles.css'
import logoImage from '../../assets/logo.png'

export function Header() {
  return (
    <header>
      <img src={logoImage} alt="logo empresa Intelitrader" />

      <button>Placeholder button</button>
    </header>
  )
}