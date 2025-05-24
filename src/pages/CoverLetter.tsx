
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";

const CoverLetter = () => {
  const coverLetterTemplates = [
    { 
      id: 1, 
      name: "Formal", 
      description: "Traditional business format perfect for corporate roles",
      price: "Ksh 42"
    },
    { 
      id: 2, 
      name: "Modern", 
      description: "Contemporary and engaging style for creative industries",
      price: "Ksh 42"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Cover Letter Templates
          </h1>
          <p className="text-xl text-gray-600">
            Create compelling cover letters that complement your CV and increase your chances of landing interviews
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">ATS-Optimized</h3>
            <p className="text-gray-600">
              All templates are designed to pass through Applicant Tracking Systems
            </p>
          </Card>
          <Card className="text-center p-6">
            <Eye className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Real-time Preview</h3>
            <p className="text-gray-600">
              See your cover letter update instantly as you type
            </p>
          </Card>
          <Card className="text-center p-6">
            <FileText className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Industry-Specific</h3>
            <p className="text-gray-600">
              Pre-written content suggestions for Kenyan job markets
            </p>
          </Card>
        </div>

        {/* Cover Letter Templates */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverLetterTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <CardHeader>
                  <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-20 w-20 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{template.name} Cover Letter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{template.price}</span>
                    <span className="text-sm text-gray-500">One-time payment</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Create Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Cover Letter?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful job seekers in Kenya who trust ProlinkCV
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Building Your Cover Letter
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CoverLetter;
