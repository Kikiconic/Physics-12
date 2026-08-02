import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../../site-chrome";
import { magneticElectronWorksheets } from "../resource-data";

export function generateStaticParams(){return magneticElectronWorksheets.map(worksheet=>({worksheet:worksheet.slug}));}

export default async function MagneticElectronWorksheetPage({params}){
  const {worksheet:slug}=await params;
  const worksheet=magneticElectronWorksheets.find(item=>item.slug===slug);
  if(!worksheet)notFound();
  return <main><SiteNav/><header className="lesson-detail-hero resource-page-hero"><div><Link href="/lessons/magnetic-field-and-the-electron/resources">← Additional Challenging Questions</Link><span>Worksheet No. {worksheet.number} · {worksheet.difficulty}</span></div><h1>{worksheet.title}</h1><p>Make sure you have fully practised and understood the previous worksheets before continuing.</p></header><section className="worksheet-detail-layout"><article className="resource-library-section worksheet-download-section"><div className="resource-section-heading"><span>01 · WORKSHEET</span><h2>Challenging questions</h2><p>Open the worksheet as a PDF in a new browser tab.</p></div><Link className="worksheet-open-button" href={worksheet.file} target="_blank" rel="noopener noreferrer">Open PDF <ArrowIcon/></Link></article><article className="resource-library-section"><div className="resource-section-heading"><span>02 · VIDEOS</span><h2>Video Solutions</h2><p>Recorded explanations for selected challenging questions from this worksheet.</p></div>{worksheet.videos.length>0?<div className="video-solution-grid">{worksheet.videos.map(video=><div className="video-solution-card" key={video.youtubeId}><iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`} title={`${worksheet.title} ${video.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><div><span>VIDEO SOLUTION</span><h3>{video.title}</h3></div></div>)}</div>:<div className="empty-resource-box video-resource-box"><span>VIDEO</span><h3>No video solutions added yet</h3><p>Recorded solutions can be added here later.</p></div>}</article></section><div className="resource-back-link"><Link href="/lessons/magnetic-field-and-the-electron/resources">Return to Additional Challenging Questions <ArrowIcon/></Link></div><SiteFooter/></main>;
}
