
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle, AlertTriangle, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ATSChecker = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      setAnalysisResult(null);
    }
  };

  const analyzeDocument = async () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      const mockResult = {
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        keywords: {
          score: Math.floor(Math.random() * 30) + 70,
          found: ['project management', 'data analysis', 'team leadership'],
          missing: ['strategic planning', 'budget management']
        },
        formatting: {
          score: Math.floor(Math.random() * 20) + 80,
          issues: ['Tables detected', 'Complex formatting in header']
        },
        structure: {
          score: Math.floor(Math.random() * 20) + 80,
          feedback: 'Clear section headings found'
        },
        readability: {
          score: Math.floor(Math.random() * 10) + 90,
          feedback: 'Good text structure and font choices'
        }
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handlePayment = () => {
    // Simulate PayHero payment process
    alert('Redirecting to PayHero for Ksh 15 payment...');
    setShowPaymentModal(false);
    // In real implementation, redirect to PayHero
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ATS Compatibility Checker
          </h1>
          <p className="text-xl text-gray-600">
            Upload your CV or cover letter to get an instant ATS compatibility score and detailed feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-6 w-6 mr-2 text-blue-600" />
                Upload Your Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Click to upload your PDF
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports PDF files up to 10MB
                  </p>
                </label>
              </div>
              
              {uploadedFile && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">
                        {uploadedFile.name}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setUploadedFile(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {uploadedFile && !analysisResult && (
                <Button
                  onClick={analyzeDocument}
                  disabled={isAnalyzing}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Document'}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              {isAnalyzing && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing your document...</p>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-4">
                  {/* Overall Score */}
                  <div className={`p-4 rounded-lg ${getScoreBgColor(analysisResult.score)}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">ATS Compatibility Score</span>
                      <span className={`text-2xl font-bold ${getScoreColor(analysisResult.score)}`}>
                        {analysisResult.score}/100
                      </span>
                    </div>
                  </div>

                  {/* Quick Preview */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Quick Overview:</h4>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Keywords found: {analysisResult.keywords.found.length}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Formatting issues: {analysisResult.formatting.issues.length}</span>
                    </div>
                  </div>

                  {/* Payment CTA */}
                  <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Get Detailed Report - Ksh 15
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Download Detailed ATS Report</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Get a comprehensive ATS compatibility report with:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Detailed keyword analysis</li>
                          <li>Formatting recommendations</li>
                          <li>Section-by-section feedback</li>
                          <li>Industry-specific suggestions</li>
                          <li>PDF download for future reference</li>
                        </ul>
                        <div className="flex gap-3">
                          <Button onClick={handlePayment} className="flex-1 bg-green-600 hover:bg-green-700">
                            Pay Ksh 15 via PayHero
                          </Button>
                          <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              {!uploadedFile && !isAnalyzing && (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Upload a document to see your ATS compatibility score</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Our ATS Checker Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Upload Document</h3>
                <p className="text-sm text-gray-600">Upload your CV or cover letter in PDF format</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-gray-600">Our AI analyzes keywords, formatting, and structure</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Score</h3>
                <p className="text-sm text-gray-600">Receive instant ATS compatibility score</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Download Report</h3>
                <p className="text-sm text-gray-600">Get detailed feedback and improvement tips</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ATSChecker;
