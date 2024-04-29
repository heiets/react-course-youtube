import './Card.css';

export const Card = (props) => {
  return (
    <div className="Card">
      <div className="MainInfo">
        <div className="Title">
          {props.name}
        </div>
        <div className="Description">
          Cloudy
        </div>
        <div className="Temperature">
          20
        </div>
      </div>
      <div className="Information">
        <div>
          Humidity: 15
        </div>
        <div>
          Feels like: 19
        </div>
      </div>
    </div>
  );
};
