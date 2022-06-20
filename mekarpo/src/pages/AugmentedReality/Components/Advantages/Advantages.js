import React from 'react'
/* Material-ui. */
import Grid from "@material-ui/core/Grid"

const styles = {
    grid: {
        container: {
            marginBottom: 60,
        },
        item: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    },
    iframe: {
        width: "100%",
        height: 250,
        borderRadius: 3,
        boxShadow: "0 2px 2px 0 rgb(0 0 0 / 2%), 0 3px 1px -2px rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 8%)"
    },
    h4: {
        textAlign: "center"
    }
}

const Advantages = ( { youtubeURL } ) =>
    <Grid container direction="row" alignItems="center" style={styles.grid.container}>
        <Grid xs={12} sm={6} item style={styles.grid.item}>
            <iframe style={styles.iframe} src={youtubeURL} frameBorder="0"></iframe>
        </Grid>
        <Grid xs={12} sm={6} item style={styles.grid.item}>
            <div>
                <h4 style={styles.h4}>¿ЧОМУ ПОТРІБНО ОБРАТИ НАС?</h4>
                <ul>
                    <li>Ціни, доступні кожному.</li>
                    <li>Спеціалізована доставка.</li>
                    <li>Висока якість продукції.</li>
                    <li>Гарантія на 3 роки.</li>
                    <li>Захопливий процес покупки.</li>
                    <li>Використання інновацій.</li>
                </ul>
            </div>
        </Grid>
    </Grid>


export default Advantages