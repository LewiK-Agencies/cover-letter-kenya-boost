
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";

const Templates = () => {
  const cvTemplates = [
    { id: 1, name: "Classic", description: "Traditional and professional design" },
    { id: 2, name: "Modern", description: "Clean and contemporary layout" },
    { id: 3, name: "Professional", description: "Corporate-ready template" },
    { id: 4, name: "Creative", description: "Stand out with unique design" },
    { id: 5, name: "Executive", description: "Senior-level professional template" },
  ];

  const coverLetterTemplates = [
    { id: 1, name: "Formal", description: "Traditional business format" },
    { id: 2, name: "Modern", description: "Contemporary and engaging style" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Templates
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our collection of ATS-friendly CV and cover letter templates
          </p>
        </div>

        {/* CV Templates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CV Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <CardHeader>
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{template.name} CV</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cover Letter Templates Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cover Letter Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverLetterTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <CardHeader>
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{template.name} Cover Letter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Templates;
