import React from 'react';

const Aside = ({ cards }) => {
  //   console.log(data);
  return (
    <div>
      {/* ⚡ aside section */}
      <aside>
        {/* Task Status */}
        <div>
          <h2 className="text-xl font-semibold text-[#34485A]">Task Status</h2>
          {!cards.length ? (
            <p className="text-gray-600">
              Select a ticket to add to Task Status
            </p>
          ) : (
            cards.map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 my-3">
                <h2 className="text-lg font-semibold mb-2 text-[#34485A]">
                  {card.title}
                </h2>
                <button className=" py-2 px-3 rounded-md w-full bg-green-600 text-white">
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
        {/* Resp;ved Task */}
        <div>
          <h2 className="text-xl font-semibold text-[#34485A]">
            Resolved Task
          </h2>
          <p className="text-gray-600">No resolved tasks yet.</p>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
