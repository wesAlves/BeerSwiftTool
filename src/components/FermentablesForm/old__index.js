// import React from 'react';
// import { Formik, useFormik } from 'formik';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import mainTheme from '../../_styles/mainTheme';
// import { Container, TextField, ThemeProvider, Typography } from '@material-ui/core';

// import "./styles.scss";


// const Basic = () => (
//     <ThemeProvider theme={mainTheme} >
//         <Container className="card">
            
//             <Formik
//                 initialValues={
//                     {
//                         maltName:"",
//                         maltType: "",
//                         maltColor: "",
//                         maltPotencial: "",
//                         maltAmount: ""
//                     }
//                 }
//             // validate={values => {
//             //     const errors = {};
//             //     if (!values.email) {
//             //         errors.email = "Required";
//             //     } else if (
//             //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             //     ) {
//             //         errors.email = "Invalid email address";
//             //     }
//             //     return errors;
//             // }}

//             // onSubmit={(values, { setSubmitting }) => {
//             //     setTimeout(() => {
//             //         alert(JSON.stringify(values, null, 2));
//             //         setSubmitting(false);
//             //     }, 400);
//             // }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting
//                 }) => (
//                         <form onSubmit={handleSubmit}>
//                             <TextField
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 value={values.maltName}
//                                 name="maltName"
//                                 label="Total wort volume"
//                                 // onClick={(e) => {console.log(e.target.value)}}
                                
//                             />
//                             <TextField
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 value={values.maltColor}
//                                 name="MaltColor"
//                                 label="Color"
//                                 // onClick={(e) => {console.log(e.target.value)}}
//                                 InputProps={{
//                                     endAdornment: <InputAdornment position="end">EBC</InputAdornment>,
//                                 }}
//                             />
//                             <TextField
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 value={values.maltType}
//                                 name="maaltType"
//                                 label="Malt type"
//                                 // onClick={(e) => {console.log(e.target.value)}}
//                             />
//                             <TextField
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 value={values.maltPotencial}
//                                 name="potential"
//                                 label="Malt potential"
//                                 onClick={(e) => {console.log(e.target.value)}}
//                                 InputProps={{
//                                     endAdornment: <InputAdornment position="end">L</InputAdornment>,
//                                 }}
//                             />
//                             <TextField
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 value={values.maltAmount}
//                                 name="amount"
//                                 label="Malt amount"
//                                 // onClick={(e) => {console.log(e.target.value)}}
//                                 InputProps={{
//                                     endAdornment: <InputAdornment position="end">L</InputAdornment>,
//                                 }}
//                             />
//                         </form>
//                     )}

//             </Formik>
//         </Container>
//     </ThemeProvider>
// );


// export default Basic;