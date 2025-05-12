import { barbershopData } from '@/data/barbershop';
import { MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Come experience premium barbering services
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-600">{barbershopData.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a
                    href={`tel:${barbershopData.phone}`}
                    className="mt-1 text-blue-600 hover:text-blue-800"
                  >
                    {barbershopData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <GlobeAltIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Website</h3>
                  <a
                    href={barbershopData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-blue-600 hover:text-blue-800"
                  >
                    {barbershopData.websiteUrl.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.8755241751584!2d-97.13317492428655!3d33.21436017253699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bfa85e598cf%3A0x3b0c0c0c0c0c0c0c!2s721%20S%20Elm%20St%20%23105%2C%20Denton%2C%20TX%2076201!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 