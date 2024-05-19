import { StoreContext } from 'src/state/store'
import './Main.css'
import Slider from './Slider/Slider'
import React, { useEffect, useState } from 'react'
import Discounts from 'src/components/Discounts/Discounts'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Main = () => {
  const filmsURL = 'http://127.0.0.1:8000/api/v1/promocodes/'
  // const filmsN = useSelector(state => state.films.films)
  const [films, setFilms] = useState<any>('')
  const getFilms = async () => {
    await axios
      .get(filmsURL)
      .then(res=>setFilms(res.data.results))
  }
  useEffect(() => {
    getFilms()
  }, [])

  return (
    <main>
      <div className="container">
        <Slider films={films}/>
        <Discounts films={films} title={'Новинки'}/>
        <Discounts films={films} title={'Рекомендации'}/>
      </div>
    </main>
  )
}

export default Main