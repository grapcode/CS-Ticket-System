import React from 'react';

const Card = ({ card, onClick }) => {
  // console.log(card.id);

  // const handleClick = () => {
  //   // console.log('clicked card');
  //   const currentData = data.find((elem) => elem.id == card.id);
  //   // console.log(currentData);

  //   if (currentData.status == 'Open') {
  //     currentData.status = 'In Progress';
  //   }
  // };
  return (
    <div>
      {/* ⚡ cart */}
      <div
        onClick={onClick} //🔰 parent --> click handle
        className="shadow-xl rounded-lg p-3 bg-white"
      >
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">{card.title}</h4>
          <button
            className={` py-1 px-3 rounded-full cursor-pointer font-medium flex items-center ${
              card.status == 'Open' ? 'bg-green-200' : 'bg-yellow-100'
            }`}
          >
            <span
              className={`mr-2 w-4 h-4 rounded-full ${
                card.status == 'Open' ? 'bg-green-600' : 'bg-yellow-500'
              }`}
            ></span>
            {card.status}
          </button>
        </div>
        <p className="text-black my-3">{card.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <p>#{card.id}</p>
            <p
              className={`font-medium ${
                card.priority == 'High'
                  ? 'text-red-500'
                  : card.priority == 'Medium'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }`}
            >
              {card.priority}
            </p>
          </div>
          <div className="flex gap-4">
            <p>{card.customer}</p>
            <p>
              <span>📅</span> {card.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
