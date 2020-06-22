

interface consoleLogFunction {
  (somthing:string): void
}

interface someInterface  {
  someString: string;
  consoleLogSomething: consoleLogFunction;
}

export {someInterface, consoleLogFunction }
