import React from 'react-icons';
import { createMuiTheme } from '@material-ui/core';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff9477",
            dark: "#ff3333"
        },
    },
    overrides: {

        // MuiTypography:{
        //     root:{
        //         color: 'primary.main'
        //     }
        // },

        MuiFormControl: {
            root: {
                display: 'block',
                width: '100%',
                marginTop: 15
            },
        },
        MuiInputBase: {
            root: {
                width: '100%',
            },
        },
        MuiInput: {
            underline: {
                '&::before': {
                    borderBottom: 'none !important'
                },
            },

        },
    }

});

export default mainTheme;