import mongoose from 'mongoose';

const DomainSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.models.Domain || mongoose.model('Domain', DomainSchema);
