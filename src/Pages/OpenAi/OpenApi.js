import React, { useRef, useState } from "react";
import "animate.css";
import ShowFilterInput from "../../component/openapi/ShowFilterInput";
import { arrayItems } from "./Option";
const { Configuration, OpenAIApi } = require("openai");

const OpenAi = () => {
  const configuration = new Configuration({
    apiKey: "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",
    // apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [textValue, setTextValue] = useState({});
  const [aiGiveText,setAiGiveText] = useState('');
  console.log(option);

  const submit = async () => {
    let objectData = {...option,prompt: textValue}
    console.log(objectData);
    const response = await openai.createCompletion(objectData);
    console.log(response)
    if(response){
      setAiGiveText(response.data.choices[0].text)
    }
  }
  return (
    <div className="bg-blue-800 min-h-screen">
      <ShowFilterInput />

      {Object.values(option).length === 0 ? (
        <div className="grid gap-5 grid-cols-3 w-2/4 mx-auto mt-10 cursor-pointer ">
          {arrayItems.map((option) => {
            return (
              <div
                onClick={() => setOption(option.option)}
                key={option.id}
                className="border-2 animate__animated  animate__backInUp p-4 fade-out rounded-xl text-center w-[300px] border-white text-gray-200 hover:border-blue-500 ease-in duration-300 hover:bg-gray-200 hover:text-black"
              >
                <p className="  text-xl    ease-in duration-300 font-bold    ">
                  {option.name}
                </p>
                <p className="   font-semibold">{option.description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex   w-3/4 mr-auto">
          <div className="flex  items-center text-center ">
            <textarea
            onChange={(e)=>setTextValue(e.target.value)}
              className="bg-white mt-5 ml-2 text-xl "
              cols={100}
              rows={30}
            ></textarea>

            <button onClick={submit} className="btn btn-success ml-5">Submit</button>
          </div>
          <div className="mt-12 ml-20">
         <p className="text-2xl text-white"> {aiGiveText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default OpenAi;
