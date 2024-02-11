// import React from 'react'
import React, { useState} from 'react';
import { Link } from 'react-router-dom'





export default function HomePageComponent() {


    // Declaring Element Variables
    // let srcArray = ["SayHello", "AddTwoNum", "AskQuestions", "GreaterOrLess", "MadLib", "OddOrEven", "ReverseItNum", "ReverseItAlpha", "RestaurantPicker", "MagicEight"];
    let srcString = "./pages/SayHello.html";

    const [currentURL, setCurrentURL] = useState('SayHello');

    const [buttons, setButtons] = useState({//I made an object of buttons to set their classNames
        SayHelloBtn: {
            class: 'selectedButton my-4',
            path: 'SayHello'
        },
        AddTwoNumBtn: {
            class: 'unSelectedButton my-4',
            path: 'AddTwoNum'
        },
        AskQuestionsBtn: {
            class: 'unSelectedButton my-4',
            path: 'AskQuestions'
        },
        GreaterOrLessBtn: {
            class: 'unSelectedButton my-4',
            path: 'GreaterOrLess'
        },
        MadLibBtn: {
            class: 'unSelectedButton my-4',
            path: 'MadLib'
        },
        OddOrEvenBtn: {
            class: 'unSelectedButton my-4',
            path: 'OddOrEven'
        },
        ReverseItNumBtn: {
            class: 'unSelectedButton my-4',
            path: 'ReverseItNum'
        },
        ReverseItAlphaBtn: {
            class: 'unSelectedButton my-4',
            path: 'ReverseItAlpha'
        },
        RestaurantPickerBtn: {
            class: 'unSelectedButton my-4',
            path: 'RestaurantPicker'
        },
        MagicEightBtn: {
            class: 'unSelectedButton my-4',
            path: 'MagicEight'
        },
    });

    const SelectBtn = (buttonId) => {
        setButtons(prevState => {
            // I created an empty object which I will put all my new key:value pairs in with the appropriate classNames
            // console.log(prevState);
            const updatedClasses = {};
            // I looped through the keys to set them to the values I want
            for (const key in prevState) {

                if (key === buttonId) {
                    // updatedClasses[key].path = prevState[key].path;
                    updatedClasses[key] = {
                        class: 'selectedButton my-4',
                        path: prevState[key].path

                    }
                    setCurrentURL(prevState[key].path);
                    console.log(prevState[key].path);
                } else {
                    // updatedClasses[key].path = prevState[key].path;
                    updatedClasses[key] = {
                        class: 'unSelectedButton my-4',
                        path: prevState[key].path
                    }
                }
            }

            return updatedClasses;
        });
    };

    return (
        <div>


            <div className="bg-black h-screen w-screen py-10 overflow-auto">

                <div className="flex items-center w-full h-full flex-col px-10">
                    <div className="text-LaserGreen text-2xl lg:text-4xl text-center font-CutiveMono flex-col ">
                        <div>Welcome To</div>
                        <div className="mb-4 ">One For All</div>
                        <div>Select an API...</div>
                    </div>
                    <div className="flex flex-col lg:flex-row my-4">
                        <div className="lg:mr-24 flex flex-col">
                            <button className={buttons.SayHelloBtn.class} onClick={() => SelectBtn('SayHelloBtn')} type="button">Say Hello</button>
                            <button className={buttons.AddTwoNumBtn.class} onClick={() => SelectBtn('AddTwoNumBtn')} type="button">Add 2 Numbers</button>
                            <button className={buttons.AskQuestionsBtn.class} onClick={() => SelectBtn('AskQuestionsBtn')} type="button" >Asking Questions</button>
                            <button className={buttons.GreaterOrLessBtn.class} onClick={() => SelectBtn('GreaterOrLessBtn')} type="button" >Greater Than or Less Than</button>
                            <button className={buttons.MadLibBtn.class} onClick={() => SelectBtn('MadLibBtn')} type="button" >Mad Lib</button>
                        </div>
                        <div className="lg:ml-24 flex flex-col">
                            <button className={buttons.OddOrEvenBtn.class} onClick={() => SelectBtn('OddOrEvenBtn')} type="button" >Odd or Even</button>
                            <button className={buttons.ReverseItNumBtn.class} onClick={() => SelectBtn('ReverseItNumBtn')} type="button" >Reverse It #</button>
                            <button className={buttons.ReverseItAlphaBtn.class} onClick={() => SelectBtn('ReverseItAlphaBtn')} type="button" >Reverse It AZ#</button>
                            <button className={buttons.RestaurantPickerBtn.class} onClick={() => SelectBtn('RestaurantPickerBtn')} type="button" >Restaurant Picker</button>
                            <button className={buttons.MagicEightBtn.class} onClick={() => SelectBtn('MagicEightBtn')} type="button" >Magic 8</button>
                        </div>
                    </div>
                    <div className="pb-10 flex justify-center items-center">
                        <Link to={currentURL}>
                            <button type="button" className="redBtn text-3xl ">Go</button>
                        </Link>

                    </div>

                </div>

                {/* <script src="../script/app.js"></script>
                <script src="./node_modules/flowbite/dist/flowbite.min.js"></script> */}
            </div>


        </div>
    )

}

