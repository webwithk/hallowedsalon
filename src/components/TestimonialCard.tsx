import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, rating }) => {
  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-sm border border-primary/10">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="text-accent fill-accent" />
        ))}
      </div>
      <p className="text-dark-neutral italic mb-6 leading-relaxed">"{text}"</p>
      <div className="font-bold text-primary">— {name}</div>
    </div>
  );
};

export default TestimonialCard;
