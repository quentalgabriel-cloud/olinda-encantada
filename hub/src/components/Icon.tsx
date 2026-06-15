import {
  LayoutDashboard, FolderOpen, BookOpen, Clapperboard, CalendarRange,
  KanbanSquare, Wallet, Users, Cpu, Landmark, Lightbulb, Handshake,
  Search, Menu, X, Clock, FileText, ArrowLeft, ExternalLink, Sparkles,
  CheckCircle2, Circle, CircleDot, Hammer, type LucideProps,
} from "lucide-react";

const registry = {
  LayoutDashboard, FolderOpen, BookOpen, Clapperboard, CalendarRange,
  KanbanSquare, Wallet, Users, Cpu, Landmark, Lightbulb, Handshake,
  Search, Menu, X, Clock, FileText, ArrowLeft, ExternalLink, Sparkles,
  CheckCircle2, Circle, CircleDot, Hammer,
} as const;

export type IconName = keyof typeof registry;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = registry[name as IconName] ?? Circle;
  return <Cmp {...props} />;
}
