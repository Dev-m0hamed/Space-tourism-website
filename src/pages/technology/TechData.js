import rocket from "../../assets/technology/technology-image-A.jpg";
import rocketB from "../../assets/technology/technology-image-B.jpg";
import rocketC from "../../assets/technology/technology-image-C.jpg";
import spaceport from "../../assets/technology/technology-image-spaceport.jpg";
import spaceportB from "../../assets/technology/technology-image-spaceport-t.jpg";
import spaceportC from "../../assets/technology/technology-image-spaceport-d.jpg";
import capsule from "../../assets/technology/technology-image-capsule.jpg";
import capsuleB from "../../assets/technology/technology-image-capsule-t.jpg";
import capsuleC from "../../assets/technology/technology-image-capsule-d.jpg";

const technology = [
  {
    image: rocket,
    imageB: rocketB,
    imageC: rocketC,
    id: 1,
    title: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    image: spaceport,
    imageB: spaceportB,
    imageC: spaceportC,
    id: 2,
    title: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    image: capsule,
    imageB: capsuleB,
    imageC: capsuleC,
    id: 3,
    title: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default technology;
