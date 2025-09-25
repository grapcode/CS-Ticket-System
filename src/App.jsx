import './App.css';
import Navbar from './components/Navbar';
import BannerImg from './assets/vector1.png';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* navbar component */}
      <Navbar />

      <section className="bg-[#f5f5f5]">
        {/* count component  */}

        <div className="container mx-auto py-6 px-2 md:grid grid-cols-2 gap-5 ">
          <div className="flex justify-between items-center rounded-lg bg-linear-to-bl mt-3 from-[#632EE3] to-[#9F62F2] text-white text-center bg-url[./assets/vector1.png]  ">
            <img className="md:h-40 h-30 " src={BannerImg} alt="" />
            <div>
              <h4 className=" text-xl md:text-2xl mb-3">In-Progress</h4>
              <h2 className="font-bold text-2xl md:text-5xl">0</h2>
            </div>
            <img
              className="md:h-40 h-30  rotate-y-180 "
              src={BannerImg}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center rounded-lg bg-linear-to-r mt-3 from-[#54CF68] to-[#00827A] text-white text-center bg-url[./assets/vector1.png]  ">
            <img className="md:h-40 h-30 " src={BannerImg} alt="" />
            <div>
              <h4 className=" text-xl md:text-2xl mb-3">In-Progress</h4>
              <h2 className="font-bold text-2xl md:text-5xl">0</h2>
            </div>
            <img
              className="md:h-40 h-30  rotate-y-180 "
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
        {/* cart component  */}
        <main className="container mx-auto ">
          <h2 className="text-xl font-semibold text-[#34485A]">
            Customer Tickets
          </h2>
          <section className="grid md:grid-cols-9 grid-cols-1 ">
            <div className="border col-span-7 grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* ⚡ cart */}
              <div className="shadow-xl rounded-lg p-3 bg-white">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">
                    Login Issues - Can't Access Account
                  </h4>
                  <button className="bg-[#b9f8cf] py-1 px-3 rounded-full cursor-pointer font-medium flex items-center text-black">
                    <span className="mr-2 w-4 h-4 bg-green-600 rounded-full "></span>
                    Open
                  </button>
                </div>
                <p className="text-black my-3">
                  Customer is unable to log in to their account. They've tried
                  resetting their password multiple times but still...
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <p>#1001</p>
                    <p className="text-red-500 font-medium">HIGH PRIORITY</p>
                  </div>
                  <div className="flex gap-4">
                    <p>John Smith</p>
                    <p>
                      <span>📅</span> 1/15/2024
                    </p>
                  </div>
                </div>
              </div>
              {/* ⚡ cart */}
              <div className="shadow-xl rounded-lg p-3 bg-white">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">
                    Login Issues - Can't Access Account
                  </h4>
                  <button className="bg-[#b9f8cf] py-1 px-3 rounded-full cursor-pointer font-medium flex items-center text-black">
                    <span className="mr-2 w-4 h-4 bg-green-600 rounded-full "></span>
                    Open
                  </button>
                </div>
                <p className="text-black my-3">
                  Customer is unable to log in to their account. They've tried
                  resetting their password multiple times but still...
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <p>#1001</p>
                    <p className="text-red-500 font-medium">HIGH PRIORITY</p>
                  </div>
                  <div className="flex gap-4">
                    <p>John Smith</p>
                    <p>
                      <span>📅</span> 1/15/2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ⚡ aside section */}
            <aside className="border col-span-2 px-2">
              <div>
                <h2 className="text-xl font-semibold text-[#34485A]">
                  Task Status
                </h2>
                <p className="text-gray-600">
                  Select a ticket to add to Task Status
                </p>
              </div>
              {/* ⚡ aside card */}
              {/* <div className="bg-white rounded-md p-2">
                <h2 className="text-xl font-semibold mb-2 text-[#34485A]">
                  Payment Failed - Card Declined
                </h2>
                <button className=" py-2 px-3 rounded-md w-full bg-green-600 text-white">
                  Complete
                </button>
              </div> */}
              <div>
                <h2 className="text-xl font-semibold text-[#34485A]">
                  Resolved Task
                </h2>
                <p className="text-gray-600">No resolved tasks yet.</p>
              </div>
            </aside>
          </section>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default App;
