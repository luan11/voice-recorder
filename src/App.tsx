import { RecordsProvider } from './contexts/RecordsContext';

import { RecordBox } from './components/RecordBox';
import { RecordsList } from './components/RecordsList';

function App() {
  return (
    <main className="container mx-auto grid grid-cols-11 gap-x-32">
      <RecordsProvider>
        <section className="col-span-5">
          <RecordBox />
        </section>

        <section className="col-span-6">
          <RecordsList />
        </section>
      </RecordsProvider>
    </main>
  );
}

export default App;
