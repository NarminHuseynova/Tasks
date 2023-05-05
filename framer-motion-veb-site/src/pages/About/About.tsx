import { useRef } from "react";
import { Nav } from "../../components/Nav";
import { useInView } from "framer-motion";
import about from "../../assets/about.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function About() {
  return (
    <>
      <div>
        <div>
          <img
            style={{
              width: 200,
              height: 200,
              position: "absolute",
              left: "45%",
              top: "20%",
            }}
            src={about}
            alt=""
          />
        </div>
        <Section>
          OPTİMA ŞİRKƏTLƏR QRUPU 2003-cü ildən bəri müəssisələrin
          avtomatlaşdırılması üzrə xidmət göstərir. Şirkətimizin missiyası—
          Təcrübəmizi, müasir avadanlıqlar və sistemlər üzərində qurulmuş
          avtomatlaşdırma strategiyamızı tətbiq edərək brendiniz üçün dəyər
          yaratmaq, işi fəaliyyətinizi daha səmərəli etmək
        </Section>
        <div>
          <img
            style={{
              width: 200,
              height: 200,
              position: "absolute",
              left: "45%",
              top: "115%",
            }}
            src={about1}
            alt=""
          />
        </div>
        <Section>
          OPTİMA ŞİRKƏTLƏR QRUPU 2003-cü ildən bəri müəssisələrin
          avtomatlaşdırılması üzrə xidmət göstərir. Şirkətimizin missiyası—
          Təcrübəmizi, müasir avadanlıqlar və sistemlər üzərində qurulmuş
          avtomatlaşdırma strategiyamızı tətbiq edərək brendiniz üçün dəyər
          yaratmaq, işi fəaliyyətinizi daha səmərəli etmək
        </Section>
        <div>
          <img
            style={{
              width: 200,
              height: 200,
              position: "absolute",
              left: "45%",
              top: "215%",
            }}
            src={about2}
            alt=""
          />
        </div>
        <Section>
          OPTİMA regiondakı bizneslərə 360 dərəcə texnologiya xidmətləri
          göstərən ilk seçim tərəfdaşı olacaq. Biz müştərilərimizin uğurlarının
          ayrılmaz hissəsinə çevrilərək bizneslərinin avtomatlaşdırılması
          prosesinin təşkili və idarə edilməsi vasitəsilə uzunmüddətli biznes
          dəyəri yaradacağıq və strateji məqsədlərinə nail olmaq üçün onlarla
          əməkdaşlıq edəcəyik. İstedadlı, təcrübəli və həvəsli mütəxəssislərdən
          ibarət komandamız öz sahələrində ən yaxşısı kimi tanınacaq. Bizim
          davamlı uğurlarımız tərəfdaşlarımıza daha yüksək səviyyəli xidmət
          göstərməyimizə təkan verəcək.
        </Section>
        <div>
          <img
            style={{
              width: 200,
              height: 200,
              position: "absolute",
              left: "45%",
              top: "315%",
            }}
            src={about3}
            alt=""
          />
        </div>
        <Section>
          Dəyərlərimiz OPTİMA şirkətlər qrupunun əsasını qoyduğumuz rəhbər
          prinsiplərdir və gündəlik olaraq işimizi dəyərlərimizi əks etdirəcək
          şəkildə aparmağa çalışırıq. Dəyərlər gələcəyi formalaşdırarkən dünyaya
          baxışımızı müəyyən edir. İş mühitində necə davrandığımızı onlar
          müəyyənləşdirir.
        </Section>
      </div>
      <Nav />
    </>
  );
}

export default About;
