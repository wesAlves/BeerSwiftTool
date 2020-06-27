import React, { useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

import {MaltForm} from "./FermentablesForm";

const Fermentables = () => {

    return (
        <>
        <MaltForm />
            {/* <TextField
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
            /> */}


        </>
    );
}

export default Fermentables;