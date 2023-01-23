export interface AppDetailsOpenerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
