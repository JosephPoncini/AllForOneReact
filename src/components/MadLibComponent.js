import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MadLib } from '../services/DataServices.js'

export default function MadLibComponent() {

    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [inputField3, setInputField3] = useState('');
    const [inputField4, setInputField4] = useState('');
    const [inputField5, setInputField5] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await MadLib(inputField1, inputField2, inputField3, inputField4, inputField5);
        setResult(response);
    }

    return (
        <div className="bg-black h-screen w-screen text-2xl lg:text-4xl py-10 overflow-auto">
            <div className="flex items-center w-full h-full flex-col px-10 mb-10">
                <div className="text-LaserGreen   text-center font-CutiveMono my-9">API: MAD LIBS</div>
                <span className="text-LaserGreen text-3xl text-center font-CutiveMono">Give me the following:</span>
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3">
                    <div className="flex flex-col lg:flex-row justify-end my-9 px-10">
                        <span className="text-LaserGreen text-3xl text-center font-CutiveMono">A name:</span>
                        <div>
                            <input type="text" id="input1" className="inputField" onChange={(event) => setInputField1(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end my-9 px-10">
                        <span className="text-LaserGreen text-3xl text-center font-CutiveMono">noun (singular):</span>
                        <div>
                            <input type="text" id="input2" className="inputField" onChange={(event) => setInputField2(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end my-9 px-10">
                        <span className="text-LaserGreen text-3xl text-center font-CutiveMono">past tense verb:</span>
                        <div>
                            <input type="text" id="input3" className="inputField" onChange={(event) => setInputField3(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end my-9 px-10">
                        <span className="text-LaserGreen text-3xl text-center font-CutiveMono">adjective:</span>
                        <div>
                            <input type="text" id="input4" className="inputField" onChange={(event) => setInputField4(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end my-9 px-10">
                        <span className="text-LaserGreen text-3xl text-center font-CutiveMono">mood:</span>
                        <div>
                            <input type="text" id="input5" className="inputField" onChange={(event) => setInputField5(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row lg:justify-center my-9 px-10">
                        <button id="ExecuteBtn" type="button" className="executeBtn text-3xl" onClick={() => getResult()}>Execute</button>
                    </div>
                </div>


                <div id="output" className="text-LaserGreen text-3xl text-center font-CutiveMono my-9">
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
