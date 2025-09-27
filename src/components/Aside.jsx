import React from 'react';

const Aside = ({ selectedCard, resolvedCard, handleComplete }) => {
  // console.log(cards);
  // const handleBtn = (removeCard) => {
  //   // console.log('clicked btn');
  //   toast.success('Completed');
  // };
  return (
    <div>
      {/* ⚡ aside section */}
      <aside>
        {/* Task Status */}
        <div>
          <h2 className="text-xl font-semibold text-[#34485A]">Task Status</h2>
          {!selectedCard.length ? (
            <p className="text-gray-600">
              Select a ticket to add to Task Status
            </p>
          ) : (
            selectedCard.map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 my-3">
                <h2 className="text-lg font-semibold mb-2 text-[#34485A]">
                  {card.title}
                </h2>
                <button
                  onClick={() => handleComplete(card)}
                  className=" py-2 px-3 rounded-md w-full bg-green-600 text-white"
                >
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
          {!resolvedCard.length ? (
            <p className="text-gray-600">No resolved tasks yet.</p>
          ) : (
            resolvedCard.map((card) => (
              <div key={card.id} className="bg-green-100 rounded-md p-2 my-3">
                <h2 className="text-lg font-semibold mb-2 text-[#34485A]">
                  ✅ {card.title} Completed
                </h2>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
};

export default Aside;
