import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroupCategories from '../Cards/ButtonGroupCategories';
import './CategoriesStyle.css'

const CategoriesOneList = () => {
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allCategories`)
      .then((res) => setAllCategories(res.data)) //++

  }, [])

  const products = allCategories.filter(oneCategory => oneCategory.main_category_id === 1)
  const tech = allCategories.filter(oneCategory => oneCategory.main_category_id === 2)
  const servises = allCategories.filter(oneCategory => oneCategory.main_category_id === 3)



  return (
    <>

      <div className='buttonGroupOfCategory'>
        <div className='GoodsCategory'>
          <p>Категории товаров</p>
        </div>
        <div className='categoryLine'>
          <div className='buttonItem'>{!!products?.length && products.map(el => <ButtonGroupCategories {...el} key={el.id} />)}</div>
        </div>

        <div className='categoryLine'>
          <div className='buttonItem'>{!!servises?.length && servises.map(el => <ButtonGroupCategories {...el} key={el.id} />)}</div>
        </div>

        <div className='categoryLine'>

          <div className='buttonItem'>{!!tech?.length && tech.map(el => <ButtonGroupCategories {...el} key={el.id} />)}</div>
        </div >
      </div >
    </>
  )
}

export default CategoriesOneList
