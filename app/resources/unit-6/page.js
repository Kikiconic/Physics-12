import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

const sections=[
  {number:"02",symbol:"F",title:"The electric force",text:"Additional practice and recorded solutions for Coulomb's law and electric-force questions.",href:"/lessons/electric-force/resources"},
  {number:"03",symbol:"E",title:"Electric field strength",text:"Additional practice and recorded solutions for electric fields, field direction, and field strength.",href:"/lessons/electric-field-strength/resources"},
  {number:"04",symbol:"V",title:"Electric potentials",text:"Additional practice and recorded solutions for electric potential, potential energy, voltage, and parallel plates.",href:"/lessons/electric-potentials/resources"}
];

export default function Unit6Resources(){return <main><SiteNav/><UnitCatalogue section="Worksheets" currentUnit={6}/><div className="active-unit-heading"><span>Unit 06</span><h1>Electrostatics worksheets</h1><p>Additional practice materials</p></div><section className="resource-hub-grid">{sections.map(section=><article key={section.number}><div className="lesson-page-top"><span>SECTION {section.number}</span><b>{section.symbol}</b></div><small>PRACTICE + VIDEOS</small><h2>{section.title}</h2><p>{section.text}</p><Link href={section.href}>Open worksheets <ArrowIcon/></Link></article>)}</section><SiteFooter/></main>;}
