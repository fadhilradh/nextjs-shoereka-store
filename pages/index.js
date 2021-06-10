import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {fetchProductsData} from '../lib/products'

export async function getStaticProps() {
  const productsData = await fetchProductsData()
  return {
    props: {productsData}
  }
}

export default function Home({productsData}) {
 
  return (
    <div>
        <Head>
          <title>My Store</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
          />
        </Head>
        <main className={styles.main}>
          <h3 className={styles.title}>
          Welcome to <a href="/">Shoereka Store!</a>
          </h3>
          <p className={styles.description}>A store for your next great shoes! 😎</p>
          
          <div className={styles.grid}>
            {productsData ? productsData.map(({id, name, price, description, image}) => {
              return (
                <div key={id} className={styles.card}>
                  <img  
                        src={image} 
                        alt={`Preview of ${name}`}
                        style={{ "maxWidth": "100%", "maxHeight": "10rem"}}

                  />
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{price}</p>
                  <Link href={`/items/${id}`}>
                  <a>Details...</a>
                  </Link>           
                </div>
              )
            }) : "Loading..."}
          </div>
          
         
        </main>
    </div>
  )
}
