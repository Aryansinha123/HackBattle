import mongoose from 'mongoose';

const SampleSchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    output: { type: String, required: true }
  },
  { _id: false }
);

const ExerciseSchema = new mongoose.Schema(
  {
    domainId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'easy' },
    description: { type: String, default: '' },
    starterCode: { type: String, default: '' },
    samples: { type: [SampleSchema], default: [] }
  },
  { timestamps: true }
);

ExerciseSchema.index({ domainId: 1, slug: 1 }, { unique: true });

export default mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema);
