import { motion } from 'framer-motion';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features, recommended }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative p-8 rounded-2xl border ${
        recommended ? 'border-primary bg-white shadow-xl scale-105 z-10' : 'border-gray-200 bg-white'
      }`}
    >
      {recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Best Value
        </span>
      )}
      <h3 className="text-2xl font-serif font-bold text-center mb-4">{title}</h3>
      <div className="text-center mb-8">
        <span className="text-4xl font-bold text-primary">{price}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-bold transition-colors ${
        recommended ? 'bg-primary text-white hover:bg-accent' : 'bg-secondary text-primary hover:bg-primary hover:text-white'
      }`}>
        Choose Package
      </button>
    </motion.div>
  );
};

export default PriceCard;
