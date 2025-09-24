import dbConnect from '../../../../lib/mongodb';
import Domain from '../../../../models/Domain';

export async function GET(_req, { params }) {
  await dbConnect();
  const item = await Domain.findOne({ id: params.id }).lean();
  if (!item) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(item), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
