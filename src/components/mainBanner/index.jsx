import MainCatDogImg from "../../assets/img/main-cat-dog.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full">
        <div className="bg-accent"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src={MainCatDogImg}
          alt="Cat and Dog being cute"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-start">
          <h1 className="pt-16 pl-8 font-bold leading-snug text-white text-8xl">
            Amazing Discounts <br />
            on Pets Products!
          </h1>
          <Link className="w-fit" to="/all-sales">
            <Button>Check Out</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
