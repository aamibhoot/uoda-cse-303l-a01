import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>UCS | UODA</title>
        <meta name="description" content="UODA Computer Society" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="UCS Benefits" title="Why join UCS?">
        Lorem mollis aliquam ut porttitor. Erat imperdiet sed euismod nisi. Odio
        morbi quis commodo odio. Mattis molestie a iaculis at erat pellentesque
        adipiscing commodo elit. Luctus venenatis lectus magna fringilla urna
        porttitor. Blandit massa enim nec dui nunc mattis enim ut. Tellus mauris
        a diam maecenas sed enim ut sem. Id donec ultrices tincidunt arcu non
        sodales neque sodales. Mi proin sed libero enim sed. Pellentesque massa
        placerat duis ultricies lacus sed turpis tincidunt id. Sed turpis
        tincidunt id aliquet risus feugiat in. Nunc congue nisi vitae suscipit
        tellus mauris a. Dolor purus non enim praesent elementum facilisis leo
        vel fringilla. Sit amet risus nullam eget felis eget nunc.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Proposed Sustainable Campus Design of University of Development Alternative (UODA)"
      >
        University of Development Alternative (UODA) started its journey with
        the noble mission of creating a new generation of skilled youths,
        self-reliant, forward-looking, vibrant individuals, with indomitable
        energy, and self-confidence. Our lofty mission also aims at giving our
        youths a strong moral grounding so that their lives may be balanced,
        sober, just, and content. In the university, we consistently strive to
        instill in our students the kind of education that leads to the creation
        of professional expertise, by providing the right kind of technical
        education on one hand and developing a balanced human resource through
        teaching intellectual skill and moral values, on the other. We want them
        to be experts in their fields, and be ethical human beings at the same
        time. The courses and curricula we have designed in the university
        reflect these intentions.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our former students said"
      >
        Pulvinar elementum integer enim neque volutpat ac tincidunt. Donec et
        odio pellentesque diam volutpat commodo sed egestas egestas. Volutpat
        sed cras ornare arcu. Nibh mauris cursus mattis molestie. Diam quam
        nulla porttitor massa id neque aliquam.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
