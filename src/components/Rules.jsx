import { Terminal } from 'lucide-react';

function Rules() {
  return (
    
    <div className="min-h-screen w-full bg-black font-mono flex items-center justify-center">
      <div className="w-full p-8 lg:p-12">
        <div className="flex items-center space-x-3 text-[#22EC08] mb-12">
          <Terminal size={32} />
          <h1 className="text-4xl font-bold tracking-wider">RULES</h1>
        </div>
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#22EC08] text-2xl mb-4">EVENT TYPE</h2>
              <p className="text-white text-xl">Offline Overnight Jeopardy-style CTF</p>
            </div>
            <div>
              <h2 className="text-[#22EC08] text-2xl mb-4">CATEGORIES</h2>
              <div className="text-[#FFFFFF] text-xl opacity-75">
                Web, OSINT, Binary, Reversing, Forensics, Cryptography, Miscellaneous
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] p-6 rounded-lg border border-[#22EC08] hover:border-opacity-75 transition-colors">
              <h3 className="text-[#22EC08] text-xl mb-3">FLAG FORMAT</h3>
              <code className="text-white text-lg">c0d{}</code>
            </div>
            <div className="bg-[#111111] p-6 rounded-lg border border-[#22EC08] hover:border-opacity-75 transition-colors">
              <h3 className="text-[#22EC08] text-xl mb-3">TEAM FORMATION</h3>
              <p className="text-white opacity-75">
                Teams of up to 3 members can be formed on the day of the event
              </p>
            </div>
            <div className="bg-[#111111] p-6 rounded-lg border border-[#22EC08] hover:border-opacity-75 transition-colors">
              <h3 className="text-[#22EC08] text-xl mb-3">SCORING</h3>
              <p className="text-white opacity-75">
                Points will be dynamic depending on number of solves
              </p>
            </div>
            <div className="bg-[#111111] p-6 rounded-lg border border-[#EAB308] hover:border-opacity-75 transition-colors">
              <h3 className="text-[#EAB308] text-xl mb-3">IMPORTANT NOTE</h3>
              <p className="text-white opacity-75">
                Flag sharing is not permitted (Good luck doing that ;)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;