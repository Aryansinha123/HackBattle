import dbConnect from '../../../../../lib/mongodb';
import Exercise from '../../../../../models/Exercise';

export async function GET(_req, { params }) {
  await dbConnect();
  const item = await Exercise.findOne({ domainId: params.domain, slug: params.slug }).lean();
  if (!item) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(item), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
