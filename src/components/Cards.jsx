import React, { use, useState } from 'react';
import Card from './Card';
import CountBox from './CountBox';
import Aside from './Aside';
import { toast } from 'react-toastify';

const Cards = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  // console.log(data);
  const [selectedCard, setSelectedCard] = useState([]); // ❌ clicked cards এর জন্য  array

  // ⚡card থেকে click handle

  const handleCardClick = (clickedCard) => {
    // Toast
    toast.success(`"${clickedCard.title}" is now In-Progress`);

    // countBox update
    const updatedData = data.map((card) =>
      card.id === clickedCard.id ? { ...card, status: 'In-Progress' } : card
    );
    setData(updatedData);

    // aside update
    if (!selectedCard.find((card) => card.id === clickedCard.id)) {
      setSelectedCard([
        ...selectedCard,
        { ...clickedCard, status: 'In-Progress' },
      ]);
    }
  };

  return (
    <div className="bg-[#f5f5f5]">
      {/* ⚡ count box component --> 02 */}
      <CountBox data={data} />

      {/* ⚡ carts component  */}
      <main className="container mx-auto pb-8">
        <h2 className="text-xl font-semibold text-[#34485A] mb-2">
          Customer Tickets
        </h2>

        <section className="grid md:grid-cols-9 grid-cols-1 ">
          <div className="border col-span-7 grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* ⚡ card map */}
            {data.map((card) => (
              <Card
                key={card.id}
                card={card}
                data={data}
                setData={setData}
                onClick={() => handleCardClick(card)}
              ></Card>
            ))}
          </div>
          {/* ⚡ aside section */}
          <div className="border col-span-2 px-2">
            <Aside cards={selectedCard}></Aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cards;
