import styles from './header.module.scss';

export default function Header() {
    
    return(
        <header className={ styles.headerComponent }>
            <div className={ styles.content }>
                <h1>mozelli blog</h1>
                <button className={ styles.menuButton }>
                    <i className="ri-menu-fill ri-xl"></i>
                </button>
                <nav className={styles.navBar} id={'open'}>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Inscreva-se!</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}