import 'dotenv/config';
import dbConnect from '../lib/mongodb.js';
import Domain from '../models/Domain.js';
import Exercise from '../models/Exercise.js';

async function main() {
  await dbConnect();

  const domains = [
    { id: 'dsa', name: 'Data Structures & Algorithms', description: 'Classic algorithmic problems and coding challenges.' },
    { id: 'webdev', name: 'Web Development', description: 'HTML, CSS, JavaScript and frontend/backend fundamentals.' }
  ];

  const exercises = [
    {
      domainId: 'dsa', title: 'Greatest Common Divisor (GCD)', slug: 'gcd', difficulty: 'easy',
      description: 'Given two integers a and b (0 ≤ a, b ≤ 1e9), compute their greatest common divisor.',
      starterCode: `function solve(input) {\n  const [aStr, bStr] = input.trim().split(/\s+/);\n  let a = Number(aStr), b = Number(bStr);\n  function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }\n  return String(gcd(a, b));\n}\n\nmodule.exports = { solve };`,
      samples: [ { input: '12 18', output: '6' }, { input: '10 15', output: '5' } ]
    },
    {
      domainId: 'dsa', title: 'Two Sum Indexes', slug: 'two-sum', difficulty: 'easy',
      description: 'Given an array and a target, return indexes i, j such that nums[i] + nums[j] == target. Return i<j as space separated indexes or -1 if none.',
      starterCode: `function solve(input) {\n  const lines = input.trim().split(/\n+/);\n  const n = Number(lines[0]);\n  const nums = lines[1].trim().split(/\s+/).map(Number);\n  const target = Number(lines[2]);\n  const seen = new Map();\n  for (let j = 0; j < n; j++) {\n    const need = target - nums[j];\n    if (seen.has(need)) { return \`${'${seen.get(need)}'} ${'${j}'}\`; }\n    seen.set(nums[j], j);\n  }\n  return '-1';\n}\n\nmodule.exports = { solve };`,
      samples: [ { input: '4\n2 7 11 15\n9', output: '0 1' }, { input: '3\n1 2 3\n10', output: '-1' } ]
    },
    {
      domainId: 'webdev', title: 'Reverse a String', slug: 'reverse-string', difficulty: 'easy',
      description: 'Given a string, return its reverse. Useful to warm up with JavaScript string methods.',
      starterCode: `function solve(input) {\n  return input.split('').reverse().join('');\n}\n\nmodule.exports = { solve };`,
      samples: [ { input: 'hello', output: 'olleh' }, { input: 'abc', output: 'cba' } ]
    }
  ];

  await Domain.deleteMany({});
  await Exercise.deleteMany({});
  await Domain.insertMany(domains);
  await Exercise.insertMany(exercises);

  console.log('Seed completed');
  process.exit(0);
}

main().catch((err) => { console.error(err); process.exit(1); });
