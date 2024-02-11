import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReverseItAlpha } from '../services/DataServices.js'

export default function ReverseItAlphaComponent() {

    const [inputField1, setInputField1] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await ReverseItAlpha(inputField1);
        setResult(response);
    }

    return (
        <div className="bg-black h-screen w-screen  text-2xl lg:text-4xl py-10 overflow-auto">
            <div className="flex items-center w-full h-full flex-col px-10">
                <div className="text-LaserGreen   text-center font-CutiveMono my-9">API: REVERSE IT: ALPHA-NUMERICAL</div>
                <div className="flex flex-col my-9">
                    <span className="text-LaserGreen   text-center font-CutiveMono">Give me a string of letters and/or numbers:</span>
                    <div className="flex justify-center pt-10">
                        <input type="text" id="input1" className="longInputField" onChange={(event) => setInputField1(event.target.value)}/>
                    </div>
                </div>
                <button id="ExecuteBtn" type="button" className="executeBtn my-9" onClick={() => getResult()}>Execute</button>
                <div id="output" className="text-LaserGreen   text-center font-CutiveMono my-9">
                    Output: <br /> {result}
                </div>
                <div className="py-10 flex justify-center items-center">
                    <Link to={'/'}><button id="BackBtn" type="button" className="redBtn text-3xl">
                        Back </button> </Link>
                </div>
            </div>

            {/* <script type="module" src="../script/api_app.js"></script>
    <script src="../node_modules/flowbite/dist/flowbite.min.js"></script> */}
        </div>
    )
}
