import { StatsBand } from "~/components/shared/StatsBand";

const stats = [
  { value: "11,480+", label: "Community members" },
  { value: "42", label: "Countries represented" },
  { value: "3,240", label: "Projects shipped" },
  { value: "83", label: "Active mentors" },
];

export function CommunityStats() {
  return <StatsBand stats={stats} />;
}
