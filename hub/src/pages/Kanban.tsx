import { PageHeader } from "@/components/ui/primitives";

// Wave 2 target — replaced by the kanban agent.
export function Kanban() {
  return (
    <div>
      <PageHeader title="Tarefas" blurb="Quadro de tarefas por etapa: a fazer, fazendo, feito." />
      <p className="text-sm text-muted-foreground">Em construção (Wave 2).</p>
    </div>
  );
}
