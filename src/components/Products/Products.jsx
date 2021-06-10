import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    {id: 1, name: "Barbecu1", description: 'un test', price: '50€', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vX2kyO38GGrwyT-McF79gwHaHa%26pid%3DApi&f=1'},
    {id:2, name: "Barbecu2", description: 'deux test', price: '100€', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUSDFuiMLI9iC5pIOGGW1AHaHa%26pid%3DApi&f=1'}
]

const Products =  () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
        )
}

export default Products;