import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import {
  Map as MapIcon,
  Phone as PhoneIcon,
  Email as MailIcon,
  AccessTime as ClockIcon,
} from "@mui/icons-material";
import { toast } from "sonner";
import { useState } from "react";

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
      icon: <MapIcon color="primary" sx={{ fontSize: 30 }} />,
      title: "Visit Our Showroom",
      details: ["123 Furniture Street, Design District, NY 10001"],
    },
    {
      icon: <PhoneIcon color="primary" sx={{ fontSize: 30 }} />,
      title: "Call Us",
      details: ["(123) 456-7890"],
    },
    {
      icon: <MailIcon color="primary" sx={{ fontSize: 30 }} />,
      title: "Email Us",
      details: ["info@furniture.com"],
    },
    {
      icon: <ClockIcon color="primary" sx={{ fontSize: 30 }} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9am - 5pm",
        "Saturday: 10am - 6pm",
        "Sunday: 11am - 5pm",
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(to right, #FFF8F0, #FFE8D6)",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            sx={{ mb: 3, fontWeight: "bold" }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Have questions about our furniture or need design consultation? We'd
            love to hear from you and help bring your vision to life.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 4, fontWeight: "bold" }}
                >
                  Send us a Message
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ "& .MuiTextField-root": { mb: 3 } }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Visit our showroom to see our furniture collections in person,
                or reach out to us through any of the following channels.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined" sx={{ height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "primary.light",
                            p: 1.5,
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {info.title}
                          </Typography>
                          {info.details.map((detail, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              color="text.secondary"
                            >
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Find Our Showroom
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Located in the heart of the design district, our showroom features
              our latest collections.
            </Typography>
          </Box>

          <Card elevation={3}>
            <CardContent sx={{ p: 6, textAlign: "center" }}>
              <MapIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Interactive Map
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                123 Furniture Street, Design District, NY 10001
              </Typography>
              <Button variant="outlined" color="primary" size="large">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quick answers to common questions about our furniture and services.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              question: "Do you offer custom furniture?",
              answer:
                "Yes! We specialize in custom furniture design. Contact us to discuss your specific needs and vision.",
            },
            {
              question: "What's your delivery timeframe?",
              answer:
                "Standard delivery is 2-4 weeks. Custom pieces typically take 6-8 weeks depending on complexity.",
            },
            {
              question: "Do you offer warranties?",
              answer:
                "All our furniture comes with a 5-year warranty on craftsmanship and materials.",
            },
            {
              question: "Can I schedule a consultation?",
              answer:
                "Absolutely! We offer both in-showroom and in-home design consultations. Contact us to schedule.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 1.5, fontWeight: 600 }}
                  >
                    {item.question}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
