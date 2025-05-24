
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Zap, Download, CheckCircle, Star, Users, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build, Analyze, and Perfect Your ATS-Friendly CV and Cover Letter in Kenya
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional, affordable, and tailored for the East African job market. 
            Build stunning resumes, create cover letters, and check ATS compatibility to get noticed by employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/templates">
              <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
                Start Building Your CV
              </Button>
            </Link>
            <Link to="/ats-checker">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Check ATS Score
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-green-500" />
              <span>1,000+ Job Seekers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>ATS-Compatible</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-green-500" />
              <span>Professional Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProlinkCV?
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for the Kenyan and East African job market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Instant Generation</h3>
              <p className="text-gray-600">
                Create professional CVs and cover letters in minutes with our intuitive builder
              </p>
            </Card>
            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ATS-Optimized</h3>
              <p className="text-gray-600">
                All templates are designed to pass Applicant Tracking Systems used by employers
              </p>
            </Card>
            <Card className="text-center p-6">
              <Search className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ATS Score Checker</h3>
              <p className="text-gray-600">
                Upload your existing CV to get instant ATS compatibility score and detailed feedback
              </p>
            </Card>
            <Card className="text-center p-6">
              <Download className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Affordable Downloads</h3>
              <p className="text-gray-600">
                Download professional PDFs starting from just Ksh 15 - no subscriptions needed
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Template and ATS Checker Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Templates & ATS Analysis
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our collection of ATS-friendly templates or check your existing CV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">CV Templates</h3>
                <p className="text-gray-600 mb-4">5 professional designs including Classic, Modern, Professional, Creative, and Executive styles</p>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-lg font-semibold text-blue-600">From Ksh 99</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cover Letter Templates</h3>
                <p className="text-gray-600 mb-4">2 elegant templates with Formal and Modern styles, perfect for any job application</p>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-lg font-semibold text-blue-600">From Ksh 42</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">ATS Score Checker</h3>
                <p className="text-gray-600 mb-4">Upload your existing CV or cover letter to get instant ATS compatibility analysis and improvement tips</p>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Search className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-lg font-semibold text-blue-600">Only Ksh 15</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/templates">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Browse All Templates
                </Button>
              </Link>
              <Link to="/ats-checker">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Try ATS Checker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Job Seekers Across Kenya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "ProlinkCV helped me land a job at Safaricom! The templates are professional and the ATS checker gave me confidence."
              </p>
              <p className="font-semibold">Sarah M., Nairobi</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The ATS score checker showed me exactly what was wrong with my CV. After fixing it, I got three interview calls!"
              </p>
              <p className="font-semibold">James K., Mombasa</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Affordable and effective. The ATS-friendly design really works. My CV now gets past the initial screening every time."
              </p>
              <p className="font-semibold">Grace A., Kisumu</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Professional CV or Check Your ATS Score?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who trust ProlinkCV
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/templates">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Build CV Now
              </Button>
            </Link>
            <Link to="/ats-checker">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Check ATS Score
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
