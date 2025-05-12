"use client";

import { motion } from 'framer-motion';
import { ScissorsIcon, UserIcon, SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Classic Haircuts',
    description: 'Precision cuts tailored to your style and preferences',
    icon: ScissorsIcon,
  },
  {
    name: 'Beard Grooming',
    description: 'Expert beard trimming and shaping services',
    icon: UserIcon,
  },
  {
    name: 'Hot Towel Shaves',
    description: 'Luxurious traditional straight razor shaves',
    icon: SparklesIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Premium grooming services for the modern gentleman
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 