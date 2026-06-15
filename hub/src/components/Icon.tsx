import {
  LayoutDashboard, FolderOpen, BookOpen, Clapperboard, CalendarRange,
  KanbanSquare, Wallet, Users, Cpu, Landmark, Lightbulb, Handshake,
  Search, Menu, X, Clock, FileText, ArrowLeft, ArrowRight, ChevronRight,
  ExternalLink, Sparkles, CheckCircle2, Circle, CircleDot, Hammer,
  TrendingUp, TrendingDown, Coins, Banknote, PiggyBank, Target, Flag,
  Milestone, ListChecks, CheckSquare, Square, Plus, Trash2, GripVertical,
  Music, Mic, Palette, Film, Camera, Megaphone, Newspaper, Star, Heart,
  MapPin, Building2, Network, Workflow, Rocket, Wrench, Image, Video,
  Volume2, Quote, CalendarDays, Users2, Pencil, Check, AlertCircle,
  type LucideProps,
} from "lucide-react";

const registry = {
  LayoutDashboard, FolderOpen, BookOpen, Clapperboard, CalendarRange,
  KanbanSquare, Wallet, Users, Cpu, Landmark, Lightbulb, Handshake,
  Search, Menu, X, Clock, FileText, ArrowLeft, ArrowRight, ChevronRight,
  ExternalLink, Sparkles, CheckCircle2, Circle, CircleDot, Hammer,
  TrendingUp, TrendingDown, Coins, Banknote, PiggyBank, Target, Flag,
  Milestone, ListChecks, CheckSquare, Square, Plus, Trash2, GripVertical,
  Music, Mic, Palette, Film, Camera, Megaphone, Newspaper, Star, Heart,
  MapPin, Building2, Network, Workflow, Rocket, Wrench, Image, Video,
  Volume2, Quote, CalendarDays, Users2, Pencil, Check, AlertCircle,
} as const;

export type IconName = keyof typeof registry;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = registry[name as IconName] ?? Circle;
  return <Cmp {...props} />;
}
