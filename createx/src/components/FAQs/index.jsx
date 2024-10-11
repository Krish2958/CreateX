import React from "react";
import { useState } from "react";
import {faqs} from "../../../public/faqs"
console.log(faqs)

const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (<>
    <div className="w-full h-screen py-20 flex justify-center bg-black">
        
      <div className="w-[600px] h-max  overflow-hidden">
        <div ><h1 className="text-white items-center">FAQS</h1></div>
        {faqs.map((item, i) => (
          <div key={i} className={`text-white text-md font-medium border-orange-500 last:border-b-0 rounded-3xl m-10 bg-orange-500  ${
            activeId === i ? " bg-slate-100 border-black "  : ""
          }`}>
            <div
              className={`transition-transform duration-500 px-5 py-4 flex items-center justify-between rounded-3xl ${
                activeId === i ? "bg-orange-500" : ""
              }`}
              onMouseEnter ={() => togglerFunction(i)}
              onMouseLeave ={() => togglerFunction(i)}
            >
              <p className="flex-1">{item.title}</p>
              <span>
                {activeId === i ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {activeId === i && (
              <div className="px-5 py-4  flex items-center text-black justify-between">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default FAQs;