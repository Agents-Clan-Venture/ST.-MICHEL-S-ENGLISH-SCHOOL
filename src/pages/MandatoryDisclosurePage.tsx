import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  BadgeCheck,
  Hash,
  MapPin,
  User,
  Mail,
  Phone,
} from "lucide-react";

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
    detail: "Mrs. Vasanthamma K, M.Sc., B.Ed",
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
    detail: "To be uploaded",
  },
  {
    info: "Copies of Valid Water, Health And Sanitation Certificates",
    doc: "/disclosure/water-sanitation-certificate.pdf",
  },
  {
    info: "Copies of Land Certificates",
    doc: "/disclosure/land-certificate.pdf",
  },
  { info: "Self Declaration", detail: "To be uploaded" },
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
    link: "/pta",
  },
  {
    info: "Last Three-Year Result of The Board Examination as per Applicability",
    detail: "Not Applicable (awaiting first CBSE affiliation)",
  },
];

const staff: Row[] = [
  { info: "Principal / Headmistress", detail: "Mrs. Vasanthamma K, M.Sc., B.Ed" },
  { info: "Total No. of Teachers (PGT / TGT / PRT)", detail: "To be updated" },
  { info: "Teachers Section Ratio", detail: "To be updated" },
  { info: "Details of Special Educator", detail: "To be updated" },
  {
    info: "Details of Counsellor and Wellness Teacher",
    detail: "To be updated",
  },
];

const infrastructure: Row[] = [
  { info: "Total Campus Area of The School (In Square Mtr)", detail: "To be updated" },
  { info: "No. and Size of The Class Rooms (In Sq Mtr)", detail: "To be updated" },
  {
    info: "No. and Size of Laboratories Including Computer Labs (In Sq Mtr)",
    detail: "To be updated",
  },
  { info: "Internet Facility (Y/N)", detail: "Yes" },
  { info: "No. of Girls Toilets", detail: "To be updated" },
  { info: "No. of Boys Toilets", detail: "To be updated" },
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
        View Document
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
                {showDetail ? (
                  <span className="text-gray-700">{row.detail}</span>
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
          {/* School summary card */}
          <div className="mb-14 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-primary-900 px-6 md:px-8 py-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                St. Michel's English School
              </h2>
              <p className="text-accent font-semibold mt-1">
                School at a Glance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-6 md:px-8 py-8 bg-white">
              {[
                {
                  icon: BadgeCheck,
                  label: "CBSE Affiliation Status",
                  value:
                    "Applied for CBSE Affiliation (Application No. Aff2627-00138-KY)",
                },
                {
                  icon: Hash,
                  label: "School Code",
                  value: "29320822701",
                },
                {
                  icon: MapPin,
                  label: "Complete Address with Pin Code",
                  value:
                    "Mysore Road, Kanakapura - 562 117, Bengaluru South District, Karnataka",
                },
                {
                  icon: User,
                  label: "Principal / Headmistress",
                  value: "Mrs. Vasanthamma K, M.Sc., B.Ed",
                },
                {
                  icon: Mail,
                  label: "School Mail ID",
                  value: "st.michelsenglishschool@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Contact Numbers",
                  value: "9606999924 | 81972 92244 | 99026 99638",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-primary-50 text-primary-900 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                      {label}
                    </p>
                    <p className="text-gray-800 font-medium mt-0.5 break-words">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
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
