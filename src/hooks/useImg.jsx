import { useEffect, useState } from "react";
import bug from "../images/types-icons/bug.svg";
import dark from "../images/types-icons/dark.svg";
import dragon from "../images/types-icons/dragon.svg";
import electric from "../images/types-icons/electric.svg";
import fairy from "../images/types-icons/fairy.svg";
import fighting from "../images/types-icons/fighting.svg";
import fire from "../images/types-icons/fire.svg";
import flying from "../images/types-icons/flying.svg";
import ghost from "../images/types-icons/ghost.svg";
import grass from "../images/types-icons/grass.svg";
import ground from "../images/types-icons/ground.svg";
import ice from "../images/types-icons/ice.svg";
import normal from "../images/types-icons/normal.svg";
import poison from "../images/types-icons/poison.svg";
import psychic from "../images/types-icons/psychic.svg";
import rock from "../images/types-icons/rock.svg";
import steel from "../images/types-icons/steel.svg";
import water from "../images/types-icons/water.svg";
import pokeball from "../images/pokeball.svg";

export const useImg = (name) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    switch (name) {
      case "bug":
        setImg(bug);
        break;
      case "dark":
        setImg(dark);
        break;
      case "dragon":
        setImg(dragon);
        break;
      case "electric":
        setImg(electric);
        break;
      case "fairy":
        setImg(fairy);
        break;
      case "fighting":
        setImg(fighting);
        break;
      case "fire":
        setImg(fire);
        break;
      case "flying":
        setImg(flying);
        break;
      case "ghost":
        setImg(ghost);
        break;
      case "grass":
        setImg(grass);
        break;
      case "ground":
        setImg(ground);
        break;
      case "ice":
        setImg(ice);
        break;
      case "normal":
        setImg(normal);
        break;
      case "poison":
        setImg(poison);
        break;
      case "psychic":
        setImg(psychic);
        break;
      case "rock":
        setImg(rock);
        break;
      case "steel":
        setImg(steel);
        break;
      case "water":
        setImg(water);
        break;
      case "pokeball":
        setImg(pokeball);
        break;
    }
  }, [name]);

  return { img };
};
