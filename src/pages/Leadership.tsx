import { Layout } from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Linkedin, Mail, Award, Briefcase, GraduationCap } from "lucide-react";

// Executive Management Photos
import sylvesterMensahImg from "@/assets/leadership/sylvester-mensah-ceo.jpg";
import mosesKluMensahImg from "@/assets/leadership/moses-klu-mensah.jpg";
import victorEasmonImg from "@/assets/leadership/victor-easmon.jpg";

// Board of Directors Photos
import josephNyarkoteiImg from "@/assets/leadership/joseph-nyarkotei-dorh.jpg";
import sampsonAhiImg from "@/assets/leadership/sampson-ahi.jpg";
import matildaAsanteImg from "@/assets/leadership/matilda-asante-asiedu.jpg";
import francisKwartengImg from "@/assets/leadership/francis-kwarteng-arthur.jpg";
import robertAdamuImg from "@/assets/leadership/robert-akati-adamu.jpg";
import samuelArkhurstImg from "@/assets/leadership/samuel-arkhurst.jpg";
import millicentLardiImg from "@/assets/leadership/millicent-lardi-glawu.jpg";
import carlosDeSouzaImg from "@/assets/leadership/carlos-de-souza.jpg";

const executiveManagement = [
  {
    name: "Hon. Sylvester Adinam Mensah",
    position: "Chief Executive",
    image: sylvesterMensahImg,
    bio: "Hon. Sylvester Adinam Mensah is an accomplished finance professional and former senior banker, renowned for his expertise in public sector banking, fund management, strategic financial management, and governance. He is a Fellow of the Institute of Business Consulting (FIBC), UK, and a Certified Strategy Professional with a proven record of accomplishment of delivering innovative strategies and financial solutions.",
    fullBio: [
      "As Head of Public Sector Banking at the then Intercontinental Bank (Ghana) Ltd, he led the development of credit risk criteria and robust credit acceptance frameworks. Sylvester provided strategic investment and business advisory services to diverse public sector clients.",
      "He served as a Member of Parliament for the La Dadekotopon Constituency and later as Chief Executive of the National Health Insurance Authority (NHIA), where he also managed the NHIA fund. He reformed and expanded Ghana's Health Insurance Scheme, introducing a range of policies to enhance efficiency.",
      "Hon Sylvester Mensah holds Bachelor of Science Degree from the University of Ghana Business School, and an MBA in Finance from the University of Leicester in the UK. He also holds a number of diplomas and certificates from various distinguished universities abroad.",
      "With over two decades of experience in providing both practical and academic instruction in Corporate Strategy, Strategic Management, and Strategy Execution, he possesses the financial and managerial acumen to lead and transform Ghana EXIM Bank."
    ],
    education: [
      "BSc, University of Ghana Business School",
      "MBA Finance, University of Leicester, UK",
      "Fellow, Institute of Business Consulting (FIBC), UK",
      "Certified Strategy Professional"
    ],
  },
  {
    name: "Mr. Moses Klu Mensah",
    position: "Deputy CEO – Banking",
    image: mosesKluMensahImg,
    bio: "Moses Klu Mensah is a Chartered Accountant with extensive experience gained in the United States. He has held prominent positions at prestigious firms, including PricewaterhouseCoopers (PwC) and Ernst & Young (EY), focusing on the private equity and hedge fund space.",
    fullBio: [
      "Mr. Mensah possesses dual MBA degrees—one in Finance and another in Public Accounting—from IONA University in the USA. He has also received a Certificate of Excellence in Private Equity and Venture Capital from Columbia Business School.",
      "As a Certified Public Accountant (CPA) and a Certified Information Systems Auditor (CISA), he brings a wealth of expertise in financial management, auditing, and advisory services. He is a member of the American Institute of Certified Public Accountants (AICPA), as well as the New York and New Jersey Societies of CPAs.",
      "Throughout his career, Mr. Mensah has played a vital role in designing and implementing financial systems for government entities and multinational corporations, ensuring compliance with regulatory standards while improving budgetary efficiency."
    ],
    education: [
      "MBA Finance, IONA University, USA",
      "MBA Public Accounting, IONA University, USA",
      "Certificate in Private Equity & Venture Capital, Columbia Business School",
      "Certified Public Accountant (CPA)",
      "Certified Information Systems Auditor (CISA)"
    ],
  },
  {
    name: "Mr. Victor Easmon",
    position: "Deputy CEO – Finance and Administration",
    image: victorEasmonImg,
    bio: "Victor Easmon has been the General Manager for Operations for Phoenix Health Insurance Plc since November 2023. In this role he has driven the Company's strategy of delivering innovative healthcare solutions to clients and fostering strong collaborative partnerships with healthcare providers.",
    fullBio: [
      "Victor is also a board member of the GA Rural Bank, chairing the Projects, Products and Procurement Committee ensuring compliance with regulatory guidelines while overseeing efficient utilization of resource allocation within budgetary controls. He also serves on the Finances and Advances Committee as well as the Audit Risk and Compliance Committee of the Board.",
      "Prior to this, he was the Executive Director of The CDH Balanced Fund, guiding it through the financial turmoil of the banking crises from 2019 to 2020, to a Fund of preferred choice in the investment landscape. He currently serves as a board member of The Fund.",
      "Victor worked for over 16 years with Standard Chartered Bank Ghana, in roles spanning Credit Administration, Card Management, Back Office Operations and Account Reconciliations. He led a team of The Bank that provided credit administration support for retail lending in Nigeria, Gambia, Cote D'Ivoire, Cameroon and Sierra Leone."
    ],
    education: [
      "Board Member, GA Rural Bank",
      "Board Member, CDH Balanced Fund",
      "16+ years at Standard Chartered Bank Ghana"
    ],
  },
];

