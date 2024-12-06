function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null or undefined.');
  }
}

printName(null); // Outputs: 'Name is null or undefined.'

//Alternative solution using optional chaining
function printName2(name: string | null): void {
  console.log(name?.toUpperCase() || 'Name is null or undefined');
}

printName2(null); // Outputs: 'Name is null or undefined'

//Alternative solution using nullish coalescing
function printName3(name: string | null): void {
  const nameToUse = name ?? 'Name is null or undefined';
  console.log(nameToUse.toUpperCase());
}

printName3(null); // Outputs: 'NAME IS NULL OR UNDEFINED'