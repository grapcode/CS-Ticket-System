import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { Suspense } from 'react';
import Loading from './components/Loading';

const fetchLink = async () => {
  const result = await fetch('/data.json');
  return result.json();
};

function App() {
  const fetchPromise = fetchLink();
  // console.log(fetchPromise);

  return (
    <>
      {/* ⚡ navbar component --> 01 */}
      <Navbar />

      <section>
        {/* ⚡ carts component --> 03 */}
        <Suspense fallback={<Loading></Loading>}>
          <Cards fetchPromise={fetchPromise} />
        </Suspense>
      </section>

      {/* ⚡ Footer section --> 04 */}
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
