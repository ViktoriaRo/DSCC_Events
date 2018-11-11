import React from 'react'

const EventDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">Event title - {id}</span>
              <p>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by me</div>
              <div>2nd septembber</div>
          </div>
      </div>
    </div>
  )
}

export default EventDetails
