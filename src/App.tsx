import { RecordsProvider } from './contexts/RecordsContext';

import { RecordBox } from './components/RecordBox';
import { RecordsList } from './components/RecordsList';

import iconMoon from './assets/images/icons/dark-mode.svg';

function App() {
  function handleDarkMode() {
    const html = document.querySelector('html');

    if (html) {
      html.classList.toggle('dark');
    }
  }

  return (
    <main className="container mx-auto lg:grid lg:grid-cols-11 lg:gap-x-32 lg:px-0 px-4">
      <button 
        type="button"
        className="lg:fixed lg:right-10 lg:top-10 lg:z-10 lg:mb-0 mb-5 lg:ml-0 ml-auto w-10 h-10 bg-white dark:bg-text rounded-custom shadow flex justify-center items-center border border-black dark:border-white transition-transform duration-500 lg:transform hover:scale-110"
        onClick={ handleDarkMode }
      >
        <img src={ iconMoon } alt="Moon" className="w-6 h-6 dark:invert" />
      </button>

      <RecordsProvider>
        <section className="lg:col-span-5 lg:mb-0 mb-8">
          <RecordBox />
        </section>

        <section className="lg:col-span-6">
          <RecordsList />
        </section>
      </RecordsProvider>
    </main>
  );
}

export default App;
