import fs from "node:fs";
import path from "node:path";

const PAGE = { width: 595, height: 842 };
const MARGIN_X = 44;
const MARGIN_TOP = 46;
const MARGIN_BOTTOM = 48;
const CONTENT_WIDTH = PAGE.width - MARGIN_X * 2;

const colors = {
  ink: [0.08, 0.09, 0.11],
  muted: [0.35, 0.37, 0.4],
  soft: [0.84, 0.87, 0.91],
  accent: [0.16, 0.21, 0.31],
  accentSoft: [0.94, 0.96, 0.99],
};

const resume = {
  name: "Komal Singh",
  title: "Solution Architect",
  subtitle:
    "Salesforce Commerce Cloud | Enterprise Architecture | Full Stack Delivery | London, UK",
  contact: [
    "komalsingh54@gmail.com",
    "linkedin.com/in/singh-komal",
    "github.com/komalsingh54",
  ],
  summary:
    "Solution Architect with 11+ years of experience across enterprise retail, ecommerce, IAM, cloud-native delivery, and platform transformation. Comfortable leading architecture, technical direction, delivery decisions, and hands-on full stack execution across complex multi-system environments.",
  strengths: [
    "Solution architecture and technical leadership across retail and commerce platforms.",
    "SFCC, PWA Kit, integrations, IAM, cloud delivery, observability, and major incident support.",
    "Strong balance of architecture ownership, delivery guidance, and hands-on engineering understanding.",
  ],
  experience: [
    {
      role: "Solution Architect · Tech Lead",
      company: "TCS",
      meta: "Asda Retail (London, UK) · Oct 2024 – Present",
      bullets: [
        "Leading architecture and technical delivery across retail initiatives at Asda, covering solution design, platform direction, engineering coordination, and delivery support.",
        "Providing technical direction across ecommerce features, integrations, migrations, and major incident support in a complex SFCC and PWA-based retail ecosystem.",
        "Working across Salesforce, cloud, DevOps, observability, and practical AI-related initiatives where they support delivery outcomes.",
      ],
    },
    {
      role: "Tech Lead",
      company: "Publicis Sapient",
      meta: "Asda (London, UK) · Jul 2022 – Sep 2024",
      bullets: [
        "Led full stack delivery across IAM, frontend architecture, and platform engineering for Asda.",
        "Drove secure customer authentication, release optimisation, and end-to-end technical execution across a large ecommerce platform.",
        "Defined delivery approach and technical direction while implementation teams executed across multiple workstreams.",
      ],
    },
    {
      role: "Tech Lead",
      company: "Publicis Sapient",
      meta: "Suncorp Group / Falabella · Feb 2019 – Jun 2022",
      bullets: [
        "Led technical delivery across fintech and ecommerce platforms focused on performance, scalability, and cloud platform design.",
        "Worked on serverless architecture, frontend delivery, and service integration for high-traffic business-critical systems.",
      ],
    },
    {
      role: "Senior Full Stack Engineer",
      company: "To The New",
      meta: "Rhinogram · Jul 2017 – Mar 2019",
      bullets: [
        "Built HIPAA-compliant platform capabilities across messaging, payments, dashboards, and RBAC.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Gemalto (Thales)",
      meta: "Jan 2015 – Jun 2017",
      bullets: [
        "Worked on licensing tools, test frameworks, and analytics dashboards, building a strong foundation in enterprise full stack development.",
      ],
    },
  ],
  skills: {
    "Salesforce & Commerce": [
      "SFCC",
      "B2C Commerce",
      "PWA Kit",
      "Salesforce Commerce Cloud",
      "Agentforce",
    ],
    Frontend: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Micro-frontends",
    ],
    Backend: [
      "Node.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Serverless",
      "C/C++",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Azure",
      "GCP",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Cloudflare",
      "New Relic",
    ],
    "Architecture & Delivery": [
      "Solution Architecture",
      "IAM",
      "Observability",
      "Agile Delivery",
      "Incident Support",
      "Platform Integration",
      "Agentic AI",
    ],
  },
  certifications: [
    "Salesforce Agentforce Certification",
    "Salesforce Commerce Cloud Developer",
    "Salesforce Commerce Cloud Certification",
    "AWS Solutions Architect Professional",
    "AWS Certified Solutions Architect – Associate",
    "Apache Kafka",
    "Kubernetes",
  ],
  education: [
    "MCA (Software Engineering) · Guru Gobind Singh Indraprastha University · 2012 – 2015",
    "BCA (Computer Science) · Jaipur National University · 2008 – 2011",
  ],
};

