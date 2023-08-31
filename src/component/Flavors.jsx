import img from "../assets/restraunts-uwuwuwuwu.jpg";

const Flavors = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-20">
      <div>
        <img src={img} alt="" className="rounded" />
      </div>
      <div className="mt-10">
        <p className="text-red-400 mb-5 font-semibold">WHO WE ARE</p>
        <p className="text-5xl font-bold mb-5">
          One thousand flavors in one place.
        </p>
        <p>
          Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac
          sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere
          sagittis turpis class vivamus penatibus ornare mollis donec
          scelerisque. <br /> <br /> Tortor scelerisque feugiat nibh ridiculus
          nisi si. Enim penatibus ac sed primis convallis fames taciti dolor
          tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus
          ornare mollis donec scelerisque.
        </p>
      </div>
    </div>
  );
};

export default Flavors;
