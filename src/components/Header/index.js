import { useState } from 'react';
import styles from './header.module.scss';

export default function Header() {

    const [navBarCollapseShow, setNavBarCollapseShow] = useState(true)
    const [navBarCollapseStyle, setNavBarCollapseStyle] = useState(styles.navBarCollapse);

    function changeNavBarCollapseShowState() {
        setNavBarCollapseShow(!navBarCollapseShow);

        if(navBarCollapseShow) {
            setNavBarCollapseStyle(`${styles.navBarCollapse} ${styles.show}`);
        } else {
            setNavBarCollapseStyle(styles.navBarCollapse);
        }

    }
    
    return(
        <nav className={ styles.headerComponent }>
            <div className={ styles.containerFluid }>
                
                <div className={ styles.navBar }>
                    <h1>mozelli blog</h1>
                    <input 
                        type="checkbox" 
                        className={ styles.mobileButtonMenu } 
                        id="mobileButtonMenu"
                        onChange={ changeNavBarCollapseShowState } 
                    />
                    <label htmlFor="mobileButtonMenu" className={ styles.mobileButtonMenuIcon }>
                        <i className="ri-menu-line ri-xl"></i>
                    </label>
                </div>
                
                <div className={ navBarCollapseStyle }>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Inscreva-se</li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}