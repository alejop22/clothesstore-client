import React  from "react";
import styles from '../footer/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h4>POLÍTICAS</h4>
                    <p>Políticas de privacidad</p>
                    <p>Políticas de cambio</p>
                    <p>Políticas de envío</p>
                    <p>Términos y condiciones</p>
                    <p>Responsabilidad social</p>
                </div>
                <div>
                    <h4>SOBRE NOSOTROS</h4>
                    <p>Encuentra tu tienda</p>
                    <p>Contáctanos</p>
                    <p>Trabaja con nosotros</p>
                </div>
                <div>
                    <h4>SÍGUENOS EN:</h4>
                    <div className={styles.imgs}>
                        <img src="https://img.icons8.com/glyph-neue/64/undefined/facebook.png"/>
                        <img src="https://img.icons8.com/ios-glyphs/64/undefined/twitter--v1.png"/>
                        <img src="https://img.icons8.com/material-outlined/64/undefined/instagram-new--v1.png"/>
                        <img src="https://img.icons8.com/ios/64/undefined/youtube-play--v1.png"/>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.copy}>
                <p>© Copyright Colombia. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}