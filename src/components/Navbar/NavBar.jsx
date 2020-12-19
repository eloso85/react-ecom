import React from 'react';

import {AppBar, Toolbar, IconButton,Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/commerce.png'
import useStyles from './styles'

function NavBar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color ='inherit'>
                <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="com.js" height="25px" className={classes.image}/>
                    Comerce.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart Items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
