"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, CheckCircle, Mail, Phone, MapPin, Building, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the Navigation component from where you saved it
import { Navigation } from "@/components/navigation";

const studentData = [
  { learnerCode: "4839201756", name: "yaditi sharma", email: "yaditisharma833@gmail.com", course: "BCA", semester: "6th", rollNo: "115169", collegeName: "university of maharani college", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "9174820365", name: "Priyanshi Sharma", email: "priyanshisharma6085@gmail.com", course: "BCA", semester: "6th", rollNo: "115127", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "2758194032", name: "Kanika Lakhera", email: "kanikalakshkar@gmail.com", course: "BCA", semester: "6th", rollNo: "115079", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "Backend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "6492018375", name: "Vartika Sambhariya", email: "vartika.samb0572@gmail.com", course: "BCA", semester: "6th", rollNo: "115168", collegeName: "University of Maharani College", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "8203917465", name: "Priyanshu", email: "priydv986@gmail.com", course: "BCA", semester: "6th", rollNo: "115128", collegeName: "University Maharani college", academicYear: "2025-2026", programName: "Graphic Designing", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "1958273046", name: "Tanisha gond", email: "gourtanisha86@gmail.com", course: "BCA", semester: "6th", rollNo: "115158", collegeName: "University of maharani college", academicYear: "2025-2026", programName: "Java Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "7384910256", name: "Chanchal Sharma", email: "sharmachanchal200905@gmail.com", course: "BCA", semester: "6th", rollNo: "115059", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "Full Stack Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "5029384716", name: "Bhumika Goyal", email: "bhumigoyal115@gmail.com", course: "BCA", semester: "6th", rollNo: "115056", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "3847592016", name: "Sneha Kumari", email: "snehakumari723987@gmail.com", course: "BCA", semester: "6th", rollNo: "115155", collegeName: "Maharani college", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "8492037165", name: "Komal Gurjar", email: "saritaadevi82@gmail.com", course: "BCA", semester: "6th", rollNo: "115089", collegeName: "University of Maharani College", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "2093847156", name: "Payal Saini", email: "payalsainismpr2023@gmail.com", course: "BCA", semester: "6th", rollNo: "115117", collegeName: "University Maharani college", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "6710293845", name: "Sejal Kain", email: "kainsejal@gmail.com", course: "BCA", semester: "6th", rollNo: "115150", collegeName: "University maharani college", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "9384756102", name: "Vani Sharma", email: "vs8298337@gmail.com", course: "BCA", semester: "6th", rollNo: "115163", collegeName: "University maharani college", academicYear: "2025-2026", programName: "C++ Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "5829103746", name: "Tanisha Mahar", email: "tanishamahar97@gmail.com", course: "BCA", semester: "6th", rollNo: "115159", collegeName: "University of maharani college", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "4102938576", name: "Vanshika Mahawar", email: "vishalmahawar029@gmail.com", course: "BCA", semester: "6th", rollNo: "115164", collegeName: "University of Maharani college", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "7592810364", name: "Priyanshi Rajawat", email: "harahrajawat12@gmail.com", course: "BCA", semester: "6th", rollNo: "115126", collegeName: "University Maharani college", academicYear: "2025-2026", programName: "Python Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "3648291057", name: "Tanishka bachal", email: "tanishkabachal04@gmail.com", course: "BCA", semester: "6th", rollNo: "115160", collegeName: "University maharani college", academicYear: "2025-2026", programName: "Python Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "9283746105", name: "Richa Sharma", email: "r2276058@gmail.com", course: "BCA", semester: "6th", rollNo: "115132", collegeName: "University Maharani college", academicYear: "2025-2026", programName: "Python Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "1592837406", name: "Itisha Kumari meena", email: "itishameena3@gmail.com", course: "BCA", semester: "6th", rollNo: "115076", collegeName: "University maharanis college jaipur", academicYear: "2025-2026", programName: "AI / Machine Learning", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "8401928375", name: "Prachi Dindokar", email: "prachidindokar64@gmail.com", course: "BCA", semester: "6th", rollNo: "115118", collegeName: "University Maharani College Jaipur", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "6293847501", name: "Pushpal kumawat", email: "pushpalkumawat988@gmail.com", course: "BCA", semester: "6th", rollNo: "115129", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "Python Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "3049581726", name: "Neha Yadav", email: "nehayadav20102007@gmail.com", course: "B.Sc", semester: "6th", rollNo: "139013", collegeName: "University maharani college", academicYear: "2025-2026", programName: "Full Stack Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "5728391046", name: "Sanskriti Bhardwaj", email: "SANSKRITIBHARDWAJ117@GMAIL.COM", course: "BCA", semester: "6th", rollNo: "115147", collegeName: "University Maharani College, Jaipur", academicYear: "2025-2026", programName: "Frontend Development", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "9102837465", name: "Bhoomika Bagadia", email: "bhoomikabagadia@gmail.com", course: "BA", semester: "6th", rollNo: "196476", collegeName: "1295 Government Girls College Gangori Bazar Jaipur", academicYear: "2025-2026", programName: "C++ Programming", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "2837491056", name: "Sanju Choudhary", email: "sanjuchoudhary2377@gmail.com", course: "BCA", semester: "6th", rollNo: "115146", collegeName: "University Maharani college", academicYear: "2025-2026", programName: "Graphic Designing", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" },
  { learnerCode: "4758293016", name: "BHUMIKA JAYASWAL", email: "bhumikajayaswal74@gmail.com", course: "BCA", semester: "6th", rollNo: "115057", collegeName: "University Maharani College", academicYear: "2025-2026", programName: "UI / UX Design", companyName: "Playtown Studios", companyAddress: "A-283 Ramnagriya,Jagatpura, Jaipur 302017" }
];

