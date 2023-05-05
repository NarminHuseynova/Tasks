import { Logo } from "./Logo";
import "../styles.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="nav_bar">
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" className="link">
          <code style={{ fontSize: 18 }}>Optima MMC</code>
        </Link>
      </div>
      <div className="nav">
        <Link to="/about">Haqqımızda</Link>
        <Link to="/contact">Bizimlə Əlaqə</Link>
      </div>
    </div>
  );
}
