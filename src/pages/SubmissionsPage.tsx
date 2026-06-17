import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, BookOpen, AlertCircle } from 'lucide-react';

const SubmissionsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    institution: '',
    email: '',
    abstract: '',
    keywords: '',
    declaration: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-[#1A3A5C] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
              Manuscript Submitted
            </h1>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-4">
            Thank You for Your Submission
          </h2>
          <p className="text-gray-600 mb-8">
            Your manuscript has been successfully submitted. Our editorial team will review 
            your submission and contact you within 2-4 weeks regarding the peer review status.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors"
          >
            Submit Another Manuscript
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            Submission Guidelines
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Submit your manuscript for consideration in our journals or book publication programs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Guidelines */}
          <div className="lg:col-span-2 space-y-8">
            {/* Manuscript Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-[#C8922A]" />
                Manuscript Requirements
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Formatting Guidelines</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Manuscripts should be 6,000-10,000 words for journal articles</li>
                    <li>Use Times New Roman, 12pt font, double-spaced</li>
                    <li>Follow APA 7th edition citation style</li>
                    <li>Include an abstract of 150-250 words</li>
                    <li>Provide 4-6 keywords for indexing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Required Sections</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Title page with author information</li>
                    <li>Abstract and keywords</li>
                    <li>Main text with appropriate headings</li>
                    <li>References</li>
                    <li>Tables and figures (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Originality & Ethics</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Manuscripts must be original work not under consideration elsewhere</li>
                    <li>All authors must have contributed significantly</li>
                    <li>Plagiarism detection is conducted on all submissions</li>
                    <li>Conflicts of interest must be disclosed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Peer Review Process */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-[#C8922A]" />
                Peer Review Process
              </h2>
              
              <div className="relative">
                <div className="flex items-start mb-8">
                  <div className="w-8 h-8 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A5C]">Initial Screening</h3>
                    <p className="text-gray-600 text-sm">
                      Editorial team reviews manuscript for fit and basic quality (1-2 weeks)
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="w-8 h-8 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A5C]">Peer Review</h3>
                    <p className="text-gray-600 text-sm">
                      Anonymous reviewers evaluate scholarly merit (4-8 weeks)
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="w-8 h-8 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A5C]">Editorial Decision</h3>
                    <p className="text-gray-600 text-sm">
                      Based on reviewer feedback: Accept, Revise, or Decline (1-2 weeks)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A5C]">Publication</h3>
                    <p className="text-gray-600 text-sm">
                      Accepted manuscripts enter production queue for publication (2-4 weeks)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-8 sticky top-24">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6">
                Submit Manuscript
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manuscript Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author(s) *
                  </label>
                  <input
                    type="text"
                    name="authors"
                    required
                    value={formData.authors}
                    onChange={handleChange}
                    placeholder="Separate multiple authors with commas"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Abstract *
                  </label>
                  <textarea
                    name="abstract"
                    required
                    rows={4}
                    value={formData.abstract}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords *
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    required
                    value={formData.keywords}
                    onChange={handleChange}
                    placeholder="Separate with commas"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manuscript File *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-[#C8922A] hover:text-[#B07E25]"
                    >
                      Click to upload
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PDF or Word document, max 10MB</p>
                    {file && <p className="text-sm text-green-600 mt-2">{file.name}</p>}
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#C8922A] border-gray-300 rounded focus:ring-[#C8922A]"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I confirm this manuscript is original and not under consideration elsewhere. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C8922A] text-white font-semibold rounded-lg hover:bg-[#B07E25] transition-colors"
                >
                  Submit Manuscript
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsPage;
