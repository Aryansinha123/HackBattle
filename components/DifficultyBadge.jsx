export default function DifficultyBadge({ level }) {
  const normalized = (level || '').toLowerCase();
  const color = normalized === 'easy'
    ? 'bg-green-100 text-green-800'
    : normalized === 'medium'
    ? 'bg-yellow-100 text-yellow-800'
    : normalized === 'hard'
    ? 'bg-red-100 text-red-800'
    : 'bg-gray-100 text-gray-800';
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded ${color}`}>{normalized || 'n/a'}</span>
  );
}



