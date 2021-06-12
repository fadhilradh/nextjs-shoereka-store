import styles from '../../styles/ProductPage.module.css'
import {getAllProductIds, getProductData} from '../../lib/products'

export default function ProductPage({productData}) {
  return (
    <div className={styles.container}>
       <a href="/">Shoereka Store</a>
       <div className={styles.img}>
           <img  
              src={productData.image} 
              alt={`Preview of ${productData.name}`}
              style={{ "max-width": "100%", "max-height": "20rem"}}
          />  
        </div>
        <div className={styles.productDetails}>
        <p className={styles.title}>
          {productData.name}
        </p>
        <p className={styles.description}>{productData.description}</p>
        <p>{productData.price}</p>
       </div>
    </div>
  )
}



export async function getStaticPaths() {
  const paths = await getAllProductIds();
  return     {
    paths, 
    fallback: false
  }
}


export async function getStaticProps({params}) {
  const productData = await getProductData(params.id)
  console.log(productData);
  return {
    props: {
      productData
    }
  }
}
