import dbConnect from '../../../../../lib/mongodb';
import Exercise from '../../../../../models/Exercise';

export async function GET(_req, { params }) {
  await dbConnect();
  const items = await Exercise.find({ domainId: params.id }).sort({ difficulty: 1, title: 1 }).lean();
  return new Response(JSON.stringify(items), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
