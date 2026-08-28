import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../../site-chrome";
import { translationalEquilibriumWorksheets } from "../resource-data";

export function generateStaticParams(){return translationalEquilibriumWorksheets.map(worksheet=>({worksheet:worksheet.slug}));}
export const dynamicParams=false;

export default async function TranslationalEquilibriumWorksheet({params}){
  const {worksheet:slug}=await params;
  const worksheet=translationalEquilibriumWorksheets.find(item=>item.slug===slug);
  if(!worksheet)notFound();
  return <main>
    <SiteNav/>
    <header className="lesson-detail-hero resource-page-hero">
      <div><Link href="/lessons/statics-forces-in-equilibrium/resources">← Additional Practice</Link><span>Worksheet No. {worksheet.number} · Difficulty {worksheet.number}/4</span></div>
      <h1>{worksheet.title}</h1>
      <p>Open the worksheet PDF. Video solutions can be added here later.</p>
    </header>
    <section className="worksheet-detail-layout">
      <article className="resource-library-section worksheet-download-section">
        <div className="resource-section-heading"><span>01 · WORKSHEET</span><h2>Practice questions</h2><p>Open this translational-equilibrium worksheet as a PDF in a new browser tab.</p></div>
        <Link className="worksheet-open-button" href={worksheet.file} target="_blank" rel="noopener noreferrer">Open PDF <ArrowIcon/></Link>
      </article>
      <article className="resource-library-section">
        <div className="resource-section-heading"><span>02 · VIDEOS</span><h2>Video Solutions</h2><p>Recorded explanations for selected challenging questions from this worksheet.</p></div>
        <div className="empty-resource-box video-resource-box"><span>VIDEO</span><h3>No video solutions added yet</h3><p>Recorded solutions can be added here later.</p></div>
      </article>
    </section>
    <div className="resource-back-link"><Link href="/lessons/statics-forces-in-equilibrium/resources">Return to Additional Practice <ArrowIcon/></Link></div>
    <SiteFooter/>
  </main>;
}
