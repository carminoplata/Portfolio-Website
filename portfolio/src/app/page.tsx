'use client'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context';
import Loading from './loading';
import NavBar from '@/components/navbar';
import Hello from '@/components/home';

export default function Home(){
  const [load, setLoad] = useState(true);
  const theme = useContext(ThemeContext);
  return (
      <div>
        <Loading load={load} onTimeout={() => setLoad(false)} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <Hello />
        </div>
      </div>
  )
}
