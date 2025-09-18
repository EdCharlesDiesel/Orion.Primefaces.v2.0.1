// core/models/task.model.ts
export interface Task {
  id?: number;
  title: string;
  description?: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate?: string; // ISO string
  completed: boolean;
  category?: string;
}
