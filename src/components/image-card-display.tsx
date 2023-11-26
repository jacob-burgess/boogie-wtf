import ImageCard, { type ImageCardProps } from "~/components/image-card";
import chargersCheifs from "../../public/images/chargers-cheifs.jpg";
import chargersTailgate from "../../public/images/chargers-tailgate.jpg";
import collarBone from "../../public/images/collar-bone.jpg";
import dadChargersYoung1 from "../../public/images/dad-chargers-young-1.jpg";
import dadChargersYoung2 from "../../public/images/dad-chargers-young-2.jpg";
import dadPadres from "../../public/images/dad-padres.jpg";
import forearm from "../../public/images/forearm.jpg";

type ImageCardGroup = {
  title?: string;
  imageCards: ImageCardProps[];
};

const imageGroups: ImageCardGroup[] = [
  // {
  //   title: "College days",
  //   imageCards: [
  //     {
  //       src: barBugs,
  //       alt: "debugging in the bar",
  //       caption:
  //         "I wrote my first line of code in college and immediately fell in love. Here's me getting some debuggin work in before the bar got too crowded:",
  //     },
  //   ],
  // },
  {
    title: "My dad got me into San Diego sports early (thanks dad 🙄)",
    imageCards: [
      {
        src: [dadChargersYoung2, dadChargersYoung1],
        alt: "dad chargers young 1",
        caption: "We used to get dressed up pretty good for the games...",
      },
      {
        src: dadPadres,
        alt: "dad and i at a padres game",
        caption: "My dad and I (more recently) at a padres playoff game!",
      },
    ],
  },
  {
    title: "Now I try to travel to at least one game a year",
    imageCards: [
      {
        src: chargersCheifs,
        alt: "chargers cheifs",
        caption:
          "My friends and I at Arrowhead Stadium in Kansas City for a Chargers game. (we lost)",
      },
      {
        src: chargersTailgate,
        alt: "chargers tailgate",
        caption: "Tailgating was still fun though...",
      },
    ],
  },
  {
    title: "I used to enjoy snowboarding a lot...",
    imageCards: [
      {
        src: collarBone,
        alt: "collar bone",
        caption: "One collar bone and two forearm bones later...",
      },
      {
        src: forearm,
        alt: "forearm",
        caption: "... I've decided I'll stick to skiing",
      },
    ],
  },
];

const ImageCardDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {imageGroups.map((group, i) => (
        <div key={i} className="border-2 border-foreground p-2">
          <h1 className="py-4 text-center text-xl font-bold">{group.title}</h1>
          <div className="flex flex-row justify-center gap-4">
            {group.imageCards.map((imageCard, j) => (
              <ImageCard key={`${i}-${j}`} {...imageCard} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardDisplay;
