// eslint-disable-next-line react/prop-types


const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => {
        return (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            <picture>
              <source
                srcSet={`${image}?w=400&format=webp`}
                type="image/webp"
              />
              <img
                src={`${image}?w=400`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                width="400"
                height="256"
              />
            </picture>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery; 