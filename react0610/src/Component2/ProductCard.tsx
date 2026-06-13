
import React from "react"
import Card from "./Card"


const ProductCard: React.FC = () => {

    return (
        <Card title = '맥북' backgroundColor="skyblue">
            <p>Apple 고성능 노트북</p>
            <p>가격: 5,800,000</p>
        </Card>
    )

}

export default ProductCard