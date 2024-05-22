import { useState } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState(null);

  
  function getAdvice(keyword) {
    axios.get(`https://api.adviceslip.com/advice/search/${keyword}`)
      .then(res => {
        setAdvice(res.data.slips[0].advice);
      });
  }

  
  function reset() {
    setAdvice(null);
  }

  return (
    <>

    <div className="card mb-5">

      <h1 className='text-center mt-5'>Gerador de Conselhos</h1>
      <p className='text-center'>clique em algum botão para gerar um conselho!</p>

    
      <div className='container text-center'>
        <div className='row m-5 '>
          <div className='col'>
            <button onClick={() => getAdvice('dog')} className='btn btn-success me-2'>Conselho Dog</button>
            <button onClick={() => getAdvice('cat')} className='btn btn-success me-2'>!Conselho Cat</button>
            <button onClick={() => getAdvice('study')} className='btn btn-success me-2'>!Conselho Study</button>
            <button onClick={() => getAdvice('smile')} className='btn btn-success me-2'>Conselho Smile</button>
            <button onClick={() => getAdvice('men')} className='btn btn-success me-2'>Conselho Men</button>
            <button onClick={() => getAdvice('')} className='btn btn-success me-2'>Conselho Aleatório</button>
          </div>
       
        </div>
      </div>

    
      {advice && (
        <>
          <div className='row m-5 mb-0'>
            <div className=' text-center'>
              <h2>Conselho</h2>
              <p>{advice}</p>
            </div>
          </div>
          <div className='m-5 mt-5 row'>
            <span onClick={reset} className='btn btn-danger btn-sm'>Limpar</span>
          </div>
        </>
      )}
      </div>
      
    </>
  );
}

export default App;
