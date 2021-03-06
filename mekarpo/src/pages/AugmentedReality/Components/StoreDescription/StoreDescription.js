import React from 'react'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'

const styles = {
    grid: {
        item: {
            h1: {
                textAlign: "center"
            },
            p: {
                textAlign: "center",
                fontSize: 14
            },
            smallText: {
                fontSize: 10,
                fontWeight: 400,
            },
            textAlign: "left"
        }
    },
    avatar: {
        width: 150,
        height: 150,
        boxShadow: "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
    }
}

const StoreDescription = ( { avatarURL } ) =>
    <Grid xs={12} item style={styles.grid.item}>
        <Grid container direction="row" justify="center" alignItems="center" xs={12} item>
            <Avatar style={styles.avatar} alt="mekarpo" src={avatarURL} />
        </Grid>
        <h1 style={styles.grid.item.h1}>МЕБЛІ MEKARPO
        <p style={styles.grid.item.smallText}></p></h1>
        <p style={styles.grid.item.p}>...Створюйте атмосферу дому разом з нами...</p>
    </Grid>


export default StoreDescription