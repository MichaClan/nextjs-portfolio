"use client";

type SkillItem = {
  name: string;
  level: "Comfortable" | "Working Knowledge" | "Basic / Exploring";
  percentage: number;
  description?: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", level: "Comfortable", percentage: 75, description: "Main stack for modern projects & App Router" },
      { name: "JavaScript & HTML/CSS", level: "Comfortable", percentage: 78, description: "Solid understanding built over first 2 years" },
      { name: "Tailwind CSS", level: "Comfortable", percentage: 75, description: "Responsive layouts & custom component styling" },
      { name: "Bootstrap", level: "Working Knowledge", percentage: 60, description: "Covered early in school coursework" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "PHP", level: "Working Knowledge", percentage: 65, description: "CRUD applications & form handling" },
      { name: "MySQL & PostgreSQL", level: "Working Knowledge", percentage: 60, description: "Database design, queries, and Prisma ORM integration" },
      { name: "Symfony", level: "Basic / Exploring", percentage: 45, description: "Explored during school framework choices" },
    ],
  },
  {
    title: "Game Dev & Engines",
    skills: [
      { name: "Godot & GDScript", level: "Working Knowledge", percentage: 55, description: "Built fighting game prototypes & 3D movement logic" },
      { name: "Roblox Studio & Lua", level: "Basic / Exploring", percentage: 45, description: "Started in 2017: workspace editing & code tinkering" },
      { name: "Blender", level: "Basic / Exploring", percentage: 35, description: "Basic 3D modeling and visual tweaking" },
    ],
  },
  {
    title: "AI & Mindset",
    skills: [
      { name: "Local LLMs & AI Tools", level: "Working Knowledge", percentage: 65, description: "School AI experiments & practical daily usage" },
      { name: "Self-Driven Learning", level: "Comfortable", percentage: 85, description: "Persistent, independent curiosity with a personal twist" },
      { name: "Git & Vercel", level: "Working Knowledge", percentage: 70, description: "Version control & automated deployments" },
    ],
  },
];

export default function SkillsBrowser() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Origin Story Card */}
      <section className="rounded-lg border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-light tracking-tight md:text-3xl">
          Where it all started
        </h2>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
          My programming journey started back in 2017 when I was 10 years old. 
          I started messing around in Roblox Studio with friends. Resizing models, 
          tinkering with scripts, and figuring out how code makes things move.
        </p>
        <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted">
          Now as an MBO 4 student, I love trying out new technologies. From 
          full-stack web development with Next.js to local AI experiments 
          and game prototypes.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="border-b border-border pb-3 text-xl font-medium tracking-tight">
              {category.title}
            </h3>

            <div className="mt-5 space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-mono text-accent">
                      {skill.level}
                    </span>
                  </div>

                  {/* Meter bar */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-border/50">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  {skill.description && (
                    <p className="text-xs text-muted leading-normal">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}