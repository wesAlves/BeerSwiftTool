import React from 'react';
import { useFormik} from 'formik';


const Malt = () => {
   
   returns(<form onSubmit={formik.handleSubmit}>
        <TextField
            // id='name'
            variant="outlined"
            onChange={formik.handleChange}
            name="maltName"
            value={formik.values.maltName}
            label="Total wort volume"
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
}