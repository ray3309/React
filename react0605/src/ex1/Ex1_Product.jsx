import React from 'react'
import "../css/Product.css"

const Ex1_Product = () => {

    const Product = [{num:1, ptitle:"연필세트",pcont:"상품1 : 연필세트",price:120000,img:"images/prod1.jpg",pdate:"2025-11-13"},
                    {num:1, ptitle:"의류세트",pcont:"상품2 : 의류셋트",price:250000,img:"images/prod2.jpg",pdate:"2025-11-13"},
                    {num:1, ptitle:"연말세트",pcont:"상품3 : 연말세트",price:300000,img:"images/prod3.jpg",pdate:"2025-11-13"}]
    return (
      <div id="container">
      <h1>신상품 목록</h1>
    
      <ul className="prod-list">
        {
            Product.map((ProductV, index) =>(
                <li key={index}>                
                    <img className='img' src={ProductV.img} alt={ProductV.ptitle}/>
                    <div className="caption">
                        <h2>{ProductV.ptitle}</h2>
                        <p>{ProductV.pcont}</p>
                        <p>가격:{ProductV.price}원</p>
                        <p>출시일:{ProductV.pdate}</p>
                    </div>
                </li>        
          ))}
       </ul>       
    </div>
    )
}

export default Ex1_Product;