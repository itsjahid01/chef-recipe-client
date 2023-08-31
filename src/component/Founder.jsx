import React from "react";
import img from "../assets/web_recipe_banner.jpg";

const Founder = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen bg-fixed"
    >
      <div className=" text-white px-20 py-20  min-h-screen ">
        <p className="mb-5">MESSAGE FROM FOUNDER</p>
        <p className="text-6xl font-bold mb-5">
          First, we eat. Then, we <br /> do everything else.
        </p>
        <p>
          Consectetur quisque per vel ac aptent praesent convallis aliquam
          montes. <br /> Lectus sit inceptos dis dui mattis ad morbi leo luctus
          duis. Mauris neque dictumst <br /> letius consequat senectus potenti
          ad.
          <br />
          <br />
          Consectetur quisque per vel ac aptent praesent convallis aliquam
          montes. <br /> Lectus sit inceptos dis dui mattis ad morbi leo luctus
          duis. Mauris neque dictumst <br /> letius consequat senectus potenti
          ad.
        </p>
      </div>
    </div>
  );
};

export default Founder;
