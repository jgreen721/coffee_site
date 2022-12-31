import React, {useState} from 'react'
import CollectionCard from "./CollectionCard"

const Collections = () => {
    const [collections,setCollections] = useState([
        {id:1,name:"Gran Espresso",img:"./assets/home/desktop/image-gran-espresso.png",descr:"Light and flavorful blend with cocoa and black pepper for an intense experience"},

        {id:2,name:"Planato",img:"./assets/home/desktop/image-planalto.png",descr:"Brazillian dark roast with rich and velvety body, and hints of fruits and nuts"},
        {id:3,name:"Piccollo",img:"./assets/home/desktop/image-piccollo.png",descr:"Mild and smooth blend featuring notes of toasted almond and dried cherry"},
        {id:4,name:"Danche",img:"./assets/home/desktop/image-danche.png",descr:"Ethiopian hand-harvested blend densely packed with vibrant fruit notes"},
    ])
  return (
    <div className="collections">
        <div className="collections-header">
        <h1 className="collections-h1">our collection</h1>
        </div>
        <ul className="collections-list">
            {collections.map(c=>(
                <CollectionCard key={c.id} collection={c}/>
            ))}
        </ul>
    </div>
  )
}

export default Collections