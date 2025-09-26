import React from 'react';
import BannerImg from '../assets/vector1.png';

const CountBox = ({ data }) => {
  // console.log(data)
  // count In-Progress
  const inProgressData = data.filter(
    (element) => element.status == 'In-Progress'
  );
  const resolvedData = data.filter((element) => element.status == 'Resolved');
  return (
    <div>
      {/* ⚡ count component  */}

      <div className="container mx-auto py-6 px-2 md:grid grid-cols-2 gap-5 ">
        <div className="flex justify-between items-center rounded-lg bg-linear-to-bl mt-3 from-[#632EE3] to-[#9F62F2] text-white text-center bg-url[./assets/vector1.png]  ">
          <img className="md:h-40 h-30 " src={BannerImg} alt="" />
          <div>
            <h4 className=" text-xl md:text-2xl mb-3">In-Progress</h4>
            <h2 className="font-bold text-2xl md:text-5xl">
              {inProgressData.length}
            </h2>
          </div>
          <img className="md:h-40 h-30  rotate-y-180 " src={BannerImg} alt="" />
        </div>
        <div className="flex justify-between items-center rounded-lg bg-linear-to-r mt-3 from-[#54CF68] to-[#00827A] text-white text-center bg-url[./assets/vector1.png]  ">
          <img className="md:h-40 h-30 " src={BannerImg} alt="" />
          <div>
            <h4 className=" text-xl md:text-2xl mb-3">Resolved</h4>
            <h2 className="font-bold text-2xl md:text-5xl">
              {resolvedData.length}
            </h2>
          </div>
          <img className="md:h-40 h-30  rotate-y-180 " src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CountBox;
