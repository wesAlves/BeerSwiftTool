import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MaltForm = () => {
    
    const { maltName, setMaltName } = useState("");
    // const { maltType, setMaltType } = useState("");
    // const { maltColor, setMaltColor } = useState("");
    // const { maltPotencial, setMaltPotencial } = useState("");
    // const { maltAmount, setMaltAmount } = useState("");

    const handlerChange = () => {
        // preventDefault();
        alert(maltName);
        setMaltName("GELADEIRA");
    }

    return (
        <div>
            <form>
                <TextField
                    label="Malt name"
                    variant="outlined"
                    id='maltName'
                    value={maltName}
                    onClick={handlerChange}
                    // onChange={(e) => setMaltName(e.target.value)}
                    // onClick= {console.log((e) => {e.target.value})}
                // onFocus={console.log(a++)}
                />
                {/* <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> */}

            </form>
        </div>
        // <div>Casa</div>
    );

}

export default MaltForm;