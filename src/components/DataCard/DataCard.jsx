const DataCard = ({ data }) => {
  const { id, estate_title, price, status, area, location, image } = data;

  return (
    <div className="card  bg-white shadow-xl mt-8">
      <figure>
        <img className=" rounded-tr-0 rounded-br-[40px] h-[356px] w-full object-cover object-center rounded-bl-0"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
