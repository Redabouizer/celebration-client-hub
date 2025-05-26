
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, Building, FlaskConical, Award, FileText, Zap, Gift, Fingerprint } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute top-4 right-4 text-xs text-slate-500 flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <span>📧</span>
            <span>MediCare@gmail.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>📞</span>
            <span>+212661514131</span>
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 leading-tight">
                WELCOME TO MEDICARE
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are the MediCare Group, dedicated to providing quality medical services and promoting the 
                well-being of our patients throughout the kingdom
              </p>
              <Link to="/appointment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
                  GET STARTED
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🩺</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Why Choose MediCare */}
            <div className="lg:col-span-1">
              <div className="bg-blue-600 text-white p-8 rounded-2xl h-full">
                <h2 className="text-2xl font-bold mb-4">Why Choose MediCare?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  MediCare is your ideal choice for quality healthcare, patient-centered approach, and a comprehensive range 
                  of medical services. With our trusted reputation and accessibility, we are your reliable partner for dependable 
                  and personalized healthcare.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full"
                >
                  Learn More →
                </Button>
              </div>
            </div>

            {/* Excellence */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">EXCELLENCE</h3>
              <p className="text-gray-600 leading-relaxed">
                At MediCare, excellence is reflected in an unwavering pursuit of optimal quality of care, 
                through cutting-edge medical practices and unparalleled patient service.
              </p>
            </div>

            {/* Engagement */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">ENGAGEMENT</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is the promise of unwavering dedication to our patients, our employees, and our 
                community, ensuring responsible and accessible healthcare.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">INNOVATION</h3>
              <p className="text-gray-600 leading-relaxed">
                Nurturing creativity and fostering experimentation is fundamental to identifying and 
                adopting the most effective solutions, thereby enhancing our care and deepening our 
                relationships with patients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
                <div className="text-6xl z-10">👨‍⚕️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-700 mb-6">MediCare</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  MediCare aims to create a high-quality healthcare network accessible to all Moroccans, offering specialized 
                  medical services like interventional cardiology, intensive care, and oncology. Our goal is to improve accessibility, 
                  maximize recovery chances, and enhance overall well-being.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Secure Authentication</h3>
                    <p className="text-gray-600">
                      Protect sensitive patient information with a secure fingerprint authentication system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Seamless Patient Experience</h3>
                    <p className="text-gray-600">
                      Provide your patients with a seamless and pleasant experience through innovative practice management solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Advanced Healthcare Technologies</h3>
                    <p className="text-gray-600">
                      Embrace cutting-edge technologies to enhance the efficiency, accuracy, and quality of care provided to your patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-700 mb-2">85</div>
              <div className="text-gray-600">Doctors</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-700 mb-2">18</div>
              <div className="text-gray-600">Departments</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-700 mb-2">12</div>
              <div className="text-gray-600">Research Labs</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-700 mb-2">150</div>
              <div className="text-gray-600">Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Contact</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Feel free to contact us for any inquiries, appointment scheduling, or additional information. Our team is here to address your healthcare needs and 
            provide you with the best care possible. Fill out the contact form below or use our contact details to reach us directly. We look forward to hearing from you!
          </p>
          
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
