
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ProlinkCV
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Kenyan and East African job seekers with professional, 
            affordable career tools that open doors to opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
                To democratize access to professional career tools for job seekers across Kenya and East Africa. 
                We believe that everyone deserves a professional presentation of their skills and experience, 
                regardless of their background or technical expertise.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Professional career tools should be affordable and accessible to everyone, 
                  not just those who can afford expensive services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  Every template and feature is designed with industry standards in mind, 
                  ensuring ATS compatibility and professional presentation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
                <p className="text-gray-600">
                  Built specifically for the East African job market, understanding 
                  local hiring practices and industry requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    ProlinkCV was born from a simple observation: too many qualified job seekers in Kenya 
                    and East Africa were being overlooked because their CVs and cover letters didn't 
                    meet modern professional standards.
                  </p>
                  <p>
                    We noticed that while expensive career services existed for those who could afford them, 
                    there was a massive gap for affordable, high-quality tools that ordinary job seekers could use.
                  </p>
                  <p>
                    Our team set out to bridge this gap by creating ProlinkCV - a platform that combines 
                    professional design standards with local market knowledge and affordable pricing. 
                    We're proud to serve job seekers from Nairobi to Dar es Salaam, from Kampala to Kigali.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
                <p className="text-gray-600">Job Seekers Helped</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">7</div>
                <p className="text-gray-600">Professional Templates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5</div>
                <p className="text-gray-600">East African Countries</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Have questions or need support? We're here to help you succeed.
              </p>
              <a
                href="https://wa.link/ml4dyk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>Contact us on WhatsApp</span>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
