import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

type Row = {
  info: string;
  detail?: string;
  doc?: string; // path to PDF in /disclosure
  link?: string; // internal route
};

const generalInfo: Row[] = [
  { info: "Name of The School", detail: "St. Michel's English School" },
  {
    info: "Affiliation No. (If Applicable)",
    detail: "Applied for CBSE Affiliation (Application No. Aff2627-00138-KY)",
  },
  { info: "School Code (If Applicable)", detail: "29320822701" },
  {
    info: "Complete Address With Pin Code",
    detail:
      "Mysore Road, Kanakapura - 562 117, Bengaluru South District, Karnataka",
  },
  {
    info: "Principal Name & Qualification",
    detail: "Mrs. Vasanthamma K, M.Sc., B.ED",
  },
  { info: "School E-mail Id", detail: "st.michelsenglishschool@gmail.com" },
  { info: "School Website", detail: "www.stmichelsschool.org" },
  {
    info: "Contact Details (Landline/Mobile)",
    detail: "9606999924 | 81972 92244 | 99026 99638",
  },
];

const documents: Row[] = [
  {
    info: "Copies of Affiliation Letter",
    detail: "Applied (Application No. Aff2627-00138-KY)",
  },
  {
    info: "Copies of Trust Deed",
    doc: "/disclosure/society-trust-deed.pdf",
  },
  {
    info: "Copy of Society Registration Renewal Certificate (2026-27)",
    doc: "/disclosure/society-renewal-certificate.pdf",
  },
  {
    info: "Copy of No Objection Certificate (NOC) Issued, by The State Govt. /UT",
    detail: "To be uploaded",
  },
  {
    info: "Copy of Recognition Certificate",
    doc: "/disclosure/recognition-certificate.pdf",
  },
  {
    info: "Copy of valid Building Safety Certificate issued by Department of Public Works",
    doc: "/disclosure/building-safety-certificate.pdf",
  },
  {
    info: "Copies of Valid Fire Safety Certificate Issued by the Competent Authority",
    doc: "/disclosure/fire-safety-certificate.pdf",
  },
  {
    info: "Copies of Valid Water, Health And Sanitation Certificates",
    doc: "/disclosure/water-sanitation-certificate.pdf",
  },
  {
    info: "Copies of Land Certificates",
    doc: "/disclosure/land-certificate.pdf",
  },
  { info: "Self Declaration", doc: "/disclosure/self-declaration.pdf" },
];

const academics: Row[] = [
  { info: "Fee Structure of The School", doc: "/disclosure/fee-structure.pdf" },
  {
    info: "Annual Academic Calendar",
    doc: "/disclosure/annual-academic-calendar.pdf",
  },
  {
    info: "List of School Management Committee (SMC)",
    doc: "/disclosure/smc-list.pdf",
  },
  {
    info: "List of Parents Teachers Association (PTA) Members",
    doc: "/disclosure/pta-members-list.pdf",
  },
  {
    info: "Last Three-Year Result of The Board Examination as per Applicability",
    detail: "Not Applicable (awaiting first CBSE affiliation)",
  },
];

const staff: Row[] = [
  { info: "Principal / Headmistress", detail: "Mrs. Vasanthamma K, M.Sc., B.ED" },
  { info: "Total No. of Teachers (PGT / TGT / PRT)", detail: "37" },
  { info: "Teachers Section Ratio", detail: "2:1" },
];

const infrastructure: Row[] = [
  { info: "Total Campus Area of The School (In Square Mtr)", detail: "6276.74 Sq Mt" },
  {
    info: "No. and Size of The Class Rooms (In Sq Mtr)",
    detail:
      "Running Classrooms|19|41.8 Sq Mt\nVacant Classrooms|2|41.8 Sq Mt",
  },
  {
    info: "No. and Size of Laboratories Including Computer Labs (In Sq Mtr)",
    detail:
      "Composite Lab|2|41.8 Sq Mt\nComputer Lab|1|83.61 Sq Mt\nMathematics Lab|1|41.8 Sq Mt\nScience Lab|1|83.61 Sq Mt\nLibrary|1|129.22 Sq Mt",
  },
  { info: "Internet Facility (Y/N)", detail: "Yes" },
  { info: "No. of Girls Toilets", detail: "18" },
  { info: "No. of Boys Toilets", detail: "21" },
];

