import React from 'react'

function Product(props){
    return(
        <div className="container">
            <div className="row teal">
                <span className="flow-text col s12">{props.content.name}</span>
                <span className="flow-text col s12">{props.content.price}$</span>
                <span className="flow-text col s12">{props.content.description}</span>
            </div>
        </div>
    )
}
export default Product;