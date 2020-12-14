import React from 'react'

function Product(props){
    return(
        <div className="container">
            <div className="row">
                <span className="flow-text col s12">{props.content.name}</span>
                <span className="flow-text col s12">
                    {props.content.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}-
                    {props.content.description}
                </span>
                
            </div>
        </div>
    )
}
export default Product;