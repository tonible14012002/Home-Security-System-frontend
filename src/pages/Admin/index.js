import React from 'react';

const Admin = () => {
  return (
    <div class="flex flex-col gap-20 pt-12 pl-64 pr-80 mb-[100px]">
      <div className="text-black text-2xl tracking-wide">
        Welcome, <span className="font-bold">Admin!</span>
      </div>
      <div className="grid grid-cols-11 gap-x-5 gap-y-8">
        <div className="flex flex-col w-[100%] h-72 bg-mainCream rounded-lg col-span-5">
          <p className="font-bold text-4xl mt-16 text-center">My Users</p>
          <p className="font-bold text-7xl  mt-5 text-center">12</p>
        </div>
        <div className="relative w-[100%] h-72  rounded-lg col-span-6">
        <img src='http://127.0.0.1:5000/video_feed' 
          alt='video'
          className="absolute w-[100%] h-[100%] object-fill"
        />
        </div>
        <div class="bg-mainCream text-black w-[100%] h-80 pt-10 pl-12 rounded-lg col-span-11">
          <p className="font-bold text-4xl text-left">
            Recent Users Activities
          </p>
          <table class="table-auto mt-8">
            <thead>
              <tr>
                <th class="w-20"></th>
                <th class="w-44"></th>
                <th class="w-48"></th>
                <th class="w-fit"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="Green"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </td>
                <td>
                  <div className="text-black text-xl tracking-wide">
                    Kevin Hart
                  </div>
                </td>
                <td>
                  <div className="text-mainGreen font-bold text-xl tracking-wide">
                    Joined
                  </div>
                </td>
                <td>
                  <div className="text-[#ADA6A6] text-xl tracking-wide">
                    Thur, Match 22nd 04:55pm
                  </div>
                </td>
              </tr>
              <tr>
                <td class="py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="Green"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </td>
                <td>
                  <div className="text-black text-xl tracking-wide">
                    Justin Beiber
                  </div>
                </td>
                <td>
                  <div className="text-mainGreen font-bold text-xl tracking-wide">
                    Joined
                  </div>
                </td>
                <td>
                  <div className="text-[#ADA6A6] text-xl tracking-wide">
                    Thur, Match 22nd 04:55pm
                  </div>
                </td>
              </tr>
              <tr>
                <td class="py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="red"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </td>
                <td>
                  <div className="text-black text-xl tracking-wide">
                    Will Smith
                  </div>
                </td>
                <td>
                  <div className="text-mainRed font-bold text-xl tracking-wide">
                    Leaved
                  </div>
                </td>
                <td>
                  <div className="text-[#ADA6A6] text-xl tracking-wide">
                    Thur, Match 22nd 04:55pm
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
