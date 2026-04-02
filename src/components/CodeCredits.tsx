const codeSnippets = [
  `const app = express();`,
  `import React from 'react';`,
  `function fibonacci(n) {`,
  `  if (n <= 1) return n;`,
  `  return fib(n-1) + fib(n-2);`,
  `}`,
  `SELECT * FROM users;`,
  `git commit -m "init"`,
  `const [state, setState]`,
  `  = useState(false);`,
  `npm install tailwindcss`,
  `export default App;`,
  `async function fetch() {`,
  `  const res = await api`,
  `  return res.json();`,
  `}`,
  `<div className="flex">`,
  `.container { display: grid }`,
  `docker build -t app .`,
  `const router = useRouter()`,
  `interface User {`,
  `  id: string;`,
  `  name: string;`,
  `}`,
  `useEffect(() => {`,
  `  fetchData();`,
  `}, []);`,
  `CREATE TABLE posts (`,
  `  id SERIAL PRIMARY`,
  `);`,
  `console.log("Hello!");`,
  `py manage.py runserver`,
  `const sum = arr.reduce(`,
  `  (a, b) => a + b, 0`,
  `);`,
];

export default function CodeCredits() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "600px" }}>
      <div
        className="absolute inset-0 flex justify-around opacity-[0.07] dark:opacity-[0.1]"
        style={{
          transform: "rotateX(45deg)",
          transformOrigin: "center bottom",
        }}
      >
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className="flex flex-col animate-code-scroll"
            style={{
              animationDelay: `${col * -8}s`,
              animationDuration: `${24 + col * 4}s`,
            }}
          >
            {[...codeSnippets, ...codeSnippets].map((line, i) => (
              <span
                key={i}
                className="text-foreground font-mono text-xs md:text-sm whitespace-nowrap py-1"
              >
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
