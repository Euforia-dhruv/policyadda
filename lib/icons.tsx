/** Lightweight SVG icon components — no external deps. */

interface IconProps {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

const S = (size: number, cls?: string) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  className: cls, "aria-hidden": true,
});

export function Shield({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
export function Car({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z"/></svg>;
}
export function Heart({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
}
export function Briefcase({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
}
export function Phone({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
}
export function Clock({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
}
export function Mail({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>;
}
export function Message({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
}
export function Search({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>;
}
export function Check({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M20 6L9 17l-5-5"/></svg>;
}
export function X({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M18 6L6 18M6 6l12 12"/></svg>;
}
export function ChevronDown({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M6 9l6 6 6-6"/></svg>;
}
export function ChevronRight({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M9 18l6-6-6-6"/></svg>;
}
export function ArrowRight({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
export function Star({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
}
export function Lock({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
}
export function Info({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>;
}
export function AlertTriangle({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>;
}
export function FileText({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>;
}
export function User({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
export function Building({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
}
export function Globe({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
}
export function MapPin({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
export function ExternalLink({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;
}
export function Home({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
export function Plane({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.5 3-2.8 2.8-1.8-.4c-.4-.1-.8.1-1 .3l-.2.2c-.3.3-.2.7.1.9l2.5 1.5 1.5 2.5c.2.3.6.4.9.1l.2-.2c.2-.2.4-.6.3-1l-.4-1.8 2.8-2.8 3 5.5c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>;
}
export function Camera({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
}
export function Sun({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}
export function Moon({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;
}
export function Menu({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}
export function Edit({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
}
export function Send({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
}
export function Diamond({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><rect x="4.5" y="4.5" width="15" height="15" rx="1" transform="rotate(45 12 12)"/></svg>;
}
export function Sparkle({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M12 2l1.09 3.41L16.5 6.5l-3.41 1.09L12 11l-1.09-3.41L7.5 6.5l3.41-1.09L12 2z"/><path d="M19 14l.68 2.12 2.12.68-2.12.68L19 19.6l-.68-2.12L16.2 16.8l2.12-.68L19 14z" opacity=".6"/></svg>;
}
export function Cross({ size = 20, className }: IconProps) {
  return <svg {...S(size, className)}><path d="M12 4v16M4 12h16"/></svg>;
}

/** Map category icon keys to SVG components. */
const categoryIconMap: Record<string, React.ComponentType<IconProps>> = {
  car: Car,
  cross: Cross,
  heart: Heart,
  briefcase: Briefcase,
  home: Home,
  plane: Plane,
};

export function CategoryIcon({ icon, size = 22, className }: { icon: string; size?: number; className?: string }) {
  const Icon = categoryIconMap[icon];
  return Icon ? <Icon size={size} className={className} /> : <span>{icon}</span>;
}
