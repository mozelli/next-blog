import styles from './header.module.scss';

export default function Header() {
    return(
        <header className={ styles.headerComponent }>
            <h1>mozelli blog</h1>
            <button className="buttonMenu" type='button'>
                <i className="ri-menu-fill ri-xl"></i>
            </button>
        </header>
    );
}