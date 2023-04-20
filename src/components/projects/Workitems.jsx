import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className='project__card' key={item.id}>
        <img src={item.image} alt="" className='project__img'/>
        <h3 className="project__title">{item.title}</h3>
        
    </div>
  );
}

export default Workitems