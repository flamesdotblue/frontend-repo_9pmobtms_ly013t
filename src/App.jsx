import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ForDoctors from './components/ForDoctors';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ForDoctors />
        <section className="bg-black">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black text-sm font-bold">a</div>
                <span className="text-sm text-gray-300">appoint'd</span>
              </div>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} Appoint'd Health. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
