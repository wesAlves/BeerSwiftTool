import React from 'react';
import { Formik, useFormik } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import mainTheme from '../../_styles/mainTheme';
import { Container, TextField, ThemeProvider, Typography } from '@material-ui/core';

import "./styles.scss";

const Basic = (props) => {

    const formik = useFormik({
        initialValues: {
            maltName: props.maltttype,
            maltColor: "",
            maltType: "",
            maltAmount: "",
            maltPotencial: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    const maltInicialQuantity = 1

    let matlQuantity = 1;

    return (
        <>
            <ThemeProvider theme={mainTheme} >
                <Container className="card">

                    {matlQuantity >= maltInicialQuantity ? 
                    (<form onSubmit={formik.handleSubmit}>
                        <TextField
                            // id='name'
                            variant="outlined"
                            onChange={formik.handleChange}
                            name="maltName"
                            value={formik.values.maltName}
                            label="Name"
                        // onClick={(e) => {console.log(e.target.value)}}

                        />
                        <TextField
                            // id='color'
                            name="maltColor"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.maltColor}
                            label="Color"
                            // onClick={(e) => {console.log(e.target.value)}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">EBC</InputAdornment>,
                            }}
                        />
                        <TextField
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.maltType}
                            name="maltType"
                            label="Malt type"
                        // onClick={(e) => {console.log(e.target.value)}}
                        />
                        <TextField
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.maltPotencial}
                            name="maltPotencial"
                            label="Malt potential"
                            // onClick={(e) => { console.log(e.target.value) }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">L</InputAdornment>,
                            }}
                        />
                        <TextField
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={2 * formik.values.maltPotencial}
                            name="maltAmount"
                            label="Malt amount"
                            // onClick={(e) => {console.log(e.target.value)}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">L</InputAdornment>,
                            }}
                        />
                        <button type="submit" onClick={(e)=> (console.log(matlQuantity+1))}>Submit</button>
                    </form>)

 : console.log("nooo")}


                </Container>
            </ThemeProvider>
        </>
    );

}

export default Basic;