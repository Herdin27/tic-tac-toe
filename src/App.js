import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [change, setChange] = useState(false)
  const [pilihan, setPilihan] = useState('')
  const [jumlah, setJumlah] = useState(0)
  const [choice, setChoice] = useState({
    urutan: '',
    value: ''
  })

  const handleRestart = () => {
    localStorage.clear()
    setChoice({
      urutan: '',
      value: ''
    })
  }

  const handleChange = (e) => {
    /**
      * this X session
      */
    if (localStorage.getItem(`answer0`) === 'x' && localStorage.getItem(`answer3`) === 'x' && localStorage.getItem(`answer6`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer1`) === 'x' && localStorage.getItem(`answer4`) === 'x' && localStorage.getItem(`answer7`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer2`) === 'x' && localStorage.getItem(`answer5`) === 'x' && localStorage.getItem(`answer8`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer0`) === 'x' && localStorage.getItem(`answer1`) === 'x' && localStorage.getItem(`answer2`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer3`) === 'x' && localStorage.getItem(`answer4`) === 'x' && localStorage.getItem(`answer5`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer6`) === 'x' && localStorage.getItem(`answer7`) === 'x' && localStorage.getItem(`answer8`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer0`) === 'x' && localStorage.getItem(`answer4`) === 'x' && localStorage.getItem(`answer8`) === 'x') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer2`) === 'x' && localStorage.getItem(`answer4`) === 'x' && localStorage.getItem(`answer6`) === 'x') {
      alert('permainan selesai !')
    }

    /**
     * this O session
     */
    if (localStorage.getItem(`answer0`) === 'o' && localStorage.getItem(`answer3`) === 'o' && localStorage.getItem(`answer6`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer1`) === 'o' && localStorage.getItem(`answer4`) === 'o' && localStorage.getItem(`answer7`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer2`) === 'o' && localStorage.getItem(`answer5`) === 'o' && localStorage.getItem(`answer8`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer0`) === 'o' && localStorage.getItem(`answer1`) === 'o' && localStorage.getItem(`answer2`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer3`) === 'o' && localStorage.getItem(`answer4`) === 'o' && localStorage.getItem(`answer5`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer6`) === 'o' && localStorage.getItem(`answer7`) === 'o' && localStorage.getItem(`answer8`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer0`) === 'o' && localStorage.getItem(`answer4`) === 'o' && localStorage.getItem(`answer8`) === 'o') {
      alert('permainan selesai !')
    }
    if (localStorage.getItem(`answer2`) === 'o' && localStorage.getItem(`answer4`) === 'o' && localStorage.getItem(`answer6`) === 'o') {
      alert('permainan selesai !')
    }

    if (!localStorage.getItem('answer')) {
      return alert('Pilihan belum diisi !')
    }

    if (!localStorage.getItem(`answer${e.target.id}`)) {
      localStorage.setItem(`answer${e.target.id}`, localStorage.getItem('answer'))
      setJumlah(jumlah + 1)
    }
    setChoice({
      urutan: e.target.value,
      value: localStorage.getItem('answer')[e.target.id]
    })
  }

  const handleDisplay = (e) => {
    localStorage.setItem(`answer`, e.target.value)
    setPilihan(e.target.value)
  }

  return (
    <div className='min-h-screen grid grid-rows-7 text-9xl gap-4 bg-white pb-20'>
      <div className='keterangan flex justify-between mx-2'>
        <p type="" className='font-bold text-4xl'>1P</p>
        <p type="" className='font-bold text-4xl'>2P</p>
      </div>
      <div className='grid grid-cols-2 gap-5 mx-auto'>
        <button type="" className='btn btn-outline text-4xl mx-auto' onClick={handleRestart}><FontAwesomeIcon icon={faArrowRotateLeft} /></button>
        <button type="" className='btn btn-outline text-4xl' onClick={() => change ? setChange(false) : setChange(true)}><FontAwesomeIcon icon={faArrowRightArrowLeft} /></button>
      </div>
      <p className='text-2xl text-center'>PILIHAN : {pilihan}</p>
      <div className='grid grid-cols-2 gap-5 mx-auto'>
        {change ?
          <>
            <button type="" className='btn btn-outline text-4xl' value='o' onClick={handleDisplay}>O</button>
            <button type="" className='btn btn-outline text-4xl' value='x' onClick={handleDisplay}>X</button>
          </> :
          <>
            <button type="" className='btn btn-outline text-4xl' value='x' onClick={handleDisplay}>X</button>
            <button type="" className='btn btn-outline text-4xl' value='o' onClick={handleDisplay}>O</button>
          </>}
      </div>
      <div className='grid grid-cols-3 gap-3 mx-auto'>
        <button type="" id='0' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer0`)}</button>
        <button type="" id='1' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer1`)}</button>
        <button type="" id='2' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer2`)}</button>
      </div>
      <div className='grid grid-cols-3 gap-3 mx-auto'>
        <button type="" id='3' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer3`)}</button>
        <button type="" id='4' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer4`)}</button>
        <button type="" id='5' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer5`)}</button>
      </div>
      <div className='grid grid-cols-3 gap-3 mx-auto'>
        <button type="" id='6' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer6`)}</button>
        <button type="" id='7' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer7`)}</button>
        <button type="" id='8' className='btn btn-outline h-2/3 md:h-full w-28 md:w-44 my-auto text-6xl md:text-9xl' onClick={handleChange}>{localStorage.getItem(`answer8`)}</button>
      </div>
    </div >
  );
}

export default App;
