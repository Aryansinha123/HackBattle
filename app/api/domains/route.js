import dbConnect from '../../../lib/mongodb';
import Domain from '../../../models/Domain';

export async function GET() {
  await dbConnect();
  const items = await Domain.find({}).sort({ name: 1 }).lean();
  return new Response(JSON.stringify(items), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const created = await Domain.create(body);
  return new Response(JSON.stringify(created), { status: 201, headers: { 'Content-Type': 'application/json' } });
}
