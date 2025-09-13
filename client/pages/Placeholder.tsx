import { Link } from "react-router-dom";

export default function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <main className="min-h-[60vh]">
      <section className="container py-16">
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-3 text-muted-foreground max-w-prose">
            {description ||
              "This section is coming soon. Continue prompting to flesh out the exact content and features you want here."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