const boardOfDirectors = [
  {
    name: "Dr. Joseph Nyarkotei Dorh",
    position: "Board Chairman",
    image: josephNyarkoteiImg,
    isChairman: true,
  },
  {
    name: "Hon. Sylvester Adinam Mensah",
    position: "Chief Executive",
    image: sylvesterMensahImg,
    isChairman: false,
  },
  {
    name: "Hon. Sampson Ahi",
    position: "Board Member",
    image: sampsonAhiImg,
    isChairman: false,
  },
  {
    name: "Mrs. Matilda Asante-Asiedu",
    position: "Board Member",
    image: matildaAsanteImg,
    isChairman: false,
  },
  {
    name: "Francis Kojo Kwarteng Arthur",
    position: "Board Member",
    image: francisKwartengImg,
    isChairman: false,
  },
  {
    name: "Robert Akati Adamu",
    position: "Board Member",
    image: robertAdamuImg,
    isChairman: false,
  },
  {
    name: "Samuel Danquah Arkhurst",
    position: "Board Member",
    image: samuelArkhurstImg,
    isChairman: false,
  },
  {
    name: "Mrs. Millicent Samira Lardi-Glawu",
    position: "Board Member",
    image: millicentLardiImg,
    isChairman: false,
  },
  {
    name: "Carlos De-Souza",
    position: "Board Secretary",
    image: carlosDeSouzaImg,
    isChairman: false,
  },
];

const Leadership = () => {
  const location = useLocation();
  const managementRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to appropriate section based on route
    if (location.pathname === "/leadership/management" || location.pathname === "/about/management") {
      managementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (location.pathname === "/leadership/board" || location.pathname === "/about/board") {
      boardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our People
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              Leadership
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Meet the experienced professionals guiding GEXIM's mission to transform Ghana into an export-led economy.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Management */}
      <section ref={managementRef} className="section-padding bg-background scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Executive Leadership
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Executive Management
            </h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team brings together decades of experience in banking, finance, and public sector management.
            </p>
          </div>

          <div className="space-y-16">
            {executiveManagement.map((exec, index) => (
              <div 
                key={exec.name}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo Card */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                  </div>
                </div>

                {/* Bio Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-4">
                    <Briefcase className="w-4 h-4" />
                    {exec.position}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {exec.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {exec.bio}
                  </p>
                  
                  {/* Full Bio */}
                  <div className="space-y-4 mb-8">
                    {exec.fullBio.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Education & Credentials */}
                  <div className="bg-muted rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Education & Credentials</h4>
                    </div>
                    <ul className="space-y-2">
                      {exec.education.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section ref={boardRef} className="section-padding bg-muted scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Governance
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Board of Directors
            </h2>
            <p className="text-muted-foreground text-lg">
              The President in accordance with Article 70 of the Constitution appoints the Chairperson and other members of the Board.
            </p>
          </div>

          {/* Chairman - Featured */}
          <div className="max-w-lg mx-auto mb-16">
            {boardOfDirectors.filter(d => d.isChairman).map((director) => (
              <div 
                key={director.name}
                className="bg-primary rounded-3xl overflow-hidden shadow-gexim-lg group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {director.name}
                  </h3>
                  <p className="text-accent font-medium text-lg">{director.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Board Members */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {boardOfDirectors.filter(d => !d.isChairman).map((director) => (
              <div 
                key={director.name}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {director.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{director.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
