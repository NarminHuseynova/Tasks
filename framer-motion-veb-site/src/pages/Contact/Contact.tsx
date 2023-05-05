import { useRef } from "react";
import { Nav } from "../../components/Nav";
import { useInView } from "framer-motion";
import {
  FieldTimeOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

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

function Contact() {
  return (
    <>
      <div>
        <Section>
          <HomeOutlined style={{ marginRight: 10, marginBottom: 20 }} />
          ÜNVAN: AZ1075, Azərbaycan, Bakı şəh., Əhməd Rəcəbli 156, ofis 63{" "}
          <br></br>
          <PhoneOutlined style={{ marginRight: 10, marginBottom: 20 }} />
          ƏLAQƏ NÖMRƏSİ: +994 12 310 26 27 (çoxkanallı) <br></br>
          <FieldTimeOutlined style={{ marginRight: 10, marginBottom: 20 }} />
          İŞ SAATLARI: Bazar ertəsi-cümə 9:00-dan 18:00-a qədər <br></br>
          <MailOutlined style={{ marginRight: 10 }} />
          EMAIL ÜNVAN: order@optima.az <br></br>
        </Section>
      </div>
      <Nav />
    </>
  );
}

export default Contact;
