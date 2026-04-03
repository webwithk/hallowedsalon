import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Heart, ShieldCheck, ThumbsUp, MapPin, Phone, Clock, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import PriceCard from './components/PriceCard';
import Accordion from './components/Accordion';
import BookingForm from './components/BookingForm';

const App = () => {
  const [galleryFilter, setGalleryFilter] = useState('All');

  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Trendy cuts and professional styling tailored to your face shape and personality.',
      image: '/images/service-hair.jpg',
      icon: <Scissors size={24} />
    },
    {
      title: 'Hair Coloring',
      description: 'Expert color treatments, highlights, and balayage using premium, hair-safe products.',
      image: '/images/service-hair.jpg', // Reusing for consistency or fetch more
      icon: <Sparkles size={24} />
    },
    {
      title: 'Facial & Skincare',
      description: 'Glow-enhancing treatments that rejuvenate your skin and provide a relaxing experience.',
      image: '/images/service-facial.jpg',
      icon: <Heart size={24} />
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Relaxing nail care with premium polishes and therapeutic hand/foot massages.',
      image: '/images/service-nails.jpg',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Bridal Makeup',
      description: 'The perfect look for your big day, designed to make you look stunning in every light.',
      image: '/images/service-bridal.jpg',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Hair Spa',
      description: 'Deep conditioning and restorative treatments to bring life back to your hair.',
      image: '/images/hero.jpg',
      icon: <Scissors size={24} />
    }
  ];

  const galleryItems = [
    { category: 'Hair', image: '/images/service-hair.jpg' },
    { category: 'Makeup', image: '/images/service-bridal.jpg' },
    { category: 'Nails', image: '/images/service-nails.jpg' },
    { category: 'Bridal', image: '/images/service-bridal.jpg' },
    { category: 'Hair', image: '/images/hero.jpg' },
    { category: 'Makeup', image: '/images/service-facial.jpg' },
  ];

  const filteredGallery = galleryFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 parallax"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero.jpg')" 
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Transform Your Look with <br />
            <span className="text-primary italic">Hallowed Unisex Salon</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary mb-10 max-w-2xl mx-auto"
          >
            Premium hair, beauty, and spa services tailored just for you. 
            Experience excellence in every touch.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#booking" 
              className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all transform hover:scale-105"
            >
              Book an Appointment
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-dark-neutral transition-all transform hover:scale-105"
            >
              View Services
            </a>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/team-1.jpg" 
                alt="Salon Interior" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 border-8 border-secondary rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/team-2.jpg" alt="Stylist" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-dark-neutral">About Us</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hallowed Unisex Salon is a premium beauty destination dedicated to enhancing your natural beauty with expert care and modern techniques. Our team of highly skilled professionals is committed to providing a luxurious and personalized experience for every client.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Hygiene & Safety</h4>
                  <p className="text-sm text-gray-500">Highest standards of cleanliness.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                    <ThumbsUp size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Quality Service</h4>
                  <p className="text-sm text-gray-500">Premium products and expert care.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                    <Heart size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Satisfaction</h4>
                  <p className="text-sm text-gray-500">We ensure you leave happy.</p>
                </div>
              </div>

              <div className="bg-secondary/30 p-8 rounded-2xl border-l-4 border-primary">
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-gray-600 italic">"To empower individuals by revealing their inner beauty through exceptional styling and holistic care."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of professional beauty and grooming services designed to make you look and feel your best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Work</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'Hair', 'Makeup', 'Nails', 'Bridal'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setGalleryFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    galleryFilter === filter 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-secondary text-primary hover:bg-primary/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={`${item.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group h-80 overflow-hidden rounded-2xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-xl border-b-2 border-primary">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Pricing & Packages</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard 
              title="Essential"
              price="₹499"
              features={['Haircut & Styling', 'Hair Wash', 'Blow Dry', 'Expert Consultation']}
            />
            <PriceCard 
              title="Luxury Spa"
              recommended
              price="₹1,499"
              features={['Deep Condition Hair Spa', 'Head Massage', 'Basic Facial', 'Steam & Wash']}
            />
            <PriceCard 
              title="Bridal Special"
              price="₹9,999"
              features={['Full Bridal Makeup', 'Hairstyle & Draping', 'Manicure & Pedicure', 'Trial Session']}
            />
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="booking" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Book Your Appointment</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your look? Reserve your spot today. Select your service, preferred stylist, and a time that works for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us Directly</p>
                    <p className="font-bold">+91 90242 63865</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-bold">hello@hallowed.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-neutral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Priya Sharma"
              rating={5}
              text="Amazing service! I got my bridal makeup done here and I couldn't be happier. The staff is professional and friendly."
            />
            <TestimonialCard 
              name="Rahul Verma"
              rating={5}
              text="Best salon experience ever! The haircut was exactly what I wanted. Highly recommended for men's styling as well."
            />
            <TestimonialCard 
              name="Ananya Gupta"
              rating={5}
              text="Professional and friendly staff. The facial treatment left my skin glowing for weeks. Definitely my go-to salon now."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>
          
          <div className="space-y-2">
            <Accordion 
              question="Do I need an appointment?"
              answer="While we welcome walk-ins, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist without any wait."
            />
            <Accordion 
              question="What products do you use?"
              answer="We use only premium, professional-grade products from world-renowned brands like L'Oréal Professionnel, Wella, and Schwarzkopf to ensure the best results for your hair and skin."
            />
            <Accordion 
              question="Are walk-ins allowed?"
              answer="Yes, we do accept walk-ins based on availability. However, for specialized services like bridal makeup or complex hair coloring, prior booking is mandatory."
            />
            <Accordion 
              question="What are your working hours?"
              answer="We are open 7 days a week from 10:00 AM to 8:00 PM."
            />
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-dark-neutral">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-gray-600">Celebration Mall Road, RK Circle, Punjawati, Pulla Bhuwana, Udaipur, Rajasthan 313001</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-sm mt-2 inline-block hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-600">+91 90242 63865</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Working Hours</h4>
                    <p className="text-gray-600">Mon – Sun: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.531065715975!2d73.704207!3d24.605389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56700000001%3A0x633919e1e7555555!2sHallowed%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1625648484848!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
