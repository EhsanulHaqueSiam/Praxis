import { CheckCircle, Minus } from "@phosphor-icons/react";
import { SectionHeader } from "~/components/shared/SectionHeader";

interface FeatureRow {
  feature: string;
  free: boolean;
  pro: boolean;
}

interface FeatureGroup {
  category: string;
  rows: FeatureRow[];
}

const featureGroups: FeatureGroup[] = [
  {
    category: "Learning",
    rows: [
      { feature: "Project-based courses", free: true, pro: true },
      { feature: "Course limit", free: false, pro: true },
      { feature: "Interactive code editor", free: true, pro: true },
      { feature: "Offline downloads", free: false, pro: true },
    ],
  },
  {
    category: "Reviews",
    rows: [
      { feature: "Automated feedback", free: true, pro: true },
      { feature: "Priority code reviews", free: false, pro: true },
      { feature: "1-on-1 review sessions", free: false, pro: true },
    ],
  },
  {
    category: "Community",
    rows: [
      { feature: "Discord access", free: true, pro: true },
      { feature: "Live mentorship sessions", free: false, pro: true },
    ],
  },
  {
    category: "Certificates",
    rows: [
      { feature: "Basic certificates", free: true, pro: true },
      { feature: "Verified premium certificates", free: false, pro: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Email support", free: true, pro: true },
      { feature: "Priority support (< 4h)", free: false, pro: true },
    ],
  },
];

function Check({ value }: { value: boolean }) {
  return value ? (
    <CheckCircle size={18} weight="fill" className="text-accent-400" />
  ) : (
    <Minus size={18} className="text-zinc-700" />
  );
}

export function FeatureTable() {
  return (
    <section className="bg-zinc-950 py-24 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <SectionHeader
          dark
          title="Full feature comparison"
          subtitle="Everything included in each plan, broken down by category."
        />
        <div className="overflow-x-auto">
          <table className="w-full rounded-2xl border border-white/[0.06] bg-zinc-900 overflow-hidden">
            <thead>
              <tr className="bg-zinc-800/50">
                <th className="text-left px-6 py-4 font-display font-bold text-sm text-zinc-300">
                  Feature
                </th>
                <th className="px-6 py-4 font-display font-bold text-sm text-zinc-400 text-center w-28">
                  Free
                </th>
                <th className="px-6 py-4 font-display font-bold text-sm text-accent-400 text-center w-28">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {featureGroups.map((group) => (
                <>
                  <tr key={`cat-${group.category}`} className="bg-zinc-800/30">
                    <td
                      colSpan={3}
                      className="px-6 py-3 font-display font-bold text-xs uppercase tracking-wider text-zinc-500"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-zinc-800 ${
                        i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-900/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-zinc-400">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Check value={row.free} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Check value={row.pro} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
