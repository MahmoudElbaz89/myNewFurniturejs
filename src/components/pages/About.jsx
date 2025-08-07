import { Button, Card, Typography, Container } from "@mui/material";
import {
  Groups as UsersIcon,
  EmojiEvents as AwardIcon,
  Favorite as HeartIcon,
  LocalShipping as TruckIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: <UsersIcon className="text-furniture-green text-4xl" />,
      title: "Expert Craftsmanship",
      description:
        "Our skilled artisans bring decades of experience to every piece we create.",
    },
    {
      icon: <AwardIcon className="text-furniture-green text-4xl" />,
      title: "Award-Winning Design",
      description:
        "Recognized for excellence in furniture design and innovation.",
    },
    {
      icon: <HeartIcon className="text-furniture-green text-4xl" />,
      title: "Eco-Friendly Materials",
      description: "Sustainably sourced materials for a better tomorrow.",
    },
    {
      icon: <TruckIcon className="text-furniture-green text-4xl" />,
      title: "Free Shipping",
      description: "Fast and reliable delivery to your doorstep.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria Garcia",
      role: "Master Carpenter",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "James Wilson",
      role: "Customer Experience",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  return (
      <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="py-16 text-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
              <Container maxWidth="lg">
                  <h1 className="mb-6 font-bold text-5xl ">
                      About Furniture Studio
                  </h1>
                  <h6 className="max-w-3xl mx-auto text-gray-500 text-center mb-6 ">
                      For over two decades, we've been crafting exceptional
                      furniture that combines timeless design with modern
                      functionality. Every piece tells a story of quality,
                      passion, and attention to detail.
                  </h6>
              </Container>
          </div>

          {/* Story Section */}
          <div className="py-16 color ">
              <div className="flex flex-col lg:flex-row items-center gap-12 container">
                  <div className="lg:w-1/2">
                      <span className="inline-block mb-4 px-4 py-2 text-xs font-bold uppercase tracking-wider text-furniture-green bg-furniture-green/10 rounded-full">
                          Our Story
                      </span>
                      <h1 className="mb-6 font-semibold text-5xl ">
                          Crafting Beautiful Spaces Since 2002
                      </h1>
                      <div className="space-y-4 text-gray-600 mb-8">
                          <p>
                              What started as a small family workshop has grown
                              into a renowned furniture studio. Our journey
                              began with a simple belief: furniture should be
                              more than just functional—it should inspire.
                          </p>
                          <p>
                              Today, we continue to honor traditional
                              craftsmanship while embracing innovative design
                              techniques. Each piece is carefully created to
                              enhance your living space and stand the test of
                              time.
                          </p>
                      </div>
                      <Link to="/shop">
                          <button className="bg-furniture-green text-white rounded-md px-8 py-2 hover:scale-105 hover:bg-[rgb(76,132,110)] transition-all duration-300">
                              Explore Our Collection
                          </button>
                      </Link>
                  </div>
                  <div className="lg:w-1/2">
                      <img
                          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop&auto=format"
                          alt="Our Workshop"
                          className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
                      />
                  </div>
              </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-[rgb(242,240,237)]">
              <div className="text-center mb-16">
                  <h4 className="mb-4 font-bold text-3xl ">
                      Why Choose Furniture Studio?
                  </h4>
                  <h4 className="max-w-3xl mx-auto text-gray-600">
                      We're committed to excellence in every aspect of our
                      business, from design to delivery.
                  </h4>
              </div>

              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
                  {features.map((feature, index) => (
                      <div
                          key={index}
                          className="h-full bg-white flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl "
                      >
                          <div className="w-20 h-20 bg-furniture-green/10 rounded-full flex items-center justify-center mb-6">
                              {feature.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-3">
                              {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                              {feature.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Team Section */}
          {/* <div className="py-16">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <h4 className="mb-4 font-bold text-3xl ">
              Meet Our Team
            </h4>
            <h4 className="max-w-3xl mx-auto text-gray-600">
              The passionate individuals behind every beautiful piece of
              furniture we create.
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="h-full flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
                />
                <div className="p-6 text-center">
                  <Typography variant="h6" className="font-semibold">
                    {member.name}
                  </Typography>
                  <Typography className="text-furniture-green font-medium text-sm">
                    {member.role}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div> */}

          {/* CTA Section */}
          <div className="py-16 bg-furniture-green text-white">
              <Container maxWidth="md">
                  <div className="text-center mb-12">
                      <Typography variant="h4" className="mb-4 font-bold">
                          Ready to Transform Your Space?
                      </Typography>
                      <Typography className="opacity-90 mb-8 text-lg">
                          Discover our full collection of handcrafted furniture
                          and find the perfect pieces for your home.
                      </Typography>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                          component={Link}
                          to="/shop"
                          className="bg-white text-furniture-green hover:bg-gray-100 font-bold py-3 px-8 rounded-lg normal-case"
                      >
                          Shop Now
                      </button>
                      <button
                          component={Link}
                          to="/contact"
                          className="bg-white text-furniture-green hover:bg-gray-100 font-bold py-3 px-8 rounded-lg normal-case"
                      >
                          Contact Us
                      </button>
                  </div>
              </Container>
          </div>
      </div>
  );
}
