export async function fetchProductsData() {
  const url = `${process.env.BASE_URL}${process.env.API_TOKEN}`;
  const res = await fetch(url);
  const {data} = await res.json();
  return data["my-cart"]
}

export async function getAllProductIds() {
  const allProducts = await fetchProductsData()
  console.log("getAllProductIds",allProducts);
  return allProducts.map(product => {
    return {
      params: {
        id: String(product.id)
      }
    }
  })
}

export async function getProductData(id) {
  const allProducts = await fetchProductsData();
  const productData = allProducts.filter(product=>product.id === id)
  return productData[0]
  
}