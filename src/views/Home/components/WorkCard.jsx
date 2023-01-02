import React from 'react'

const WorkCard = ({work}) => {
  return (
    <div className="work-card">
        <h1 className="work-h1">{work.number}</h1>
        <h2 className="work-title">{work.title}</h2>
        <p className="work-blurb">{work.blurb}</p>
    </div>
  )
}

export default WorkCard