import { useState } from "react";
import { toast } from "sonner";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapIcon className="text-furniture-green w-8 h-8" />,
      title: "Visit Our Showroom",
      details: ["123 Furniture Street, Design District, NY 10001"],
    },
    {
      icon: <PhoneIcon className="text-furniture-green w-8 h-8" />,
      title: "Call Us",
      details: ["(123) 456-7890"],
    },
    {
      icon: <EmailIcon className="text-furniture-green w-8 h-8" />,
      title: "Email Us",
      details: ["info@furniture.com"],
    },
    {
      icon: <AccessTimeIcon className="text-furniture-green w-8 h-8" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9am - 5pm"],
    },
  ];

  return (
      <>
          <div className="min-h-screen color pb-16">
              {/* Hero Section */}
              <div className="py-16 text-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
                  <div className="max-w-6xl mx-auto">
                      <h1 className="font-bold text-5xl mb-5">Get in Touch</h1>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          Have questions about our furniture or need design
                          consultation? We'd love to hear from you and help
                          bring your vision to life.
                      </p>
                  </div>
              </div>

              {/* Contact Form and Info */}
              <div className="container mx-auto px-4 pt-12 lg:pt-20 ">
                  <div className="flex flex-col gap-8 lg:flex-row">
                      {/* Contact Form */}
                      <div className="w-full lg:w-1/2 xl:w-[50%] mx-auto">
                          <div className="border bg-white border-gray-20 rounded-xl p-6 md:p-8">
                              <h2 className="text-2xl font-bold mb-6 text-center md:text-3xl">
                                  Send us a Message
                              </h2>
                              <form
                                  onSubmit={handleSubmit}
                                  className="space-y-6"
                              >
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div>
                                          <label
                                              htmlFor="name"
                                              className="block text-sm font-medium text-gray-700 mb-1"
                                          >
                                              Name *
                                          </label>
                                          <input
                                              type="text"
                                              id="name"
                                              name="name"
                                              value={formData.name}
                                              onChange={handleInputChange}
                                              required
                                              className="w-full color px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-furniture-green focus:border-transparent"
                                          />
                                      </div>
                                      <div>
                                          <label
                                              htmlFor="email"
                                              className="block text-sm font-medium text-gray-700 mb-1"
                                          >
                                              Email *
                                          </label>
                                          <input
                                              type="email"
                                              id="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleInputChange}
                                              required
                                              className="w-full color px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-furniture-green focus:border-transparent"
                                          />
                                      </div>
                                  </div>
                                  <div>
                                      <label
                                          htmlFor="subject"
                                          className="block text-sm font-medium text-gray-700 mb-1"
                                      >
                                          Subject
                                      </label>
                                      <input
                                          type="text"
                                          id="subject"
                                          name="subject"
                                          value={formData.subject}
                                          onChange={handleInputChange}
                                          className="w-full color px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-furniture-green focus:border-transparent"
                                      />
                                  </div>
                                  <div>
                                      <label
                                          htmlFor="message"
                                          className="block text-sm font-medium text-gray-700 mb-1"
                                      >
                                          Message *
                                      </label>
                                      <textarea
                                          id="message"
                                          name="message"
                                          rows="6"
                                          value={formData.message}
                                          onChange={handleInputChange}
                                          required
                                          className="w-full color px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-furniture-green focus:border-transparent"
                                      ></textarea>
                                  </div>
                                  <button
                                      type="submit"
                                      className="w-full bg-furniture-green text-white py-2 px-4 rounded-md hover:bg-furniture-green/90 transition-colors"
                                  >
                                      Send Message
                                  </button>
                              </form>
                          </div>
                      </div>

                      {/* Contact Information */}
                      <div className=" lg:w-1/2 xl:w-[50%] mx-auto">
                          <div className=" rounded-xl  p-6 md:p-8 h-full">
                              <div className="mb-8">
                                  <h2 className="text-2xl font-bold mb-4 md:text-3xl text-center">
                                      Contact Information
                                  </h2>
                                  <p className="text-gray-600">
                                      Visit our showroom to see our furniture
                                      collections in person, or reach out to us
                                      through any of the following channels.
                                  </p>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                  {contactInfo.map((info, index) => (
                                      <div
                                          key={index}
                                          className="border bg-white border-gray-200 rounded-lg p-4  transition-all duration-200"
                                      >
                                          <div className="flex items-start space-x-3">
                                              <div className="bg-furniture-green/10 p-2 rounded-lg flex-shrink-0">
                                                  {info.icon}
                                              </div>
                                              <div className="min-w-0">
                                                  <h3 className="font-semibold text-base sm:text-lg">
                                                      {info.title}
                                                  </h3>
                                                  <div className="mt-1 space-y-1">
                                                      {info.details.map(
                                                          (detail, idx) => (
                                                              <p
                                                                  key={idx}
                                                                  className="text-sm text-gray-600"
                                                              >
                                                                  {detail}
                                                              </p>
                                                          )
                                                      )}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Map Section */}
              <div className="w-full mx-auto my-14 py-14 bg-[rgb(242,240,237)]">
                  <div className=" container mx-auto px-4">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold mb-2">
                              Find Our Showroom
                          </h2>
                          <p className="text-gray-600">
                              Located in the heart of the design district, our
                              showroom features our latest collections.
                          </p>
                      </div>

                      <div className=" w-full rounded-lg   text-center">
                          <div className=" mt-8 rounded-lg overflow-hidden ">
                              <iframe
                                  title="Our Location"
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152090565!2d-73.9878446845938!3d40.7484405793279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTUuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
                                  width="100%"
                                  height="400"
                                  style={{ border: 0 }}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  className="w-full h-[400px]"
                              ></iframe>
                          </div>

                          <h3 className="text-xl font-semibold mt-4 mb-1">
                              Interactive Map
                          </h3>
                          <p className="text-gray-600 mb-4">
                              123 Furniture Street, Design District, NY 10001
                          </p>
                          <a
                              href="https://maps.google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block border border-furniture-green text-furniture-green px-6 py-2 rounded-md hover:bg-furniture-green hover:text-white transition-colors"
                          >
                              Get Directions
                          </a>
                      </div>
                  </div>
              </div>

              {/* FAQ Section */}
              <div className="py-10">
                  <div className="container max-w-4xl mx-auto px-4">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold mb-2">
                              Frequently Asked Questions
                          </h2>
                          <p className="text-gray-600">
                              Quick answers to common questions about our
                              furniture and services.
                          </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                              {
                                  question: "Do you offer custom furniture?",
                                  answer: "Yes! We specialize in custom furniture design. Contact us to discuss your specific needs and vision.",
                              },
                              {
                                  question: "What's your delivery timeframe?",
                                  answer: "Standard delivery is 2-4 weeks. Custom pieces typically take 6-8 weeks depending on complexity.",
                              },
                              {
                                  question: "Do you offer warranties?",
                                  answer: "All our furniture comes with a 5-year warranty on craftsmanship and materials.",
                              },
                              {
                                  question: "Can I schedule a consultation?",
                                  answer: "Absolutely! We offer both in-showroom and in-home design consultations. Contact us to schedule.",
                              },
                          ].map((item, index) => (
                              <div
                                  key={index}
                                  className="border border-gray-200 rounded-lg p-4 bg-white"
                              >
                                  <h3 className="font-semibold text-lg mb-2">
                                      {item.question}
                                  </h3>
                                  <p className="text-gray-600 text-sm">
                                      {item.answer}
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