const DocLink: React.FC<{ row: Row }> = ({ row }) => {
  if (row.doc) {
    return (
      <a
        href={row.doc}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-primary-700 font-semibold hover:text-accent transition-colors"
      >
        <FileText size={16} />
        {row.doc.includes("youtu") ? "Watch Video" : "View Document"}
      </a>
    );
  }
  if (row.link) {
    return (
      <Link
        to={row.link}
        className="inline-flex items-center gap-1.5 text-primary-700 font-semibold hover:text-accent transition-colors"
      >
        <FileText size={16} />
        View Details
      </Link>
    );
  }
  return <span className="text-gray-500">{row.detail}</span>;
};

const DisclosureTable: React.FC<{
  title: string;
  col2: string;
  col3: string;
  rows: Row[];
  showDetail?: boolean;
}> = ({ title, col2, col3, rows, showDetail }) => (
  <div className="mb-14">
    <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 uppercase tracking-wide">
      {title}
    </h2>
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="w-full text-left text-sm md:text-base">
        <thead>
          <tr className="bg-primary-900 text-white">
            <th className="px-4 py-3 w-16 font-semibold">#</th>
            <th className="px-4 py-3 font-semibold">{col2}</th>
            <th className="px-4 py-3 font-semibold md:w-1/3">{col3}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.info}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-4 text-gray-600 align-top">{i + 1}</td>
              <td className="px-4 py-4 text-gray-800 align-top">{row.info}</td>
              <td className="px-4 py-4 align-top">
                {showDetail && !row.doc ? (
                  row.detail?.includes("|") ? (
                    <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                          <th className="px-3 py-2 text-left font-semibold">Facility</th>
                          <th className="px-3 py-2 text-center font-semibold">No.</th>
                          <th className="px-3 py-2 text-right font-semibold">Size (Each)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {row.detail.split("\n").map((line) => {
                          const [name, count, size] = line.split("|");
                          return (
                            <tr key={name} className="border-t border-gray-200">
                              <td className="px-3 py-2 text-gray-800 font-medium">{name}</td>
                              <td className="px-3 py-2 text-center text-gray-700">{count}</td>
                              <td className="px-3 py-2 text-right text-gray-700 whitespace-nowrap">{size}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <span className="text-gray-700 whitespace-pre-line">
                      {row.detail}
                    </span>
                  )
                ) : (
                  <DocLink row={row} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const MandatoryDisclosurePage: React.FC = () => {
  useEffect(() => {
    document.title = "Mandatory Public Disclosure | St. Michel's";
  }, []);

  return (
    <div className="w-[110vw] md:w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mandatory Public Disclosure
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            As per CBSE Affiliation Bye-Laws (Appendix-IX)
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          {/* School at a Glance */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 uppercase tracking-wide">
              School at a Glance
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
              <table className="w-full text-left text-sm md:text-base">
                <tbody>
                  {[
                    ["Name of The School", "St. Michel's English School"],
                    [
                      "CBSE Affiliation Status",
                      "Applied for CBSE Affiliation (Application No. Aff2627-00138-KY)",
                    ],
                    ["School Code", "29320822701"],
                    [
                      "Complete Address with Pin Code",
                      "Mysore Road, Kanakapura - 562 117, Bengaluru South District, Karnataka",
                    ],
                    [
                      "Principal / Headmistress",
                      "Mrs. Vasanthamma K, M.Sc., B.ED",
                    ],
                    ["School Mail ID", "st.michelsenglishschool@gmail.com"],
                    [
                      "Contact Numbers",
                      "9606999924 | 81972 92244 | 99026 99638",
                    ],
                  ].map(([label, value], i) => (
                    <tr
                      key={label}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-4 md:px-6 py-4 font-semibold uppercase tracking-wide text-gray-700 align-top md:w-2/5 border-r border-gray-300">
                        {label}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-gray-800 align-top">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <DisclosureTable
            title="A. General Information"
            col2="Information"
            col3="Details"
            rows={generalInfo}
            showDetail
          />
          <DisclosureTable
            title="B. Documents and Information"
            col2="Information"
            col3="Uploaded Document"
            rows={documents}
          />
          <DisclosureTable
            title="C. Result and Academics"
            col2="Documents / Information"
            col3="Upload Documents"
            rows={academics}
          />
          <DisclosureTable
            title="D. Staff (Teaching)"
            col2="Information"
            col3="Details"
            rows={staff}
            showDetail
          />
          <DisclosureTable
            title="School Infrastructure"
            col2="Information"
            col3="Details"
            rows={infrastructure}
            showDetail
          />
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosurePage;
