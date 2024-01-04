import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Fruity</span>
            <nav>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Shop</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header