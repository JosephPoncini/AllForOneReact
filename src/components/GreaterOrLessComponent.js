import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { GreaterOrLess } from '../services/DataServices.js'

export default function GreaterOrLessComponent() {

    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await GreaterOrLess(inputField1, inputField2);
        setResult(response);
    }

    return (
        <div className="bg-black h-screen w-screen text-2xl lg:text-4xl py-10 overflow-auto">
            <div className="flex items-center w-full h-full flex-col px-10">
                <div className="text-LaserGreen   text-center font-CutiveMono my-9">API: GREATER THAN OR LESS THAN</div>
                <div className="flex flex-col lg:flex-row my-9">
                    <span className="text-LaserGreen   text-center font-CutiveMono mb-10 lg:mb-0">Give me your first number:</span>
                    <div>
                        <input type="text" id="input1" className="inputField" onChange={(event) => setInputField1(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row my-9">
                    <span className="text-LaserGreen   text-center font-CutiveMono mb-10 lg:mb-0">Give me your second number:</span>
                    <div>
                        <input type="text" id="input2" className="inputField" onChange={(event) => setInputField2(event.target.value)}/>
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
