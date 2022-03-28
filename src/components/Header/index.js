import { useState } from 'react';
import Link from 'next/link';
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
                        <Link href={'/'} alt="Home">
                            <a>
                                <li>
                                <i className="ri-home-2-fill ri-xl"></i> Home
                                </li>
                            </a>
                        </Link>
                        <Link href={'/'} alt="Sobre">
                            <a>
                                <li>
                                    <i className="ri-file-info-fill ri-xl"></i> Sobre
                                </li>
                            </a>
                        </Link>
                        <Link href={'/'} alt="Inscreva-se">
                            <a>
                                <li>
                                <i className="ri-mail-star-fill ri-xl"></i> Inscreva-se
                                </li>
                            </a>
                        </Link>

                        
                        
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}