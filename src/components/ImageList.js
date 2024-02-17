import "../css/ImageList.css";
import { ImageShow } from "./ImageShow";

export function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <ImageShow image={image} />
          </div>
        );
      })}
    </div>
  );
}