function esc(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function rgb([r, g, b]) {
  return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
}

function textWidth(text, size) {
  return text.length * size * 0.51;
}

function wrapText(text, size, width) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (textWidth(candidate, size) <= width) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

class Page {
  constructor() {
    this.ops = [];
  }

  push(op) {
    this.ops.push(op);
  }

  fillRect(x, y, w, h, color) {
    this.push(`${rgb(color)} rg`);
    this.push(`${x} ${y} ${w} ${h} re f`);
  }

  line(x1, y1, x2, y2, color, width = 1) {
    this.push(`${width} w`);
    this.push(`${rgb(color)} RG`);
    this.push(`${x1} ${y1} m ${x2} ${y2} l S`);
  }

  text(text, x, y, size, font = "F1", color = colors.ink) {
    this.push("BT");
    this.push(`${rgb(color)} rg`);
    this.push(`/${font} ${size} Tf`);
    this.push(`1 0 0 1 ${x} ${y} Tm`);
    this.push(`(${esc(text)}) Tj`);
    this.push("ET");
  }

  render() {
    return this.ops.join("\n");
  }
}

class ResumePdf {
  constructor() {
    this.pages = [];
    this.current = null;
    this.y = 0;
    this.pageNumber = 0;
  }

  startPage(withHeader = false) {
    this.current = new Page();
    this.pages.push(this.current);
    this.pageNumber += 1;
    this.current.fillRect(0, 0, PAGE.width, PAGE.height, [1, 1, 1]);

    if (withHeader) {
      this.current.fillRect(0, PAGE.height - 126, PAGE.width, 126, colors.accentSoft);
      this.current.fillRect(MARGIN_X, PAGE.height - 126, 7, 84, colors.accent);
      this.current.text(resume.name, MARGIN_X + 20, PAGE.height - 70, 29, "F2");
      this.current.text(resume.title, MARGIN_X + 22, PAGE.height - 98, 12, "F3", colors.accent);
      this.current.text(resume.subtitle, MARGIN_X + 20, PAGE.height - 116, 10.5, "F1", colors.muted);
      this.current.text(resume.contact.join("  |  "), MARGIN_X + 220, PAGE.height - 98, 10.2, "F1", colors.ink);
      this.y = PAGE.height - 154;
    } else {
      this.current.text("Komal Singh", MARGIN_X, PAGE.height - 42, 18, "F2");
      this.current.line(MARGIN_X, PAGE.height - 54, PAGE.width - MARGIN_X, PAGE.height - 54, colors.soft, 1);
      this.y = PAGE.height - 80;
    }
  }

  ensure(heightNeeded) {
    if (!this.current) this.startPage(true);
    if (this.y - heightNeeded < MARGIN_BOTTOM) {
      this.startPage(false);
    }
  }

  section(title) {
    this.ensure(28);
    this.current.text(title.toUpperCase(), MARGIN_X, this.y, 9, "F2", colors.muted);
    this.current.line(MARGIN_X, this.y - 8, PAGE.width - MARGIN_X, this.y - 8, colors.soft, 1);
    this.y -= 24;
  }

  paragraph(text, size = 11, color = colors.ink, width = CONTENT_WIDTH, leading = size * 1.45) {
    const lines = wrapText(text, size, width);
    this.ensure(lines.length * leading + 4);
    for (const line of lines) {
      this.current.text(line, MARGIN_X, this.y, size, "F1", color);
      this.y -= leading;
    }
    this.y -= 6;
  }

  bullets(items, size = 10.4, width = CONTENT_WIDTH - 16, leading = 13.8) {
    for (const item of items) {
      const lines = wrapText(item, size, width);
      this.ensure(lines.length * leading + 6);
      for (let i = 0; i < lines.length; i += 1) {
        const prefix = i === 0 ? "- " : "  ";
        this.current.text(`${prefix}${lines[i]}`, MARGIN_X, this.y, size, "F1", colors.ink);
        this.y -= leading;
      }
      this.y -= 2;
    }
  }

  experience(role) {
    const roughHeight = 52 + role.bullets.length * 18;
    this.ensure(roughHeight);
    this.current.text(role.role, MARGIN_X, this.y, 12.5, "F2", colors.ink);
    this.y -= 15;
    this.current.text(`${role.company} · ${role.meta}`, MARGIN_X, this.y, 10.2, "F1", colors.muted);
    this.y -= 16;
    this.bullets(role.bullets, 10.2, CONTENT_WIDTH - 14, 13.5);
    this.y -= 4;
  }

  chipParagraph(label, items) {
    this.ensure(30);
    this.current.text(label, MARGIN_X, this.y, 10.4, "F2", colors.ink);
    this.y -= 15;
    this.paragraph(items.join(" · "), 10.1, colors.muted, CONTENT_WIDTH, 14);
  }

  build() {
    this.startPage(true);
    this.section("Profile");
    this.paragraph(resume.summary, 11.2, colors.ink, CONTENT_WIDTH, 15.4);

    this.section("Core Strengths");
    this.bullets(resume.strengths, 10.4, CONTENT_WIDTH - 14, 14);

    this.section("Experience");
    for (const role of resume.experience) this.experience(role);

    this.section("Skills");
    for (const [label, items] of Object.entries(resume.skills)) {
      this.chipParagraph(label, items);
    }

    this.section("Certifications");
    this.bullets(resume.certifications, 10.2, CONTENT_WIDTH - 14, 13.4);

    this.section("Education");
    this.bullets(resume.education, 10.2, CONTENT_WIDTH - 14, 13.4);

    return this.renderPdf();
  }

  renderPdf() {
    const objects = [];
    const addObject = (body) => {
      objects.push(body);
      return objects.length;
    };

    const font1 = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
    const font2 = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
    const font3 = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>");

    const contentIds = this.pages.map((page) =>
      addObject(`<< /Length ${Buffer.byteLength(page.render(), "utf8")} >>\nstream\n${page.render()}\nendstream`),
    );

    // Build page objects next so ids are stable and sequential.
    const firstPageId = objects.length + 1;
    const stablePageIds = this.pages.map((_, index) => firstPageId + index);
    const pagesId = firstPageId + this.pages.length;

    this.pages.forEach((_, index) => {
      addObject(
        `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE.width} ${PAGE.height}] /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R /F3 ${font3} 0 R >> >> /Contents ${contentIds[index]} 0 R >>`,
      );
    });

    addObject(`<< /Type /Pages /Kids [${stablePageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${stablePageIds.length} >>`);
    const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

    let pdf = "%PDF-1.4\n";
    const offsets = [0];

    objects.forEach((object, index) => {
      offsets.push(Buffer.byteLength(pdf, "utf8"));
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });

    const xrefStart = Buffer.byteLength(pdf, "utf8");
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";
    for (let i = 1; i < offsets.length; i += 1) {
      pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
    return pdf;
  }
}

const outputPath = path.resolve("public/resume-komal-singh.pdf");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, new ResumePdf().build(), "binary");
console.log(`Generated ${outputPath}`);
