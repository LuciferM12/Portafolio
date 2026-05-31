import { Badge, ExternalLink } from "lucide-react";
import { motion, type Variants } from "motion/react";
import salesforce from "../assets/salesforce.png";
import azure from "../assets/azure.svg";
import unity from "../assets/unity.svg";
import databases from "../assets/databases.png";
import pmi from "../assets/pmi.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import html from "../assets/html.png";

type Certification = {
  img: ImageMetadata;
  alt: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
};

const certifications: Certification[] = [
  {
    img: salesforce,
    alt: "Salesforce Agentforce Specialist Certification Badge",
    title: "Salesforce Agentforce Specialist",
    issuer: "Salesforce",
    date: "08/2025",
    url: "https://www.salesforce.com/trailblazer/vhtpjffzrr7ad574xx",
  },
  {
    img: azure,
    alt: "Microsoft Azure Developer Associate Certification Badge",
    title: "Microsoft Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    date: "05/2025",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MARTINOMARROJASRODRIGUEZ-1723/6A1F5891F3EAA95?sharingId=42421401133DC90E",
  },
  {
    img: unity,
    alt: "Unity Certified User: Programmer Certification Badge",
    title: "Unity Certified User: Programmer",
    issuer: "Unity",
    date: "05/2025",
    url: "https://www.credly.com/badges/856b0780-b1e8-413c-8877-95fc98148574/public_url",
  },
  {
    img: databases,
    alt: "Databases Certification Badge",
    title: "IT Specialist - Databases",
    issuer: "Certiport, a Pearson VUE business",
    date: "02/2025",
    url: "https://www.credly.com/badges/6d6e2377-5fa3-4152-9cb8-451ad0812abe/public_url",
  },
  {
    img: pmi,
    alt: "PMI Certification Badge",
    title: "Project Management Ready",
    issuer: "Project Management Institute",
    date: "06/2024",
    url: "https://www.credly.com/badges/46b9cb13-5806-48bb-be0a-90cdcc408a73/public_url",
  },
  {
    img: python,
    alt: "Python Certification Badge",
    title: "IT Specialist - Python",
    issuer: "Certiport, a Pearson VUE business",
    date: "12/2023",
    url: "https://www.credly.com/badges/b8fa8221-4ac1-48c2-922b-4ec1ac18ded5/public_url",
  },
  {
    img: java,
    alt: "Java Certification Badge",
    title: "IT Specialist - Java",
    issuer: "Certiport, a Pearson VUE business",
    date: "06/2023",
    url: "https://www.credly.com/badges/189ef51c-9901-4c7f-b8e0-1adfbd7082bc/public_url",
  },
  {
    img: html,
    alt: "HTML Certification Badge",
    title: "IT Specialist - HTML",
    issuer: "Certiport, a Pearson VUE business",
    date: "07/2022",
    url: "https://www.credly.com/badges/72d928d9-80d1-433a-978c-740caa3a5034/public_url",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Certifications = () => {
  return (
    <div id="certifications" className="w-full min-h-screen box-border text-dark dark:text-light flex items-center justify-center">
      <div className="w-full p-4 flex flex-col items-start rounded-xl justify-center gap-8">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">My Certifications</h2>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px" }}
              className="flex items-center gap-4 dark:bg-secondary bg-light p-6 rounded-xl group"
            >
              <img
                src={cert.img.src}
                alt={cert.alt}
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <h3 className="font-bold text-lg leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 p-2 rounded-lg text-dark/30 dark:text-light/30 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label={`Ver certificación ${cert.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
