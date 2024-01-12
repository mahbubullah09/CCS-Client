
import React, { Children, useState } from 'react';

import {encrypted, decrypted} from './ED'
const Test = () => {

    const [data, setData] = useState('Mahbub')
    const [Ddata, setDData] = useState()
    const [DEata, setEData] = useState()


const handleencrypt = () =>{
    setEData(encrypted(data))
    setDData(decrypted(DEata))


}
console.log(DEata);
console.log(Ddata);

   
// plaintext === decryptedBuffer.toString('utf8)
    return (
        <div>
            <h2>EnCrypt : {encrypted("I am Mahbub")}</h2>
            <h2>DepCrypt : {decrypted("Z6k0um+mzhPcxarI+g0KMA==")}</h2>
            <button onClick={handleencrypt} className='bg-red-600'> data</button>

            
        </div>
    );
};

export default Test;
