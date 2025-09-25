import React from 'react';

const Navbar = () => {
  return (
    <section className="shadow-sm">
      <nav className="flex flex-col  md:flex-row justify-between items-center  container mx-auto py-3 bg-white border-b-sky-50 ">
        <h1 className="text-2xl font-bold">CS — Ticket System</h1>
        <div className="flex md:flex-row flex-col gap-3">
          <div className="flex gap-3 ">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>

            <a href="">Contact</a>
          </div>
          <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2]  py-1 px-3 text-white rounded-sm cursor-pointer">
            + New Ticket
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
