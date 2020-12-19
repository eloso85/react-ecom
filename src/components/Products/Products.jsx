import React from "react";
import {Grid} from "@material-ui/core";

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.',price:'$5',image:'https://static.bhphoto.com/images/images500x500/1562678499_1492907.jpg'},
    {id:2 , name:'Macbook',description: 'Apple macbook', price:'$10',image:'https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102'},
];

const Products =()=>{
    const classes = useStyles()
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;