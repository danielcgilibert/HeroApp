import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div>
      <div className="card ms-3 animate__animated animate__backInRight" style={ { maxWidth: 540} }>
        <div className="row no-gutters">
          <div className="col-md-4 mx-auto text-center">
            <img
              src={`./assets/heroes/${id}.jpg`}
              alt="..."
              className="img-thumbnail mx-auto d-block"
            />
            
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                  (alter_ego !== characters)
                  && <p className="card-text" >{ characters }</p>
              }
                 <p className="text-muted">{first_appearance}</p>

                 <Link to={`./hero/${id}`} className="btn btn-info">
                        Más...
                 </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
