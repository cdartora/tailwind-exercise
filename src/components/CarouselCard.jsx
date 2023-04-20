function CarouselCard({ cardData }) {
  const { backgroundImage, artist, info } = cardData;
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
      ></div>
      <h5 className="mt-2">{artist}</h5>
      <h6>{info}</h6>
    </div>
  );
}

export default CarouselCard;
