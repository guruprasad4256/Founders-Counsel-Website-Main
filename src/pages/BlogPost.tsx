import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getPost, posts } from "@/data/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Founder's Counsel & Co.",
      logo: {
        "@type": "ImageObject",
        url: "https://founderscounsel.com/favicon.png",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} — Founder's Counsel & Co.</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://founderscounsel.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.cover} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden bg-hero pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
          <div className="relative mx-auto max-w-3xl px-6 md:px-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Journal
            </Link>
            <span className="mt-8 block text-xs uppercase tracking-[0.3em] text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground md:text-6xl">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Cover */}
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="overflow-hidden rounded-3xl border border-border/60">
            <img src={post.cover} alt={post.title} className="h-auto w-full object-cover" />
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          {post.content.map((para, i) => (
            <p
              key={i}
              className="mb-6 text-lg leading-relaxed text-foreground/90 first:first-letter:float-left first:first-letter:mr-3 first:first-letter:font-display first:first-letter:text-6xl first:first-letter:leading-[0.9] first:first-letter:text-primary"
            >
              {para}
            </p>
          ))}
        </article>

        {/* More essays */}
        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                More essays
              </h2>
              <Link
                to="/blog"
                className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col bg-card transition duration-500 hover:bg-secondary"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-foreground">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
