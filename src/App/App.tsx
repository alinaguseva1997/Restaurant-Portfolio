import React, {useState} from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {Error404Page} from "../view/pages/Error404Page";
import {HomePage} from "../view/pages/HomePage";
import {Header} from "../features/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {v1} from "uuid";
import {CardProduct} from "../features/CardProduct/CardProduct";

export type ProductsType = {
    id: string,
    title: string,
    description: string,
    weight: string,
    price: string
    section?: string
}

export type ProductArrayType = {
    [key: string]: ProductsType[]
}


function App() {

    const [products] = useState<ProductArrayType>({
        'coldSnacks': [
            {id: v1(), title: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225гр', price: '2506 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Гусь', description: 'Фаршированная апельсином и зеленым яблоком', weight: '293гр', price: '3250 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Индейка', description: 'Фаршированная апельсином и зеленым яблоком, курагой', weight: '269гр', price: '4250 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Курица', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '240гр', price: '2430 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Кролик', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '322гр', price: '1443 ₽', section: 'coldSnacks'},
            {id: v1(), title: 'Свинина', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '243гр', price: '2150 ₽', section: 'coldSnacks'},
        ],
            'hotSnacks': [
            {id: v1(), title: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225гр', price: '2506 ₽', section: 'hotSnacks'},
            {id: v1(), title: 'Курица', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '240гр', price: '2430 ₽', section: 'hotSnacks'},
            {id: v1(), title: 'Свинина', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '243гр', price: '2150 ₽', section: 'hotSnacks'},
        ],
            'meatSnacks': [
            {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽', section: 'meatSnacks'},
        ],
            'soaps': [
            {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽', section: 'soaps'},
            {id: v1(), title: 'Гусь', description: 'Фаршированная апельсином и зеленым яблоком', weight: '293гр', price: '3250 ₽', section: 'soaps'},
        ],
            'fishSnacks': [
            {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽', section: 'fishSnacks'},
            {id: v1(), title: 'Гусь', description: 'Фаршированная апельсином и зеленым яблоком', weight: '293гр', price: '3250 ₽', section: 'fishSnacks'},
            {id: v1(), title: 'Индейка', description: 'Фаршированная апельсином и зеленым яблоком, курагой', weight: '269гр', price: '4250 ₽', section: 'fishSnacks'},
        ],
            'grillMenu': [
            {id: v1(), title: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225гр', price: '2506 ₽', section: 'grillMenu'},
            {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽', section: 'grillMenu'},
            {id: v1(), title: 'Индейка', description: 'Фаршированная апельсином и зеленым яблоком, курагой', weight: '269гр', price: '4250 ₽', section: 'grillMenu'},
            {id: v1(), title: 'Свинина', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '243гр', price: '2150 ₽', section: 'grillMenu'},
        ],
            'brandedMenu': [
            {id: v1(), title: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225гр', price: '2506 ₽', section: 'brandedMenu'},
            {id: v1(), title: 'Индейка', description: 'Фаршированная апельсином и зеленым яблоком, курагой', weight: '269гр', price: '4250 ₽', section: 'brandedMenu'},
            {id: v1(), title: 'Курица', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '240гр', price: '2430 ₽', section: 'brandedMenu'},
        ],
        'drinks': [
            {id: v1(), title: 'Квас ананасовый', description: 'летний освежающий напиток', weight: '225гр', price: '2506 ₽', section: 'drinks'},
            {id: v1(), title: 'Гриссини', description: 'изысканный вкус, легкий аромат ванили, со вкусом клубники', weight: '225гр', price: '2506 ₽', section: 'drinks'},
        ]
    })
    const [dopProduct] = useState<ProductsType[]>( [
        {id: v1(), title: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225гр', price: '2506 ₽'},
        {id: v1(), title: 'Индейка', description: 'Фаршированная апельсином и зеленым яблоком, курагой', weight: '269гр', price: '4250 ₽'},
        {id: v1(), title: 'Курица', description: 'Фаршированный гречневой кашей и зеленым яблоком', weight: '240гр', price: '2430 ₽'},
        {id: v1(), title: 'Утка', description: 'Фаршированная апельсином и зеленым яблоком', weight: '269гр', price: '3340 ₽'},
    ])

  return (
          <main className='w-full h-wull bg-base overflow-y-hidden'>
              <Header />
              <Routes>
                  <Route path='/home' element={<HomePage products={products}/>}/>
                  <Route path='/' element={<Navigate to='/home'/>}/>
                  <Route path='/product-card/:productId' element={<CardProduct productList={products} dopProductData={dopProduct}/>}/>
                  <Route path='/error404' element={<Error404Page />}/>
                  <Route path='/*' element={<Navigate to='/error404'/>}/>
              </Routes>
              <Footer />
          </main>
  );
}

export default App;
