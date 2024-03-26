import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import userImg from '../../images/user/user-01.png';
const FormElements = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User Profile Data" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
        rel="stylesheet"
      />

      <div className="w-full">
        <div className="mx-auto mt-8 max-w-screen-lg px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">
              Latest Payments
            </p>

            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
                <div className="flex items-center">
                  <label className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">
                    {' '}
                    Sort by:{' '}
                  </label>
                  <select
                    name=""
                    className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                  >
                    <option className="whitespace-no-wrap text-sm">
                      Recent
                    </option>
                  </select>
                </div>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                >
                  <svg
                    className="mr-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md border shadow p-5 mt-6 ">
            <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                
                <span className='text-center'> Profile</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='text-center w-[50%] '>Dated</span>
                <span className='text-center w-[50%] '> Subcription type</span>
              </div>
              <div className="w-[25%]   text-end gap-2">
                status
              </div>
            </div>
            <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                <img
                  className="w-12 h-12 rounded-full border-2"
                  src={userImg}
                  alt=""
                />
                <span>Ali Hussnain Jamil</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='w-[50%]  text-center' > 27-feb-2024</span>
                <span className='w-[50%]  text-center'> Premium</span>
              </div>
              <div className="w-[25%] flex justify-between items-center gap-2">
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Complete
                </button>
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Edit
                </button>
                <button className="text-center rounded-md bg-red-600 py-2 px-3 text-xs text-white w-20 ">
                  Delete
                </button>
              </div>
            </div>

             <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                <img
                  className="w-12 h-12 rounded-full border-2"
                  src={userImg}
                  alt=""
                />
                <span>Ali Hussnain Jamil</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='w-[50%]  text-center' > 27-feb-2024</span>
                <span className='w-[50%]  text-center'> Premium</span>
              </div>
              <div className="w-[25%] flex justify-between items-center gap-2">
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Complete
                </button>
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Edit
                </button>
                <button className="text-center rounded-md bg-red-600 py-2 px-3 text-xs text-white w-20 ">
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                <img
                  className="w-12 h-12 rounded-full border-2"
                  src={userImg}
                  alt=""
                />
                <span>Ali Hussnain Jamil</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='w-[50%]  text-center' > 27-feb-2024</span>
                <span className='w-[50%]  text-center'> Premium</span>
              </div>
              <div className="w-[25%] flex justify-between items-center gap-2">
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Complete
                </button>
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Edit
                </button>
                <button className="text-center rounded-md bg-red-600 py-2 px-3 text-xs text-white w-20 ">
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                <img
                  className="w-12 h-12 rounded-full border-2"
                  src={userImg}
                  alt=""
                />
                <span>Ali Hussnain Jamil</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='w-[50%]  text-center' > 27-feb-2024</span>
                <span className='w-[50%]  text-center'> Premium</span>
              </div>
              <div className="w-[25%] flex justify-between items-center gap-2">
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Complete
                </button>
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Edit
                </button>
                <button className="text-center rounded-md bg-red-600 py-2 px-3 text-xs text-white w-20 ">
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-2 overflow-hidden py-2 flex justify-between border-b border-[#d1d1d1]">
              <div className="w-[30%] flex gap-3 justify-start items-center ">
                <img
                  className="w-12 h-12 rounded-full border-2"
                  src={userImg}
                  alt=""
                />
                <span>Ali Hussnain Jamil</span>
              </div>
              <div className="w-[40%] flex justify-evenly items-center">
                <span className='w-[50%]  text-center' > 27-feb-2024</span>
                <span className='w-[50%]  text-center'> Premium</span>
              </div>
              <div className="w-[25%] flex justify-between items-center gap-2">
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Complete
                </button>
                <button className="text-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white w-20 ">
                  Edit
                </button>
                <button className="text-center rounded-md bg-red-600 py-2 px-3 text-xs text-white w-20 ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormElements;
