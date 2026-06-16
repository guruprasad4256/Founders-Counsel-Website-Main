export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "what-makes-a-real-founder",
    title: "What actually makes someone a real founder",
    excerpt:
      "There's a difference between starting a company and building one. We unpack the line between operators and audience-builders.",
    date: "2025-04-12",
    readTime: "6 min read",
    category: "Mindset",
    author: "The Counsel",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Anyone can call themselves a founder. Few earn the title. The difference shows up in the boring weeks - the ones with no launches, no metrics moving, just the slow grind of shipping the next thing.",
      "Real founders are operators first. They sit in the unsexy work: customer calls, churn analysis, hiring, firing, payroll. They don't outsource the parts that hurt.",
      "If you're spending more time talking about building than building, you already know which side of the line you're on. The good news: it's a choice you make again every morning.",
    ],
  },
  {
    slug: "the-curated-network-effect",
    title: "The curated network effect",
    excerpt:
      "Why a 200-person room of vetted founders outperforms a 200,000-person Slack - every single time.",
    date: "2025-03-28",
    readTime: "5 min read",
    category: "Community",
    author: "The Counsel",
    cover:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Scale kills signal. Once a community crosses a few thousand members, the median quality drops and so does what you can extract from it.",
      "Curation flips the math. When every member has been vetted, every introduction is pre-qualified. You stop wading through noise to find the one person who can move your week forward.",
      "The compounding is quiet but real: warm intros, candid feedback, deal-flow that never hits a public list. That's the curated network effect.",
    ],
  },
  {
    slug: "growth-without-the-fluff",
    title: "Growth without the fluff",
    excerpt:
      "A no-nonsense framework for picking the one growth lever that actually moves your number this quarter.",
    date: "2025-03-10",
    readTime: "7 min read",
    category: "Growth",
    author: "The Counsel",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Most growth advice is generic because it's written for everyone. Yours shouldn't be.",
      "Start by writing down the one number that, if it doubled, would change your business. Then write the three inputs that drive it. Pick the one input you actually control. That's your lever.",
      "Everything else is a distraction this quarter. You can revisit the rest in 90 days.",
    ],
  },
  {
    slug: "founder-led-sales-playbook",
    title: "The founder-led sales playbook",
    excerpt:
      "Before you hire your first AE, you need to be the best closer in the company. Here's how to get there.",
    date: "2025-02-22",
    readTime: "8 min read",
    category: "Sales",
    author: "The Counsel",
    cover:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Founder-led sales isn't a phase you skip. It's where you learn the language your customers actually use to describe the problem.",
      "Run every call yourself for the first 50. Record them. Re-listen at 1.5x. Write down the exact phrases that make people lean in.",
      "When you hand sales off, you're handing off a script that already converts - not a hypothesis.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
