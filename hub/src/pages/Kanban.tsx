import * as React from "react";
import { useEffect, useState } from "react";
import { PageHeader, Card, CardHeader, CardTitle, CardBody, Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

type ColumnId = "todo" | "doing" | "done";

interface Task {
  id: string;
  title: string;
  column: ColumnId;
}

interface ColumnDef {
  id: ColumnId;
  title: string;
  tone: "muted" | "accent" | "primary";
  headerClass: string;
}

const COLUMNS: ColumnDef[] = [
  { id: "todo", title: "A fazer", tone: "muted", headerClass: "bg-muted text-muted-foreground" },
  { id: "doing", title: "Fazendo", tone: "accent", headerClass: "bg-accent text-accent-foreground" },
  { id: "done", title: "Feito", tone: "primary", headerClass: "bg-primary text-primary-foreground" },
];

const STORAGE_KEY = "oe-kanban";

function seedTasks(): Task[] {
  const todo = [
    "Fechar fee e % de sociedade com Gabriel e Flávio",
    "Levar proposta única ao Thales / Clube do Calunguinha",
    "Conversa de escuta com Thales e Luiz Adolfo (destrava a Lacuna 6)",
    "Abrir CPC + cadastro no Mapa Cultural PE",
    "Definir titularidade do canal no YouTube",
    "Gerar character sheets (Calunguinha, Homem da Meia-Noite, Tico+Chico)",
    "Produzir o EP00 (~90s)",
  ];
  const doing = [
    "Executar protocolo de teste de estilo (Semana 2)",
    "Master Style Prompt + travar gerador",
  ];
  const done = [
    "Bíblia do universo v1.2",
    "Comparativo de custos tradicional × IA",
    "Orçamento consolidado com a equipe",
  ];

  let counter = 0;
  const make = (title: string, column: ColumnId): Task => ({
    id: `seed-${counter++}-${column}`,
    title,
    column,
  });

  return [
    ...todo.map((t) => make(t, "todo")),
    ...doing.map((t) => make(t, "doing")),
    ...done.map((t) => make(t, "done")),
  ];
}

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedTasks();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return seedTasks();
    return parsed as Task[];
  } catch {
    return seedTasks();
  }
}

const COLUMN_ORDER: ColumnId[] = ["todo", "doing", "done"];

function neighborColumn(column: ColumnId, direction: -1 | 1): ColumnId | null {
  const idx = COLUMN_ORDER.indexOf(column);
  const nextIdx = idx + direction;
  if (nextIdx < 0 || nextIdx >= COLUMN_ORDER.length) return null;
  return COLUMN_ORDER[nextIdx];
}

export function Kanban() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function moveTask(id: string, direction: -1 | 1) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const target = neighborColumn(task.column, direction);
        if (!target) return task;
        return { ...task, column: target };
      })
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function addTask() {
    const title = newTitle.trim();
    if (!title) return;
    const id = `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setTasks((prev) => [...prev, { id, title, column: "todo" }]);
    setNewTitle("");
  }

  function handleNewTaskKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  }

  return (
    <div>
      <PageHeader
        title="Tarefas"
        blurb="Quadro de tarefas por etapa: a fazer, fazendo, feito."
      >
        <div className="flex w-full max-w-md items-center gap-2 sm:w-auto">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleNewTaskKeyDown}
            placeholder="Nova tarefa (vai para A fazer)"
            className="w-full rounded-lg border bg-card px-3 py-2 text-sm text-card-foreground shadow-card outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={addTask}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-card transition-all hover:shadow-lift"
          >
            <Icon name="Plus" className="h-4 w-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {COLUMNS.map((col) => {
          const colTasks = tasks.filter((t) => t.column === col.id);
          return (
            <Card key={col.id} className="flex flex-col">
              <CardHeader className={cn("rounded-t-lg", col.headerClass)}>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base">{col.title}</CardTitle>
                  <Badge tone={col.tone === "muted" ? "default" : col.tone}>
                    {colTasks.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardBody className="flex flex-1 flex-col gap-2">
                {colTasks.length === 0 && (
                  <p className="text-sm text-muted-foreground">Sem tarefas.</p>
                )}
                {colTasks.map((task) => {
                  const canMoveLeft = neighborColumn(task.column, -1) !== null;
                  const canMoveRight = neighborColumn(task.column, 1) !== null;
                  return (
                    <div
                      key={task.id}
                      className="flex items-start justify-between gap-2 rounded-lg border bg-background p-3 shadow-card"
                    >
                      <p className="flex-1 text-sm leading-snug">{task.title}</p>
                      <div className="flex shrink-0 items-center gap-1">
                        <button
                          type="button"
                          aria-label="Mover para a coluna anterior"
                          disabled={!canMoveLeft}
                          onClick={() => moveTask(task.id, -1)}
                          className={cn(
                            "rounded-md border p-1 transition-colors",
                            canMoveLeft
                              ? "hover:bg-muted"
                              : "cursor-not-allowed opacity-30"
                          )}
                        >
                          <Icon name="ArrowLeft" className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          aria-label="Mover para a próxima coluna"
                          disabled={!canMoveRight}
                          onClick={() => moveTask(task.id, 1)}
                          className={cn(
                            "rounded-md border p-1 transition-colors",
                            canMoveRight
                              ? "hover:bg-muted"
                              : "cursor-not-allowed opacity-30"
                          )}
                        >
                          <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          aria-label="Excluir tarefa"
                          onClick={() => deleteTask(task.id)}
                          className="rounded-md border p-1 text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
                        >
                          <Icon name="Trash2" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
