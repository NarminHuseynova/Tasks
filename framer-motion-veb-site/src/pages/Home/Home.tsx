import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import "../../styles.css";
import { Nav } from "../../components/Nav";

const data = [
  {
    id: 1,
    title: "Veb səhifələr",
    image:
      "https://images.unsplash.com/photo-1630659509436-7397fbda30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Masaüstü proqramlar",
    image:
      "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Dizayn",
    image:
      "https://images.unsplash.com/photo-1588811752802-af42bad9f378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Mobil tətbiqlər",
    image:
      "https://images.unsplash.com/photo-1620794511798-d7ba5299a087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHByb2dyYW1tZXIlMjBtb2JpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "IT",
    image:
      "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({
  image,
  id,
  title,
}: {
  image: any;
  id: number;
  title: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`${image}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#${title}`}</motion.h2>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {data.map((item) => (
        <Image image={item.image} id={item.id} title={item.title} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
    </>
  );
}
