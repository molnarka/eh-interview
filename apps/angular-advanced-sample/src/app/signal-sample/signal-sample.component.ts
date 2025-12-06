import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id: string,
  title: string,
  created: Date,
  isCompleted: boolean
};

@Component({
  selector: 'app-signal-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-sample.component.html',
  styleUrl: './signal-sample.component.css',
})
export class SignalSampleComponent {
  // Counter example
  public counter: WritableSignal<number> = signal(0);

  // Computed signals are cached until the main signal is not modifier cached values
  public doubleCounter: Signal<number> = computed(() => this.counter() * 2);
  public computedString: Signal<string> = computed(() => 'Computed from signals --> Original: ' + this.counter() + ', Double: ' + this.doubleCounter());

  public increment(): void {
    this.counter.update(prev => prev + 1);
  }

  public decrement(): void {
    this.counter.update(prev => prev - 1);
  }

  public reset(): void {
    this.counter.set(0);
  }

  // Todo example
  public todos: WritableSignal<Todo[]> = signal([]);

  public addNewTodo(): void {
    const title: string | null = prompt('Todo title: ');
    if (title) {
      this.todos.update(() => [...this.todos(), {id: title + new Date(), title: title, created: new Date(), isCompleted: false} as Todo]);
    }
    else {
      alert('No title was given');
    }
  }

  public toggleTodoState(id: string): void {
    this.todos.update(() => this.todos().map((todo: Todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }));
  }

  public removeTodo(id: string): void {
    this.todos.update(() => this.todos().filter((todo: Todo) => todo.id !== id));
  }
}
