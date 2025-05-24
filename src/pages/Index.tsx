
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { FileText, Zap, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    jobDescription: "",
    workExperience: "",
    education: "",
    applicationAddress: ""
  });
  const { toast } = useToast();

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerateLetter = () => {
    toast({
      title: "Payment Required",
      description: "M-PESA STK push will be sent to your phone for Ksh 36",
    });
    // This will integrate with payment system later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">DailyJobs Cover Letter AI</h1>
            </div>
            <div className="text-sm text-gray-600">
              Professional cover letters • Ksh 36 only
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Generate Professional Cover Letters with AI
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Land your dream job in Kenya with AI-powered, tailored cover letters
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-green-500" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-green-500" />
              <span>PDF Download</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardTitle className="text-2xl">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Job & Experience Details"}
              {currentStep === 3 && "Review & Generate"}
            </CardTitle>
            <CardDescription className="text-blue-100">
              {currentStep === 1 && "Let's start with your basic information"}
              {currentStep === 2 && "Tell us about the job and your background"}
              {currentStep === 3 && "Review your details and generate your cover letter"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="+254 700 000 000"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="h-12"
                  />
                  <p className="text-sm text-gray-500">
                    This number will be used for M-PESA payment confirmation
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Job & Experience Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title Applied For *</Label>
                  <Input
                    id="jobTitle"
                    placeholder="Software Developer"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobDescription">Job Description (Optional)</Label>
                  <Textarea
                    id="jobDescription"
                    placeholder="Paste the job description here for better tailoring..."
                    value={formData.jobDescription}
                    onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workExperience">Work Experience Summary *</Label>
                  <Textarea
                    id="workExperience"
                    placeholder="Briefly describe your relevant work experience..."
                    value={formData.workExperience}
                    onChange={(e) => handleInputChange("workExperience", e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Educational Background *</Label>
                  <Textarea
                    id="education"
                    placeholder="Your educational qualifications..."
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicationAddress">Application Address *</Label>
                  <Input
                    id="applicationAddress"
                    placeholder="To HR Manager, ABC Company"
                    value={formData.applicationAddress}
                    onChange={(e) => handleInputChange("applicationAddress", e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Generate */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Review Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Name:</span> {formData.fullName}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {formData.phoneNumber}
                    </div>
                    <div>
                      <span className="font-medium">Job Title:</span> {formData.jobTitle}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">AI Prompt Preview</h3>
                  <p className="text-sm text-blue-700 font-mono bg-white p-4 rounded border">
                    Generate a professional cover letter for {formData.fullName} applying for {formData.jobTitle}. 
                    Include work experience: "{formData.workExperience.substring(0, 50)}..." 
                    and education: "{formData.education.substring(0, 50)}..."
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-lg mb-2 text-green-800">Ready to Generate!</h3>
                  <p className="text-green-700 mb-4">
                    Your professional cover letter will be generated using AI and available for download as PDF.
                  </p>
                  <Button 
                    onClick={handleGenerateLetter}
                    className="w-full h-12 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Pay Ksh 36 & Generate Cover Letter
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-8"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === totalSteps}
                className="px-8 bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === totalSteps ? "Review Complete" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Instant Generation</h3>
            <p className="text-gray-600">AI creates your cover letter in seconds</p>
          </Card>
          <Card className="text-center p-6">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Tailored Content</h3>
            <p className="text-gray-600">Customized for your specific job application</p>
          </Card>
          <Card className="text-center p-6">
            <Download className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">PDF Download</h3>
            <p className="text-gray-600">Professional format ready to submit</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
