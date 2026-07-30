import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../../site-chrome";
import { electricFieldWorksheets } from "../resource-data";

export function generateStaticParams() {
  return electricFieldWorksheets.map((worksheet) => ({ worksheet: worksheet.slug }));
}

export default async function ElectricFieldWorksheetPage({ params }) {
  const { worksheet: worksheetSlug } = await params;
  const worksheet = electricFieldWorksheets.find((item) => item.slug === worksheetSlug);

  if (!worksheet) {
    notFound();
  }

  const mediaBasePath = process.env.GITHUB_ACTIONS === "true" ? "/Physics-12" : "";

  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero resource-page-hero">
        <div>
          <Link href="/lessons/electric-field-strength/resources">← Additional Practice</Link>
          <span>Worksheet No. {worksheet.number}</span>
        </div>
        <h1>{worksheet.title}</h1>
        <p>Open the worksheet and use the recorded solutions for selected challenging questions.</p>
      </header>

      <section className="worksheet-detail-layout">
        <article className="resource-library-section worksheet-download-section">
          <div className="resource-section-heading">
            <span>01 · WORKSHEET</span>
            <h2>Practice questions</h2>
            <p>Open the worksheet as a PDF in a new browser tab.</p>
          </div>
          <Link
            className="worksheet-open-button"
            href={worksheet.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF <ArrowIcon />
          </Link>
        </article>

        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>02 · VIDEOS</span>
            <h2>Video Solutions</h2>
            <p>Recorded explanations for selected challenging questions from this worksheet.</p>
          </div>

          {worksheet.videos.length > 0 ? (
            <div className="video-solution-grid">
              {worksheet.videos.map((video) => (
                <div className="video-solution-card" key={video.file || video.youtubeId}>
                  {video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      title={`${worksheet.title} ${video.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <video controls playsInline preload="metadata">
                      <source src={`${mediaBasePath}${video.file}`} type="video/mp4" />
                      Your browser does not support the video player.
                    </video>
                  )}
                  <div>
                    <span>VIDEO SOLUTION</span>
                    <h3>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-resource-box video-resource-box">
              <span>VIDEO</span>
              <h3>No video solutions added yet</h3>
              <p>Recorded solutions for this worksheet can be added here later.</p>
            </div>
          )}
        </article>
      </section>

      <div className="resource-back-link">
        <Link href="/lessons/electric-field-strength/resources">
          Return to Additional Practice <ArrowIcon />
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
