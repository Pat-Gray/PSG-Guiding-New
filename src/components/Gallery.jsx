// eslint-disable-next-line react/prop-types


const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => {
        return (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery; 