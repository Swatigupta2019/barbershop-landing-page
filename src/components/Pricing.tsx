"use client";

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const packages = [
  {
    name: "Classic Cut",
    price: 30,
    description: "Traditional barbering service",
    features: [
      "Professional haircut",
      "Hot towel service",
      "Neck shave",
      "Style consultation",
    ],
  },
  {
    name: "Premium Package",
    price: 45,
    description: "Complete grooming experience",
    features: [
      "Professional haircut",
      "Hot towel service",
      "Neck shave",
      "Beard trim & shape",
      "Style consultation",
      "Premium products",
    ],
    featured: true,
  },
  {
    name: "Royal Treatment",
    price: 60,
    description: "Ultimate luxury service",
    features: [
      "Professional haircut",
      "Hot towel service",
      "Neck shave",
      "Beard trim & shape",
      "Style consultation",
      "Premium products",
      "Scalp massage",
      "Face massage",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Service Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect package for your grooming needs
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 bg-white rounded-2xl shadow-xl ${
                  pkg.featured ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="mt-2 text-gray-600">{pkg.description}</p>
                  <p className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${pkg.price}
                    </span>
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#book-now"
                    className={`block w-full py-3 px-6 text-center rounded-lg font-semibold ${
                      pkg.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition duration-300`}
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 