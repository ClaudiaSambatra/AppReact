import backg from "./background.jpg"
import './App.css';

function App() {
  return (
    <main className="container mx-auto p-4">
    <section
      className="my-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backg})`, height: '300px' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Les Tendances en Design Web Qui Captivent Vos Visiteurs</h1>
       
      </div>
    </section>

      
    </main>
  );
}

export default App;
