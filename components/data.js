import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/ucs_hero2.png";
import benefitTwoImg from "../public/img/ucs_hero3.png";
import benefitThreeImg from "../public/img/ucs_about.png";
import ucsLogo from "../public/ucs_logo.png";

const benefitOne = {
  title: "Highlights of UCS",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Goals of UCS",
  desc: "Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Eu volutpat odio facilisis mauris. Arcu non sodales neque sodales ut etiam. Vulputate eu scelerisque felis imperdiet proin fermentum. Adipiscing enim eu turpis egestas pretium. Semper viverra nam libero justo laoreet sit amet.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "About UCS",
  desc: "Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Eu volutpat odio facilisis mauris. Arcu non sodales neque sodales ut etiam. Vulputate eu scelerisque felis imperdiet proin fermentum. Adipiscing enim eu turpis egestas pretium. Semper viverra nam libero justo laoreet sit amet.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Lorem ipsum",
      desc: "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices",
      icon: <SunIcon />,
    },
  ],
};
const benefitFour = {
  title: "UCS by UODA",
  desc: "University of Development Alternative (UODA)",
  image: ucsLogo,
  bullets: [
    {
      title: "Faculty Of Engineering",
      desc: "6/3 Block-E, Lalmatia, Satmasjid Road, Dhaka-1207",
      icon: <LocationMarkerIcon />,
    },
    {
      title: "Contact",
      desc: "+88 01721830880 | Registrar : +88 01819260163 | E-mail:registrar@uoda.edu.bd",
      icon: <PhoneIcon />,
    },
  ],
};
export { benefitOne, benefitTwo, benefitThree, benefitFour };
