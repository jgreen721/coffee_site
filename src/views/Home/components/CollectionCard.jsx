import React from 'react'

const CollectionCard = ({collection}) => {
  return (
    <div className="collection-card">
        <img className='collection-img' src={collection.img} alt="product-img" />
        <div className="collection-content">
        <h3 className="collection-h3">{collection.name}</h3>
        <p className="collection-blurb">{collection.descr}</p>
        </div>
    </div>
  )
}

export default CollectionCard