import React from "react";
import { useState } from "react";
import styles from '../navbar/navbar.module.css';
import { Link } from "react-router-dom";

export default function NavBar({searchProducts}) {

    const [inputSearch, setInput] = useState('');

    const handlerChange = (e) => {
        setInput(e.target.value);
    }

    const handlerClick = () => {
        searchProducts(inputSearch);
    }

    return (
        <header>
            <div className={styles.header}>
                <Link to='/'>
                    <h1>CLOTHESSTORE</h1>
                </Link>
                <div className={styles.header_inputs}>
                    <input type="text" onChange={e => handlerChange(e)} value={inputSearch} placeholder='Buscar aquí producto'/>
                    <button onClick={() => {
                        if (inputSearch === '') {
                            alert('Debe escribir algo para buscar')
                        } else {
                            handlerClick();
                            setInput('');
                        }
                    }}><img src="https://img.icons8.com/material-outlined/24/undefined/search--v1.png"/></button>
                    <div className={styles.container_imgs}>
                        <Link to='/shopping'>
                            <img src="https://img.icons8.com/material-outlined/36/undefined/shopping-cart-loaded.png"/>
                        </Link>
                        <img src="https://img.icons8.com/fluency-systems-regular/36/undefined/user.png"/>
                    </div>
                </div>
                <button className={styles.btn_login}>Iniciar sesión</button>
            </div>
                <nav className={styles.menu}>
                    <ul>
                        <li><a href="#">Hombre</a></li>
                        <li><a href="#">Mujer</a></li>
                        <li><a href="#">Junior</a></li>
                        <li><a href="#">Niños</a></li>
                        <li><a href="#">Accesorios</a></li>
                        <li><a href="#">Ofertas</a></li>
                    </ul>
                </nav>
        </header>
    );
}