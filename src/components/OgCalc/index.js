import React, { useState, useEffect } from 'react';
import { Container, TextField, ThemeProvider, Typography } from '@material-ui/core';
import mainTheme from '../../_styles/mainTheme';
import InputAdornment from '@material-ui/core/InputAdornment';


import "./styles.scss";
// import Fermentable from '../Fermentables'

import MaltForm from '../Fermentables/FermentablesForm';

export default function OgCalc(props) {

    // const handleFermentable = () => {
    //     console.log(fermentables[0].maltId);
    // }


    return (
        <ThemeProvider theme={mainTheme} >
            <Container maxWidth={props.maxWidth} className={props.className} >
                <Typography variant='h4' color='primary' colorPrimary>
                    SG calculator
                </Typography>
                
                {/* <Fermentable /> */}

                <MaltForm />
                <MaltForm />

                {/* <TextField
                    onFocus={handleFermentable}
                    label="Total wort volume"
                    variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">L</InputAdornment>,
                    }}
                />

                <TextField
                    label="Result"
                    variant="standard"
                    // value={handlerSG}
                    className="OG_result"
                    disabled
                    value={3 + 5}
                /> */}


            </Container>
        </ThemeProvider>
    )
}