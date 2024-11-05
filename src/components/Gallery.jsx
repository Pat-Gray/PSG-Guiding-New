// eslint-disable-next-line react/prop-types

import { useOptimizedImage } from '../utils/imageOptimization';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => {
        const imageProps = useOptimizedImage(image);
        return (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              {...imageProps}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery; 