// --- Footer Component ---
function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">P</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">Playtown Studios</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Empowering the next generation of developers and creators through hands-on internships and real-world projects.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center md:justify-end text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:playtownstudiosofficial@gmail.com">playtownstudiosofficial@gmail.com</a>
              </li>
              <li className="flex items-center md:justify-end text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+918603181030">+91 86031 81030</a>
              </li>
              <li className="flex items-center md:justify-end text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>A-283 Shivam Nagar, Ramnagariya, Jagatpura, Jaipur 302017</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-center items-center text-xs text-muted-foreground">
          <p>© 2026 Playtown Studios. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

// --- Main Page Component ---
export default function CertificateVerification() {
  const [learnerCode, setLearnerCode] = useState("");
  const [learnerName, setLearnerName] = useState("");
  const [result, setResult] = useState<typeof studentData[0] | null>(null);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(false);
    setError("");
    setResult(null);
    setIsSearching(true);

    setTimeout(() => {
      const foundUser = studentData.find(
        (student) => 
          student.learnerCode === learnerCode.trim() &&
          student.name.toLowerCase().trim() === learnerName.toLowerCase().trim()
      );

      if (foundUser) {
        setResult(foundUser);
      } else {
        setError("No official record found matching this Learner Code and Name. Please check your spelling and try again.");
      }
      setIsSearching(false);
      setHasSearched(true);
    }, 600);
  };

  const handleReset = () => {
    setLearnerCode("");
    setLearnerName("");
    setResult(null);
    setError("");
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30 text-foreground">
      {/* Imported Navigation Component */}
      <Navigation />

      <main className="flex-grow flex flex-col items-center pt-28 pb-16 px-4 sm:px-6">
        
        {/* Verification Card */}
        <div className="w-full max-w-4xl bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          
          {/* Minimized Header Banner */}
          <div className="bg-secondary/40 border-b border-border p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2 tracking-tight">
              Certificate Verification Portal
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Validate the authenticity of certificates issued by Playtown Studios.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            {/* Form */}
            <form onSubmit={handleVerify} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="learnerCode" className="text-sm font-medium text-foreground">
                    Learner Code <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="learnerCode"
                    type="text"
                    required
                    placeholder="e.g., 4839201756"
                    value={learnerCode}
                    onChange={(e) => setLearnerCode(e.target.value)}
                    className="w-full bg-input border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="learnerName" className="text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="learnerName"
                    type="text"
                    required
                    placeholder="e.g., John Doe"
                    value={learnerName}
                    onChange={(e) => setLearnerName(e.target.value)}
                    className="w-full bg-input border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <Button
                  type="submit"
                  disabled={isSearching || !learnerCode || !learnerName}
                  className="w-full md:w-auto px-10 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_4px_20px_rgba(var(--primary),0.3)] hover:shadow-[0_4px_25px_rgba(var(--primary),0.5)] transition-all"
                >
                  {isSearching ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Verify Certificate
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Dynamic Results Area */}
            {hasSearched && (
              <div className="mt-10 pt-10 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Error State */}
                {error && (
                  <div className="bg-destructive/10 border border-destructive/50 text-destructive p-6 rounded-xl text-center max-w-2xl mx-auto">
                    <p className="font-medium text-lg mb-2">Verification Failed</p>
                    <p className="text-sm opacity-90">{error}</p>
                    <Button variant="outline" onClick={handleReset} className="mt-4 border-destructive/30 hover:bg-destructive/10 text-destructive">
                      Try Another Query
                    </Button>
                  </div>
                )}

                {/* Success State */}
                {result && (
                  <div className="border border-primary/30 rounded-xl overflow-hidden bg-background shadow-[0_0_30px_rgba(var(--primary),0.05)]">
                    <div className="bg-primary/10 px-6 py-5 border-b border-primary/20 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-heading font-bold text-foreground">
                          Credential Verified
                        </h3>
                      </div>
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Official Record
                      </span>
                    </div>
                    
                    <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Learner Code</p>
                        <p className="text-foreground font-medium text-lg font-mono">{result.learnerCode}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Full Name</p>
                        <p className="text-foreground font-bold text-lg capitalize">{result.name}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Email Address</p>
                        <p className="text-foreground">{result.email}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Program / Course Name</p>
                        <p className="text-primary font-bold">{result.programName}</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Degree & Semester</p>
                        <p className="text-foreground">{result.course} - {result.semester} Semester</p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Roll Number</p>
                        <p className="text-foreground">{result.rollNo}</p>
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Academic Institution</p>
                        <p className="text-foreground font-medium capitalize">{result.collegeName}</p>
                      </div>
                      
                      {/* Issuing Authority Details */}
                      <div className="sm:col-span-2 mt-2 pt-6 border-t border-border/50">
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/20">
                          <Building className="w-10 h-10 text-muted-foreground mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Issued By</p>
                            <p className="text-foreground font-bold text-lg">{result.companyName}</p>
                            <p className="text-muted-foreground text-sm mt-1">{result.companyAddress}</p>
                            <p className="text-muted-foreground text-xs mt-2 font-medium">Academic Year: {result.academicYear}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}