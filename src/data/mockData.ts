export interface Fund {
  ticker: string;
  name: string;
  assets: number;
  trl_mix: string;
  patent_mix: {
    issued: number;
    pct: number;
    provisional: number;
  };
  rnpv_range_usd: [number, number];
  thesis: string;
  rights: string[];
  sector?: string;
  sparkline?: number[];
}

export interface NewsArticle {
  id: string;
  title: string;
  dek: string;
  tags: string[];
  impact: 'Low' | 'Medium' | 'High';
  published_at: string;
  author: string;
  related_funds: string[];
  related_assets: string[];
  content?: string;
}

export interface Asset {
  id: string;
  name: string;
  trl: number;
  patent_status: string;
  sector: string;
  rnpv_band: string;
  key_risks: string;
  rights_structure: string[];
}

export const mockFunds: Fund[] = [
  {
    ticker: "uCU",
    name: "University of Colorado Innovation Fund",
    assets: 12,
    trl_mix: "3–7",
    patent_mix: { issued: 3, pct: 7, provisional: 2 },
    rnpv_range_usd: [85000000, 140000000],
    thesis: "A diversified portfolio of CU innovations aligned to near-term pilots and licensing.",
    rights: ["royalty", "milestones", "spinout_equity", "revenue_share"],
    sector: "Flagship",
    sparkline: [100, 102, 101, 105, 103, 108, 106, 110, 107, 112]
  },
  {
    ticker: "uCU-BIO",
    name: "Biosciences",
    assets: 6,
    trl_mix: "3–6",
    patent_mix: { issued: 1, pct: 5, provisional: 1 },
    rnpv_range_usd: [40000000, 70000000],
    thesis: "Oncology diagnostics and RNA-platform tools with clear regulatory pathways.",
    rights: ["royalty", "milestones", "revenue_share"],
    sector: "Biosciences",
    sparkline: [100, 98, 103, 101, 106, 104, 109, 107, 111, 108]
  },
  {
    ticker: "uCU-AERO",
    name: "Aerospace",
    assets: 5,
    trl_mix: "4–7",
    patent_mix: { issued: 2, pct: 4, provisional: 1 },
    rnpv_range_usd: [35000000, 60000000],
    thesis: "Guidance, sensing, and materials aimed at flight-ready pilots.",
    rights: ["royalty", "spinout_equity", "revenue_share"],
    sector: "Aerospace",
    sparkline: [100, 101, 99, 102, 100, 104, 102, 106, 104, 107]
  },
  {
    ticker: "uCU-CLIM",
    name: "Climate, Energy & Sustainability",
    assets: 7,
    trl_mix: "4–7",
    patent_mix: { issued: 1, pct: 6, provisional: 2 },
    rnpv_range_usd: [50000000, 90000000],
    thesis: "Grid-scale storage and low-carbon materials with corporate pilot interest.",
    rights: ["royalty", "milestones", "spinout_equity", "revenue_share"],
    sector: "Climate/Energy",
    sparkline: [100, 105, 103, 108, 106, 111, 109, 114, 112, 115]
  },
  {
    ticker: "uCU-QP",
    name: "Quantum & Photonics",
    assets: 5,
    trl_mix: "3–5",
    patent_mix: { issued: 0, pct: 5, provisional: 3 },
    rnpv_range_usd: [25000000, 45000000],
    thesis: "Quantum sensing and photonic interconnects with lab-to-fab roadmap.",
    rights: ["royalty", "spinout_equity"],
    sector: "Quantum/Photonics",
    sparkline: [100, 97, 101, 99, 103, 101, 105, 103, 106, 104]
  }
];

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: "CU Lab Advances RNA Assay Toward CLIA Validation",
    dek: "Breakthrough diagnostic platform shows 98% accuracy in clinical trials, paving way for FDA submission next quarter.",
    tags: ["Biosciences", "CU"],
    impact: "High",
    published_at: "2025-01-15T10:00:00Z",
    author: "uIPO Research",
    related_funds: ["uCU-BIO"],
    related_assets: ["ASSET-003"],
    content: "A University of Colorado laboratory has achieved a significant milestone in advancing their RNA-based diagnostic assay toward Clinical Laboratory Improvement Amendments (CLIA) validation..."
  },
  {
    id: "2",
    title: "Photonic Interconnect Achieves 2× Stability in Lab Test",
    dek: "Novel quantum photonic technology demonstrates enhanced performance metrics, attracting interest from major semiconductor manufacturers.",
    tags: ["Quantum & Photonics", "CU"],
    impact: "Medium",
    published_at: "2025-01-14T14:30:00Z",
    author: "uIPO Research",
    related_funds: ["uCU-QP"],
    related_assets: ["ASSET-012"],
    content: "Researchers at the University of Colorado have successfully demonstrated a 2× improvement in stability for their photonic interconnect technology..."
  },
  {
    id: "3",
    title: "Grid-Scale Storage Pilot MOU Signed with Regional Utility",
    dek: "Multi-year agreement enables real-world testing of innovative battery technology with potential for widespread deployment.",
    tags: ["Climate/Energy", "CU"],
    impact: "High",
    published_at: "2025-01-13T09:15:00Z",
    author: "uIPO Research",
    related_funds: ["uCU-CLIM"],
    related_assets: ["ASSET-008"],
    content: "A major regional utility has signed a memorandum of understanding (MOU) with the University of Colorado to pilot innovative grid-scale storage technology..."
  },
  {
    id: "4",
    title: "Aerospace Sensor Package Completes Flight Testing",
    dek: "Advanced guidance system demonstrates reliability in challenging flight conditions, moving closer to commercial deployment.",
    tags: ["Aerospace", "CU"],
    impact: "Medium",
    published_at: "2025-01-12T16:45:00Z",
    author: "uIPO Research",
    related_funds: ["uCU-AERO"],
    related_assets: ["ASSET-015"],
    content: "The University of Colorado's aerospace sensor package has successfully completed comprehensive flight testing..."
  }
];

export const mockAssets: Asset[] = [
  {
    id: "ASSET-003",
    name: "RNA Diagnostic Platform",
    trl: 6,
    patent_status: "1 Issued, 2 PCT",
    sector: "Biosciences",
    rnpv_band: "$15-25M",
    key_risks: "Regulatory approval timeline",
    rights_structure: ["royalty", "milestones"]
  },
  {
    id: "ASSET-012",
    name: "Quantum Photonic Interconnect",
    trl: 4,
    patent_status: "3 PCT",
    sector: "Quantum/Photonics",
    rnpv_band: "$8-15M",
    key_risks: "Manufacturing scalability",
    rights_structure: ["royalty", "spinout_equity"]
  },
  {
    id: "ASSET-008",
    name: "Grid-Scale Battery Technology",
    trl: 5,
    patent_status: "1 Issued, 1 PCT",
    sector: "Climate/Energy",
    rnpv_band: "$20-35M",
    key_risks: "Commodity price volatility",
    rights_structure: ["royalty", "revenue_share"]
  },
  {
    id: "ASSET-015",
    name: "Advanced Guidance Sensor",
    trl: 7,
    patent_status: "2 Issued",
    sector: "Aerospace",
    rnpv_band: "$12-20M",
    key_risks: "Defense contracting cycles",
    rights_structure: ["royalty", "spinout_equity"]
  }
];