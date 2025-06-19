
import React, { useState } from 'react';
import PillChain from '../components/PillChain';
import SocialIcon from '../components/SocialIcon';
import FreeText from '../components/FreeText';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "G9J2KRME69XE0D258P5UH9T35A95WPPGPDIG7MUPUMP";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      x: "https://x.com/",
      telegram: "https://t.me/",
      dextools: "https://www.dextools.io/",
      chart: "https://dexscreener.com/"
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pump-pink to-white overflow-hidden relative">
      {/* Floating Free Text Elements */}
      <FreeText className="absolute top-10 left-10 opacity-40" size="small" />
      <FreeText className="absolute top-20 right-20 opacity-30" size="medium" />
      <FreeText className="absolute bottom-32 left-32 opacity-25" size="small" />
      <FreeText className="absolute bottom-10 right-10 opacity-35" size="medium" />
      <FreeText className="absolute top-1/2 left-8 opacity-20" size="large" />
      <FreeText className="absolute top-1/3 right-12 opacity-30" size="small" />

      {/* Red decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pump-red rounded-full opacity-80 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pump-red rounded-full opacity-60 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Pill Chain */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-black-ops text-6xl lg:text-8xl text-pump-red leading-tight mb-4">
              ELON FREE<br />
              PUMPFUN
            </h1>
            
            {/* Contract Address */}
            <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-6 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-fredoka font-semibold text-gray-800 text-sm lg:text-base break-all">
                  {contractAddress}
                </span>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded font-fredoka font-bold text-white transition-all duration-200 ${
                    copied 
                      ? 'bg-pump-green' 
                      : 'bg-pump-red hover:bg-red-600 hover:scale-105'
                  }`}
                >
                  {copied ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <SocialIcon type="x" onClick={() => handleSocialClick('x')} />
              <SocialIcon type="telegram" onClick={() => handleSocialClick('telegram')} />
              <SocialIcon type="dextools" onClick={() => handleSocialClick('dextools')} />
              <SocialIcon type="chart" onClick={() => handleSocialClick('chart')} />
            </div>
          </div>
          
          {/* Large Pill Chain */}
          <div className="flex-shrink-0 mt-8 lg:mt-0">
            <PillChain size="large" className="animate-float" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="bg-gradient-to-r from-pump-pink to-white rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <PillChain size="medium" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <PillChain size="large" />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-black-ops text-4xl lg:text-6xl text-pump-red mb-4">
                $FREE
              </h2>
              <p className="font-fredoka text-xl lg:text-2xl font-bold text-pump-red leading-relaxed">
                THIS AIN'T A BAD, IT'S A BRAND. $FREE IS THE PILL YOU DIDN'T KNOW YOU NEEDED.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white bg-opacity-90 rounded-full px-8 py-4">
            <PillChain size="small" />
            <span className="font-fredoka text-lg font-semibold text-gray-800">
              Join the Revolution
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
