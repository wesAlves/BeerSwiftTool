import React from 'react';
import { Container, TextField, ThemeProvider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MdFileDownload } from 'react-icons/md';
import mainTheme from '../../_styles/mainTheme';

import "./styles.scss";

export default function OgCalc(props) {
    return (
        <ThemeProvider theme={mainTheme}>
            <Container maxWidth={props.maxWidth} className={props.className} >
                {/* <MdFileDownload /> */}
                <TextField
                    label="Grain name"
                    variant="outlined"
                />
                <TextField
                    label="Malt type"
                    variant="outlined"
                />
                <TextField
                    label="Malt color"
                    variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">EBC</InputAdornment>,
                    }} />
                <TextField
                    label="Extract potencial"
                    variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">SG</InputAdornment>,
                    }} />
                <TextField
                    label="Grain"
                    variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                    }}
                />
                <TextField
                    label="Total wort volume"
                    variant="outlined"
                    type='number'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">L</InputAdornment>,
                    }} />
                <TextField
                    label="Result"
                    variant="outlined"
                    disabled
                />
            </Container>
        </ThemeProvider>
    )
}