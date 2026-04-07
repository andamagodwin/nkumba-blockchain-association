import React from "react";
import Navbar from "@/components/ui/Navbar";
import BorderGlow from "@/components/ui/BorderGlow";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Aurora from "@/components/ui/Aurora";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
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
  SiExpress,
  SiGithub
} from "react-icons/si";
import LogoLoop from "@/components/ui/LogoLoop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-nkumba-blue/30 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-nkumba-blue opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-nkumba-yellow opacity-5 blur-[120px] rounded-full" />

      <Navbar
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Learning', href: '#learning' },
          { label: 'Sessions', href: '#sessions' }
        ]}
        ctaLabel="Join Now"
        ctaHref="#join"
      />

      <main className="relative">
        <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
          <Aurora
            colorStops={["#1D3E93", "#F2ED00", "#1D3E93"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Hero Section */}
        <Section className="pt-40 pb-32">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">


            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              A Community for <br />
              <span className="text-nkumba-yellow">AI & Blockchain Innovators</span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed opacity-95">
              Join the Nkumba Blockchain Club to learn, build, and innovate at the intersection of AI and Web3.
              Discover the future of autonomous finance and digital identity every Friday.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-base border-glow-blue group">
                Build the Future With Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-base">
                View Curriculum
              </Button>
            </div>
          </div>

          {/* What We Learn Section */}
          <div className="mt-64 max-w-full relative z-10 px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">What we will <span className="text-nkumba-yellow">explore</span></h2>
            </div>

            <div className="max-w-5xl mx-auto mb-16 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Blockchain</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiPolygon className="text-[#8247E5] text-2xl" />
                    Polygon Testnet
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Lang</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiSolidity className="text-slate-300 text-2xl" />
                    Solidity
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Dev Tool</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiEthereum className="text-[#3C3C3D] text-2xl" />
                    Hardhat
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Wallet</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiEthereum className="text-[#E2761B] text-2xl" />
                    MetaMask
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Frontend</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiReact className="text-[#61DAFB] text-2xl" />
                    React + Vite
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Web3 Lib</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiEthereum className="text-[#627EEA] text-2xl" />
                    Ethers.js
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Backend</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <div className="flex -space-x-1">
                      <SiNodedotjs className="text-[#339933] text-2xl relative z-10" />
                      <SiExpress className="text-white text-2xl relative z-0" />
                    </div>
                    Node.js / Express
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Storage</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiIpfs className="text-[#65C2CB] text-2xl" />
                    Pinata / NFT.Storage
                  </div>
                </div>
                <div className="glass p-6 !border-transparent rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors md:col-span-4 lg:col-span-1 lg:col-start-2">
                  <div className="text-nkumba-blue text-sm font-semibold mb-2 uppercase tracking-wide">Version Control</div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <SiGithub className="text-white text-2xl" />
                    GitHub
                  </div>
                </div>
              </div>
            </div>

            <div className="relative py-8 overflow-hidden">
              <LogoLoop
                speed={40}
                direction="left"
                logoHeight={64}
                gap={32}
                fadeOut={true}
                fadeOutColor="#020617"
                logos={[
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiPolygon className="text-xl md:text-3xl" style={{ color: '#8247E5' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Polygon</span></div>, title: "Polygon" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiSolidity className="text-xl md:text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Solidity</span></div>, title: "Solidity" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-xl md:text-3xl" style={{ color: '#3C3C3D' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Hardhat</span></div>, title: "Hardhat" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-xl md:text-3xl" style={{ color: '#E2761B' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">MetaMask</span></div>, title: "MetaMask" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiReact className="text-xl md:text-3xl" style={{ color: '#61DAFB' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">React + Vite</span></div>, title: "Frontend" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiNextdotjs className="text-xl md:text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Next.js</span></div>, title: "Next.js" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiEthereum className="text-xl md:text-3xl" style={{ color: '#627EEA' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Ethers.js</span></div>, title: "Web3 Lib" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiNodedotjs className="text-xl md:text-3xl" style={{ color: '#339933' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Node.js</span></div>, title: "Backend" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiExpress className="text-xl md:text-3xl" style={{ color: '#FFFFFF' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">Express</span></div>, title: "Express" },
                  { node: <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-8 md:py-5 glass bg-white/[0.02] border-white/5 rounded-xl md:rounded-2xl group hover:bg-nkumba-blue/5 transition-all duration-500 whitespace-nowrap"><SiIpfs className="text-xl md:text-3xl" style={{ color: '#65C2CB' }} /> <span className="font-bold text-white/90 text-sm md:text-xl font-mono">IPFS + Pinata</span></div>, title: "Storage" },
                ]}
              />
            </div>
          </div>
        </Section>

        {/* About Us Section */}
        <Section id="about" className="relative z-10 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                About <span className="text-nkumba-yellow">Us</span>
              </h2>
              <div className="space-y-6">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  We are a vibrant community of passionate students and tech enthusiasts at Nkumba University. Our mission is to bridge the gap between theoretical knowledge and practical application in the rapidly evolving fields of <span className="text-white font-semibold">Blockchain, Web3, and Artificial Intelligence</span>.
                </p>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  Through collaborative open-source projects, hands-on workshops, and insightful guest speaker sessions, we aim to equip our members with the skills necessary to innovate, build decentralized applications, and shape the future of autonomous technology.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                {/* Subtle Glow Behind Image */}
                <div className="absolute inset-[30%] bg-nkumba-yellow/5 blur-[60px] rounded-full pointer-events-none" />
                <img 
                  src="/Bitcoin-p2p-bro.svg" 
                  alt="Bitcoin Peer-to-Peer Illustration" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:-translate-y-4 hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </Section>


        {/* Learning/Curriculum Section */}
        <Section id="learning" className="bg-slate-950/30">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Learn & <span className="text-nkumba-yellow">Build</span></h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our curriculum is designed to take you from blockchain basics to building your own decentralized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BorderGlow className="h-full" glowColor="223 67 35" colors={['#1D3E93', '#F2ED00', '#173277']}>
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <Code size="40" color="#F2ED00" variant="Bulk" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Web3 Development</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Learn to build DApps using React, Ethers.js, and modern blockchain frameworks. Connect the web to the blockchain.
                </p>
              </div>
            </BorderGlow>

            <BorderGlow className="h-full" glowColor="59 100 47" colors={['#F2ED00', '#1D3E93', '#173277']}>
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <SecuritySafe size="40" color="#F2ED00" variant="Bulk" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Smart Contracts</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Master Solidity and Rust to write secure, scalable smart contracts that power the decentralized economy.
                </p>
              </div>
            </BorderGlow>

            <BorderGlow className="h-full" glowColor="223 67 35" colors={['#173277', '#F2ED00', '#1D3E93']}>
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <MoneySend size="40" color="#F2ED00" variant="Bulk" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">DeFi & Tokenomics</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Explore the world of Decentralized Finance, liquidity pools, and the economic models behind successful protocols.
                </p>
              </div>
            </BorderGlow>
          </div>
        </Section>

        {/* Friday Sessions Section */}
        <section id="sessions" className="relative z-10 py-20 overflow-hidden">
          {/* Full-bleed Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/sessions-bg.jpg')" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-nkumba-yellow/5 blur-[120px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h3 className="text-4xl font-bold text-white mb-6">Every <span className="text-nkumba-yellow">Week</span> at Nkumba</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  We gather every week at the Nkumba University campus to discuss the latest in blockchain,
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
                      <TickCircle size="20" color="#1D3E93" variant="Bold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="border-glow-blue px-10">
                  Save My Seat
                </Button>
              </div>
              <div className="flex-1 w-full flex flex-col items-center md:items-end text-center md:text-right gap-3">
                <div className="text-7xl font-black text-nkumba-yellow tracking-tighter">WKLY</div>
                <div className="text-2xl font-bold text-white uppercase tracking-widest">Sessions</div>
                <div className="h-px w-16 bg-white/10 my-2" />
                <div className="text-slate-400 text-sm">Starting at</div>
                <div className="text-4xl font-bold text-white">2:00 PM</div>
                <div className="text-nkumba-yellow/80 text-sm font-medium tracking-wide">Nkumba Main Campus</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Section id="faq" className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Got <span className="text-nkumba-yellow">Questions?</span>
              </h2>
              <p className="text-slate-400 text-lg">Everything you need to know about the Nkumba Blockchain Club.</p>
            </div>
            <FaqAccordion />
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/nkumba-logo.jpeg" alt="Nkumba Logo" className="w-8 h-8 rounded-lg object-cover" />
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
