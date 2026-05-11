import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const sectorData = {
  "gcc-ites": {
    title: "GCC & ITES Expansion",
    subtitle: "A cost-efficient and scalable destination for shared services, analytics, ITES, and mid-scale GCC operations.",
    image: "/images/sector_gcc.png",
    advantages: [
      "Lower operational cost",
      "Availability of graduates and professionals",
      "Lower attrition compared to metro cities",
      "Availability of scalable office infrastructure"
    ],
    opportunities: [
      "IT parks",
      "Shared office ecosystems",
      "Back-office operations",
      "Analytics and reporting centers",
      "Customer support centers",
      "Corporate housing"
    ],
    impact: "One GCC operation creates demand across office spaces, rental housing, retail infrastructure, and hospitality."
  },
  "logistics": {
    title: "Logistics & Warehousing",
    subtitle: "Supporting distribution, storage, fulfilment, and transport-linked infrastructure growth.",
    image: "/images/sector_logistics.png",
    advantages: [
      "Central India access",
      "Lower industrial land cost",
      "Highway connectivity",
      "Scope for scalable development"
    ],
    opportunities: [
      "Warehousing parks",
      "Distribution hubs",
      "Cold storage infrastructure",
      "E-commerce fulfilment centers",
      "Transport ecosystems"
    ],
    impact: "Creates backbone for broader industrial and retail growth in the region."
  },
  "industrial": {
    title: "Industrial & Manufacturing",
    subtitle: "Scalable opportunities for industrial parks, light manufacturing, and cluster-based development.",
    image: "/images/sector_industrial.png",
    advantages: [
      "Lower industrial setup cost",
      "Expandable land parcels",
      "Workforce availability",
      "Potential for cluster-based growth"
    ],
    opportunities: [
      "Industrial parks",
      "Hardware and electronics units",
      "Assembly and processing facilities",
      "Supplier ecosystems",
      "Worker housing"
    ],
    impact: "Drives mass employment and parallel real estate growth across residential and commercial sectors."
  },
  "education": {
    title: "Education & Training",
    subtitle: "A strong opportunity for residential schools, training campuses, and skill-development ecosystems.",
    image: "/images/sector_education.png",
    advantages: [
      "Existing educational legacy",
      "Favorable living environment",
      "Large catchment area",
      "Availability of large land parcels"
    ],
    opportunities: [
      "Residential schools",
      "Skill training institutes",
      "Aviation and specialized training",
      "Student housing",
      "Faculty housing"
    ],
    impact: "Education-driven ecosystems create stable and recurring demand for residential, retail, and support infrastructure."
  },
  "tourism": {
    title: "Tourism & Hospitality",
    subtitle: "Tourism-led development potential driven by Chikhaldara and the surrounding region.",
    image: "/images/sector_tourism.png",
    advantages: [
      "Proximity to Chikhaldara hill station",
      "Rich cultural heritage",
      "Untapped eco-tourism potential",
      "Growing domestic travel"
    ],
    opportunities: [
      "Resorts",
      "Wellness retreats",
      "Holiday villas",
      "Eco-tourism stays",
      "Leisure retail"
    ],
    impact: "Tourism creates demand for hospitality infrastructure, branded residential formats, roads, and retail."
  },
  "healthcare": {
    title: "Healthcare & Diagnostics",
    subtitle: "Regional healthcare growth opportunity supported by medical infrastructure demand.",
    image: "/images/sector_healthcare.png",
    advantages: [
      "Large underserved regional population",
      "Growing per capita income",
      "Need for specialized medical care",
      "Availability of medical talent"
    ],
    opportunities: [
      "Multi-specialty hospitals",
      "Diagnostics centers",
      "Medical education campuses",
      "Staff housing",
      "Medical retail ecosystems"
    ],
    impact: "Elevates city livability index and attracts long-term demographic shifts."
  },
  "data-centers": {
    title: "Data Centers & Digital",
    subtitle: "An emerging opportunity for digital infrastructure and future-ready commercial assets.",
    image: "/images/sector_datacenters.png",
    advantages: [
      "Stable geographical zone",
      "Availability of power and land",
      "Growing digital consumption",
      "Supportive state policies"
    ],
    opportunities: [
      "Data center parks",
      "Edge infrastructure",
      "Technology support campuses",
      "Digital infrastructure ecosystems"
    ],
    impact: "Positions Amravati as a modern node in India's digital economy backbone."
  },
  "townships": {
    title: "Integrated Townships",
    subtitle: "Large-format mixed-use development opportunity driven by long-term regional growth.",
    image: "/images/sector_townships.png",
    advantages: [
      "Rising aspiration levels",
      "Need for planned urban spaces",
      "Scalable land at lower costs",
      "Multi-sector economic growth"
    ],
    opportunities: [
      "Residential housing",
      "Commercial spaces",
      "Educational institutions",
      "Healthcare infrastructure",
      "Retail and recreation",
      "Community amenities"
    ],
    impact: "Transforms the urban fabric of Amravati, creating self-sustaining micro-economies."
  }
};

export async function generateStaticParams() {
  return Object.keys(sectorData).map((sector) => ({
    sector: sector,
  }));
}

export default function SectorPage({ params }: { params: { sector: string } }) {
  const data = sectorData[params.sector as keyof typeof sectorData];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image} 
            alt={data.title} 
            fill 
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <Link href="/sectors" className="text-teal font-medium flex items-center gap-2 mb-6 hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Sectors
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{data.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold"></span> 
                  Why This Sector Fits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.advantages.map((adv, i) => (
                    <div key={i} className="glass p-5 rounded-lg flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold"></span> 
                  Real Estate Impact
                </h2>
                <div className="glass-dark p-8 rounded-xl border-l-4 border-l-gold">
                  <p className="text-lg text-white/80 leading-relaxed italic">
                    "{data.impact}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="sticky top-32">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold"></span> 
                  Project Opportunities
                </h2>
                <div className="space-y-4 mb-12">
                  {data.opportunities.map((opp, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-teal/50 transition-colors bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-white/90 font-medium text-lg">{opp}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-navy-light to-navy border border-white/10 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors"></div>
                  <h3 className="text-2xl font-bold mb-4">Explore {data.title} Opportunities</h3>
                  <p className="text-white/60 mb-8">Discuss strategic expansion and identify suitable locations with our advisory team.</p>
                  <Link href="/contact" className="inline-flex px-6 py-3 bg-white text-navy font-bold rounded-sm items-center gap-2 hover:bg-gold transition-colors">
                    Schedule a Discussion <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
