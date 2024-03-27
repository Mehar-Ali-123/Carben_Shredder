  
import starterPlan from "../images/icon/starterPlan.svg";
import mostPopular from "../images/icon/mostPopular.svg";
import scalePlan from "../images/icon/scalePlan.svg";

function SubcriptionCard() {
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px         rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-[#FBF4DB]  mt-7 text-black h-12 text-center px-4 flex items-center justify-start">
                Fingerstache disrupt
              </p>
              <p className="text-black h-12 text-center px-4 flex items-center justify-start">
                Franzen hashtag
              </p>
              <p className="bg-[#FBF4DB] text-black h-12 text-center px-4 flex items-center justify-start">
                Tilde art party
              </p>
              <p className="text-black h-12 text-center px-4 flex items-center justify-start">
                Banh mi cornhole
              </p>
              <p className="bg-[#FBF4DB] text-black h-12 text-center px-4 flex items-center justify-start">
                Waistcoat squid hexagon
              </p>
              <p className="text-black h-12 text-center px-4 flex items-center justify-start">
                Pinterest occupy authentic
              </p>
              <p className="bg-[#FBF4DB] text-black h-12 text-center px-4 flex items-center justify-start">
                Brooklyn helvetica
              </p>
              <p className="text-black h-12 text-center px-4 flex items-center justify-start">
                Long Feature Two
              </p>
              <p className="bg-[#FBF4DB] text-black h-12 text-center px-4 flex items-center justify-start">
                Feature One
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap    rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0    -none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={starterPlan}
                  className="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold text-black">Starter plan</p>
                   <h2 className=" text-4xl text-black font-medium flex items-center justify-center leading-none  mb-2   ">
                  $189
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">Recurring every month</span>
                <div>
                  <button className="text-white bg-[#77CFB8]   py-2  rounded-lg text-center w-[180px]">
                    Start Trial
                  </button>
                </div>
              </div>
              <p className="bg-[#FBF4DB] mt-7 text-gray-600 h-12 text-center px-2 flex items-center   justify-center    ">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center"> 
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center rounded-bl-lg"> 
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-[#77CFB8] relative">
              <span className="bg-[#77CFB8] text-white px-3 py-1  text-xs absolute rounded-md right-3 top-[-15px] ">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={mostPopular}
                  className="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                
                <p className="text-md font-semibold text-black">Growth plan</p>
                <h2 className=" text-4xl text-black font-medium flex items-center justify-center leading-none  mb-2   ">
                $289
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">Recurring every month</span>
                <button className=" text-white bg-[#77CFB8]   py-2   rounded-lg text-center w-[180px]">
                  Start Trial
                </button>
              </div>
              <p className="bg-[#FBF4DB]  mt-7 text-gray-600 h-12 text-center px-2 flex items-center  justify-center    ">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center    ">
               
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-px   -none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={scalePlan}
                  className=" mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold text-black">Scale plan</p>
                <h2 className=" text-4xl text-black font-medium flex items-center justify-center leading-none  mb-2   ">
                  $499
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">Recurring every month</span>
                <div>
                <div>
                  <button className="text-white bg-[#77CFB8]   py-2  rounded-lg text-center w-[180px]">
                    Start Trial
                  </button>
                </div>
                </div>
              </div>
              <p className="bg-[#FBF4DB]  mt-7 rounded-tr-lg text-gray-600 h-12 text-center px-2 flex items-center  justify-center    ">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0 bg-[#6B7280]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] rounded-br-lg text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center    ">
                
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubcriptionCard; 
