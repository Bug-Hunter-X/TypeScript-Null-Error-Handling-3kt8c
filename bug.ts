function printName(name: string | null): void {
  console.log(name.toUpperCase());
}

printName(null); // Error: Object is possibly 'null'.