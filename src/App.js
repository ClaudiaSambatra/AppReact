import backg from "./background.jpg";
import './App.css';

function App() {
  return (
    <main className="container mx-auto p-4">
      <section
        className="my-8 bg-cover bg-center relative h-[400px] lg:h-[600px]"
        style={{ backgroundImage: `url(${backg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-white p-8 flex flex-col items-center justify h-full">
          <h1 className="text-4xl font-bold mb-4 text-center">Les Tendances en Design Web Qui Captivent Vos Visiteurs</h1>
    
        </div>
      </section>
    </main>
  );
}

export default App;
