import styles from '../shopping/shoppingcar.module.css';

export default function shoppingCar({shopingCar, deleteProduct}) {

    let total = 0;

    return (
        <section>
            <h1>CARRITO DE COMPRAS</h1>
            <div className={styles.container__cards}>
                {
                    shopingCar.length > 0 ? shopingCar.map(product => {
                        total += product.price;
                        return <div key={product.id} className={styles.cards}>
                            <div className={styles.container_close}>
                                <button onClick={() => deleteProduct(product.id)}>X</button>
                            </div>
                            <div>
                                <img src={product.img} alt="Imagen del producto"/>
                            </div>
                            <div className={styles.container__details}>
                                <h5>{product.title}</h5>
                                <div>
                                    <span>${new Intl.NumberFormat().format(product.price)}</span>
                                </div>
                            </div>
                        </div>
                    })
                    :<div>
                        <h2>Tu carrito está vacío</h2>
                        <span>¿No sabes qué comprar? ¡Miles de productos te esperan!</span>
                    </div>
                }
            </div>
            <h2>Total: ${new Intl.NumberFormat().format(total)}</h2>
        </section>
    );
}