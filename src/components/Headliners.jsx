import headliners from "../data/headliners";
import CarouselCard from "./CarouselCard";

function Headliners() {
  return (
    <div className="max-w-screen-lg mx-auto mt-20 p-4 text-zinc-900 dark:text-zinc-200">
      <h2>Headliners</h2>
      <p>
        Experience the sonic delight from these made-up artists across 7 days
        that music fans are calling “one of the many gigs that will happen this
        year”
      </p>
      <div className="scroll-smooth pb-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto ">
        {headliners.map((cardData) => (
          <CarouselCard cardData={cardData} key={cardData.backgroundImage} />
        ))}
      </div>
    </div>
  );
}

export default Headliners;
