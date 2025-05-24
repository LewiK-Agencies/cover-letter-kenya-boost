
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, HelpCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const faqs = [
    {
      question: "How does the ATS Checker work?",
      answer: "Our ATS Checker analyzes your uploaded CV for keywords, formatting, structure, and readability to give you a comprehensive compatibility score with actionable feedback."
    },
    {
      question: "Is my CV ATS-compatible?",
      answer: "Yes! All our templates are designed to pass Applicant Tracking Systems used by modern employers. Use our ATS Checker to verify your existing CV."
    },
    {
      question: "How do I pay with PayHero?",
      answer: "PayHero accepts M-PESA, credit cards, and bank transfers. Simply click download or check ATS score and choose your preferred payment method."
    },
    {
      question: "Can I edit my CV after downloading?",
      answer: "Yes, you can return to edit your CV anytime and download updated versions for the same price."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. Contact our support team if you're not happy with your download or ATS report."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Affordable Pricing
          </h1>
          <p className="text-xl text-gray-600">
            No subscriptions, no hidden fees. Pay only when you download or check ATS scores.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-blue-200">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">CV Templates</CardTitle>
              <div className="text-4xl font-bold text-blue-600">Ksh 99</div>
              <p className="text-gray-600">per download</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>5 professional CV templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ATS-friendly designs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited edits before download</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>PDF download</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Real-time preview</span>
                </li>
              </ul>
              <Link to="/templates">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Choose CV Template
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Cover Letters</CardTitle>
              <div className="text-4xl font-bold text-green-600">Ksh 42</div>
              <p className="text-gray-600">per download</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>2 professional templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Tailored for Kenyan market</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited edits before download</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>PDF download</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Real-time preview</span>
                </li>
              </ul>
              <Link to="/templates">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Choose Cover Letter Template
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="text-center">
              <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">ATS Score Checker</CardTitle>
              <div className="text-4xl font-bold text-purple-600">Ksh 15</div>
              <p className="text-gray-600">per report</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Upload existing CV/cover letter</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ATS compatibility score (0-100)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Detailed feedback & tips</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Industry-specific suggestions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Downloadable PDF report</span>
                </li>
              </ul>
              <Link to="/ats-checker">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Check ATS Score
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Free Preview vs. Paid Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Feature</th>
                    <th className="text-center py-3">Free Preview</th>
                    <th className="text-center py-3">Paid Download/Report</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">Template Access</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Real-time Editing</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Basic ATS Analysis</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">PDF Download</td>
                    <td className="text-center py-3">✗</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Detailed ATS Report</td>
                    <td className="text-center py-3">✗</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">No Watermarks</td>
                    <td className="text-center py-3">✗</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3">Customer Support</td>
                    <td className="text-center py-3">✗</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
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

export default Pricing;
