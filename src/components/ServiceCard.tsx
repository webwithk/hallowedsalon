import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
      </div>
      <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-primary shadow-md">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href="#booking"
          className="inline-block text-primary font-semibold text-sm border-b-2 border-primary hover:text-accent hover:border-accent transition-colors"
        >
          Book Service
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
