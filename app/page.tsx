import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import DarkVeil from "@/components/ui/DarkVeil";
import { 
  Flash, 
  Code, 
  SecuritySafe, 
  MoneySend, 
  TickCircle,
  ArrowRight
} from "iconsax-react";
import { 
  SiPolygon, 
  SiSolidity, 
  SiEthereum, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiIpfs, 
  SiVite,
  SiExpress
} from "react-icons/si";
import LogoLoop from "@/components/ui/LogoLoop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-nkumba-blue/30 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-nkumba-blue opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-nkumba-yellow opacity-5 blur-[120px] rounded-full" />

      <Navbar />

      <main className="relative">
        {/* Floating Lines Background */}
        <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none opacity-40">
          <DarkVeil 
            speed={0.3}
            hueShift={200} // Adjusting hue to match Nkumba Blue/Yellow better if needed
            noiseIntensity={0.02}
            scanlineIntensity={0.1}
          />
        </div>

        {/* Hero Section */}
        <Section className="pt-40 pb-32">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-nkumba-blue/20 text-sm font-medium text-nkumba-blue animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nkumba-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nkumba-blue"></span>
              </span>
              Empowering the Next Generation of Web3 Builders
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Innovation Meets <br />
              <span className="bg-gradient-to-r from-nkumba-blue to-cyan-400 bg-clip-text text-transparent">Decentralization</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Join the Nkumba Blockchain Club to learn, build, and innovate. 
              Discover the future of finance, technology, and identity every Friday.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg border-glow-blue group">
                Join the Mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg">
                View Curriculum
              </Button>
            </div>
          </div>

          {/* What We Learn Section */}
          <div className="mt-64 max-w-full relative z-10 px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">What we will explore</h2>
            </div>
            
            <div className="relative py-24 overflow-hidden">
               <LogoLoop
                 speed={40}
                 direction="left"
                 logoHeight={64}
                 gap={64}
                 fadeOut={true}
                 fadeOutColor="#020617"
                  logos={[
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiPolygon className="text-3xl" style={{ color: '#8247E5' }} /> <span className="font-bold text-white/90 text-xl font-mono">Polygon</span></div>, title: "Polygon" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiSolidity className="text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-xl font-mono">Solidity</span></div>, title: "Solidity" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-3xl" style={{ color: '#3C3C3D' }} /> <span className="font-bold text-white/90 text-xl font-mono">Hardhat</span></div>, title: "Hardhat" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-3xl" style={{ color: '#E2761B' }} /> <span className="font-bold text-white/90 text-xl font-mono">MetaMask</span></div>, title: "MetaMask" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiReact className="text-3xl" style={{ color: '#61DAFB' }} /> <span className="font-bold text-white/90 text-xl font-mono">React + Vite</span></div>, title: "Frontend" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiNextdotjs className="text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-xl font-mono">Next.js</span></div>, title: "Next.js" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-3xl" style={{ color: '#627EEA' }} /> <span className="font-bold text-white/90 text-xl font-mono">Ethers.js</span></div>, title: "Web3 Lib" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiNodedotjs className="text-3xl" style={{ color: '#339933' }} /> <span className="font-bold text-white/90 text-xl font-mono">Node.js</span></div>, title: "Backend" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiExpress className="text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-xl font-mono">Express</span></div>, title: "Express" },
                    { node: <div className="flex items-center gap-4 px-8 py-5 glass bg-white/[0.02] border-white/5 rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiIpfs className="text-3xl" style={{ color: '#65C2CB' }} /> <span className="font-bold text-white/90 text-xl font-mono">IPFS + Pinata</span></div>, title: "Storage" },
                  ]}
               />
            </div>
          </div>
        </Section>

        {/* Learning/Curriculum Section */}
        <Section id="learning" className="bg-slate-950/30">
          <div className="text-center mb-16">
            <h2 className="text-nkumba-blue font-bold uppercase tracking-wider text-sm mb-4">Core Pillars</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Learn & Build</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our curriculum is designed to take you from blockchain basics to building your own decentralized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard glowColor="blue">
              <div className="w-12 h-12 rounded-xl bg-nkumba-blue/10 flex items-center justify-center mb-6 border border-nkumba-blue/20">
                <Code size="24" color="#3691ad" variant="Bulk" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Web3 Development</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Learn to build DApps using React, Ethers.js, and modern blockchain frameworks. Connect the web to the blockchain.
              </p>
            </GlassCard>

            <GlassCard glowColor="yellow">
              <div className="w-12 h-12 rounded-xl bg-nkumba-yellow/10 flex items-center justify-center mb-6 border border-nkumba-yellow/20">
                <SecuritySafe size="24" color="#fcee23" variant="Bulk" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Smart Contracts</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Master Solidity and Rust to write secure, scalable smart contracts that power the decentralized economy.
              </p>
            </GlassCard>

            <GlassCard glowColor="blue">
              <div className="w-12 h-12 rounded-xl bg-nkumba-blue/10 flex items-center justify-center mb-6 border border-nkumba-blue/20">
                <MoneySend size="24" color="#3691ad" variant="Bulk" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">DeFi & Tokenomics</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore the world of Decentralized Finance, liquidity pools, and the economic models behind successful protocols.
              </p>
            </GlassCard>
          </div>
        </Section>

        {/* Friday Sessions Section */}
        <Section id="sessions" className="relative">
          <div className="glass p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nkumba-yellow/10 blur-3xl -mr-32 -mt-32 rounded-full" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-xl">
                <h3 className="text-4xl font-bold text-white mb-6">Every Friday at Nkumba</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  We gather every Friday at the Nkumba University campus to discuss the latest in blockchain, 
                  work on projects, and host guest speakers from the industry.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Hands-on coding workshops",
                    "Blockchain industry networking",
                    "Project showcase & feedback",
                    "Free resources for members"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <TickCircle size="20" color="#3691ad" variant="Bold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="border-glow-blue px-10">
                  Save My Seat
                </Button>
              </div>
              <div className="flex-1 w-full max-w-md aspect-square glass border-nkumba-yellow/20 flex items-center justify-center bg-nkumba-yellow/5">
                <div className="text-center p-8">
                  <div className="text-6xl font-black text-nkumba-yellow mb-2 tracking-tighter">FRI</div>
                  <div className="text-xl font-bold text-white uppercase tracking-widest">Sessions</div>
                  <div className="h-px w-24 bg-white/10 mx-auto my-6" />
                  <div className="text-slate-400 text-sm mb-4">Starting at</div>
                  <div className="text-3xl font-bold text-white mb-1">2:00 PM</div>
                  <div className="text-nkumba-blue text-sm font-medium">Nkumba Main Campus</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-nkumba flex items-center justify-center">
              <span className="text-sm font-bold text-white">N</span>
            </div>
            <span className="text-lg font-bold text-white">
              Nkumba Blockchain <span className="text-nkumba-yellow">Club</span>
            </span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2026 Nkumba Blockchain Association. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
