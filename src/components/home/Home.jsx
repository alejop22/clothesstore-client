import { useEffect, useState } from "react";
import React from "react";
import styles from '../home/home.module.css';
const itemsPerPage = 4;
export default function Home({products, addShoppingCar}) {

    const [productFavs, setProductFavs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [firstIndex, setFirstIndex] = useState(0);

    useEffect(() => {
        const auxProducts = [];
        const randomProducts = Math.floor((Math.random() * (1000 - 0 + 1)) + 0);

        fetch(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=${randomProducts}`)
            .then(rs => rs.json())
            .then(data => {
                for(let i = 38; i < data.results.length; i++) {
                    auxProducts.push(data.results[i]);
                }
                setProductFavs(auxProducts);
            })
            .catch(e => console.log(e));
        
        setFirstIndex(0)
    }, []);

    // Crea el indice siguiente para pasar al siguiente grupo de 8 perros
    const nextHandler = () => {
        const nextPage = currentPage + 1;
        
        const firstIndex = nextPage * itemsPerPage;
        
        if(firstIndex >= productFavs.length) return;
        
        setFirstIndex(firstIndex);
        setCurrentPage(nextPage);
    }

    // Crea el indice anterior para devolver al anterior grupo de 8 perros
    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setFirstIndex(firstIndex);
        setCurrentPage(prevPage);
    }


    return (
        <main>
            {
                products.length > 0 ? 
                    <div className={styles.container__cards}>
                        {products.map(prod => {
                            return <div key={prod.id} className={styles.cards}>
                                <div>
                                    <img src={prod.thumbnail} alt={`Imagen ${prod.title}`} />
                                </div>
                                <div className={styles.container__details}>
                                    <h5>{prod.title}</h5>
                                        <div>
                                            <span>${ new Intl.NumberFormat().format(prod.price)}</span>
                                        </div>
                                    <div>
                                        <button onClick={() => {
                                            addShoppingCar({
                                                id: prod.id,
                                                title: prod.title,
                                                img: prod.thumbnail,
                                                price: prod.price});
                                                alert('Producto agregado al carrito');
                                        }}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    :
                    <div>
                        <div className={styles.img}>
                            <img src="https://res.cloudinary.com/dc3i4vyci/image/upload/v1654728390/weqvvh6lyq360d7yuyme.jpg" alt="" />
                        </div>
                        <div className={styles.container__imgs}>
                            <div className={styles.img_1}>
                                <h1>MODA INFANTIL</h1>
                            </div>
                            <div className={styles.img_2}>
                                <h1>PROTECCIÓN</h1>
                            </div>
                        </div>
                        <h2>PRODUCTOS MÁS BUSCADOS</h2>
                        <div className={styles.container__cards}>
                            <button onClick={prevHandler}><img src="https://img.icons8.com/ios-glyphs/50/undefined/circled-chevron-left.png"/></button>
                            {
                                productFavs.length > 0 ?
                                [...productFavs].splice(
                                    firstIndex,itemsPerPage
                                ).map(productFav => {
                                        return <div key={productFav.id} className={styles.card}>
                                            <div>
                                                <img src={productFav.thumbnail} alt={`Imagen ${productFav.title}`} />
                                            </div>
                                            <div className={styles.container__details}>
                                                <h5>{productFav.title}</h5>
                                                    <div>
                                                        <span>${ new Intl.NumberFormat().format(productFav.price)}</span>
                                                    </div>
                                                <div>
                                                    <button onClick={() => {
                                                        addShoppingCar({
                                                            id: productFav.id,
                                                            title: productFav.title,
                                                            img: productFav.thumbnail,
                                                            price: productFav.price});
                                                        alert('Producto agregado al carrito');
                                                    }}>Agregar al carrito</button>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                    :
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                            }
                            <button onClick={nextHandler}><img src="https://img.icons8.com/ios-glyphs/50/undefined/circled-chevron-right.png"/></button>
                        </div>
                    </div>
            }
        </main>
    );
}