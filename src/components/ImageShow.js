import "../css/ImageShow.css";

export function ImageShow({ image }) {
  return (
    <div className="container" style={{ backgroundColor: `${image.color}` }}>
      <div>
        <img src={image.urls.small} alt={image.alt_description} height={100} />
      </div>
      <div className="desc">
        <h2>{image.alt_description}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
}
