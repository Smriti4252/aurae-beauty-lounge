/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, Check, ChevronRight, User, Mail, Coffee, ArrowRight } from 'lucide-react';
import { RITUALS } from '../data';
import { ServiceRitual } from '../types';

interface BookingSectionProps {
  preselectedRitual: ServiceRitual | null;
}

export default function BookingSection({ preselectedRitual }: BookingSectionProps) {
  const [selectedRitual, setSelectedRitual] = useState<ServiceRitual>(preselectedRitual || RITUALS[0]);
  const [step, setStep] = useState<number>(1);
  const [date, setDate] = useState<string>('2026-05-25');
  const [time, setTime] = useState<string>('11:00 AM');
  
  // Custom sensory details suggesting premier physical hospitality
  const [beverage, setBeverage] = useState<string>('Jasmine Petal Infusion');
  const [lighting, setLighting] = useState<string>('Warm Amber Sunset');
  const [isSilentAppointment, setIsSilentAppointment] = useState<boolean>(false);
  
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  // Set selected ritual when parent component signals a pre-selection
  if (preselectedRitual && preselectedRitual.id !== selectedRitual.id) {
    setSelectedRitual(preselectedRitual);
  }

  const times = ['09:00 AM', '11:00 AM', '01:30 PM', '04:00 PM', '06:30 PM'];
  const beverages = ['Jasmine Petal Infusion', 'Dior White Rose Tea', 'Vapor-Glow Champagne', 'Fresh Aloe Water'];
  const lightChoices = ['Warm Amber Sunset', 'Soft Diffused Morning Light', 'Candles Only'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setIsBooked(true);
  };

  const resetBooking = () => {
    setStep(1);
    setIsBooked(false);
    setGuestName('');
    setGuestEmail('');
  };

  return (
    <section
      id="booking"
      className="relative py-24 md:py-36 bg-[#0C0C0C] md:px-12 px-6 overflow-hidden"
    >
      {/* Immersive breathing radial glow backdrop */}
      <motion.div
        animate={{
          scale: [1, 1.12, 0.96, 1.05, 1],
          opacity: [0.5, 0.75, 0.45, 0.65, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5D1B8]/[0.035] rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* Floating atmospheric luxury particles crawling upwards in reservation sanctuary */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => {
          const size = i % 2 === 0 ? 3 : 4;
          const delay = i * 2.8;
          const duration = 18 + (i * 4);
          const left = `${10 + (i * 14)}%`;
          
          return (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{
                y: "-10%",
                opacity: [0, 0.25, 0.4, 0.15, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), (i % 3 === 0 ? -10 : 10), 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              style={{
                left: left,
                width: `${size}px`,
                height: `${size}px`,
              }}
              className="absolute rounded-full bg-[#E5D1B8]/20 filter blur-[0.5px] shadow-[0_0_8px_rgba(229,209,184,0.12)]"
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Title Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-sans text-[9px] tracking-[0.45em] text-[#E5D1B8] uppercase font-semibold inline-flex items-center gap-2 mb-4">
            <Calendar size={10} className="text-[#A68B5B] animate-pulse" />
            Lounge Sanctuary Reservations
          </span>
          <h2 id="booking-title" className="font-serif font-light text-4xl md:text-5.5xl text-white tracking-tight leading-[1.1] mb-5">
            Initiate Your <span className="font-serif italic text-[#E5D1B8]">Aura Journey</span>
          </h2>
          <p className="font-sans text-[11.5px] text-[#EBE3D5]/60 leading-relaxed font-light max-w-md mx-auto">
            Each ritual seat is dedicated to one client at a time. Reserve your sanctuary slot below and detail your bespoke sensory preferences.
          </p>
        </div>

        {/* Core Reservation Terminal Wrapper - Suspended floating luxury editorial panel with glowing frame */}
        <div className="bg-[#141414]/30 backdrop-blur-3xl rounded-[40px] border border-white/[0.035] p-8 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_0_50px_rgba(0,0,0,0.4)] overflow-hidden relative">
          
          {/* Subtle luxurious internal light blurs inside the panel */}
          <div className="absolute top-0 inset-x-0 h-[220px] bg-[radial-gradient(circle_at_50%_0%,rgba(229,209,184,0.04)_0%,transparent_70%)] pointer-events-none z-0" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(216,180,254,0.015)_0%,transparent_65%)] pointer-events-none z-0" />
          
          {/* Premium soft glass perimeter light shimmer ring */}
          <div className="absolute inset-0 border border-[#E5D1B8]/[0.015] rounded-[40px] pointer-events-none z-10" />
          
          <AnimatePresence mode="wait">
            {!isBooked ? (
              <motion.div
                key="booking-form-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Step indicator pipeline with thin horizontal connector bar and elegant glow */}
                <div className="relative flex items-center justify-between mb-14 pb-8 border-b border-white/[0.04]">
                  {/* Background connecting channel */}
                  <div className="absolute top-[22px] left-8 right-8 h-[1px] bg-white/[0.05]" />
                  <div 
                    className="absolute top-[22px] left-8 h-[1.5px] bg-[#E5D1B8]/40 blur-[0.2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    style={{ width: `${(step - 1) * 44}%` }}
                  />
                  <div 
                    className="absolute top-[21.5px] left-8 h-[2.5px] bg-[#E5D1B8]/30 blur-[1px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    style={{ width: `${(step - 1) * 44}%` }}
                  />

                  {[1, 2, 3].map((num) => {
                    const isCompleted = num < step;
                    const isActive = num === step;
                    return (
                      <div key={num} className="relative z-10 flex flex-col items-center gap-3">
                        <button
                          type="button"
                          onClick={() => num < step && setStep(num)}
                          disabled={num >= step}
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-[10px] font-mono tracking-wider transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? 'bg-[#E5D1B8] text-[#0C0C0C] font-bold shadow-[0_0_20px_rgba(229,209,184,0.15)] scale-105 cursor-default'
                              : isCompleted
                              ? 'bg-[#EBE3D5]/80 text-[#0C0C0C] font-semibold hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(229,209,184,0.12)]'
                              : 'bg-[#0f0f0f] text-[#EBE3D5]/35 border border-white/[0.06] select-none cursor-default'
                          }`}
                          style={{
                            boxShadow: isActive 
                              ? 'inset 0 0 8px rgba(255, 255, 255, 0.45), 0 0 22px rgba(229, 209, 184, 0.22)' 
                              : 'none'
                          }}
                        >
                          {isCompleted ? <Check size={13} className="stroke-[2.5]" /> : `0${num}`}
                        </button>
                        <span className={`text-[9.5px] tracking-[0.22em] uppercase font-sans transition-all duration-700 ${
                          isActive ? 'text-[#E5D1B8] font-semibold' : 'text-[#EBE3D5]/35 font-light'
                        }`}>
                          {num === 1 ? 'Ritual Selection' : num === 2 ? 'Decompression Timing' : 'Sensory Setup'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Ritual Picker */}
                  {step === 1 && (
                    <motion.div
                      key="step1-ritual-picker"
                      initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-8"
                    >
                      <div>
                        <label className="font-sans text-[10px] tracking-[0.4em] text-[#EBE3D5]/60 uppercase font-semibold block mb-6 text-center sm:text-left">
                          Choose Active Sensory Destination
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {RITUALS.map((r) => {
                            const isSelected = selectedRitual.id === r.id;
                            return (
                              <div
                                key={r.id}
                                id={`booking-ritual-${r.id}`}
                                onClick={() => setSelectedRitual(r)}
                                data-cursor="card"
                                className={`p-6 bg-white/[0.012] border rounded-3xl text-left transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative overflow-hidden group/card ${
                                  isSelected
                                    ? 'bg-gradient-to-br from-white/[0.035] to-white/[0.005] border-[#E5D1B8]/40 shadow-[0_20px_45px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.06)] scale-[1.01]'
                                    : 'border-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.025] hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
                                }`}
                              >
                                {/* Delicate Glassmorphism / luxury glow and ambient backdrops inside the card */}
                                <div 
                                  className={`absolute -inset-10 bg-[linear-gradient(135deg,rgba(229,209,184,0.025),rgba(216,180,254,0.01))] filter blur-xl rounded-2xl transition-all duration-1000 opacity-0 group-hover/card:opacity-100 pointer-events-none ${
                                    isSelected ? 'opacity-30' : ''
                                  }`} 
                                />

                                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                                  <div>
                                    <span className="font-sans text-[8px] tracking-[0.25em] font-medium text-brand-gold/80 block mb-2 uppercase">
                                      {r.category}
                                    </span>
                                    <h4 className="font-serif text-lg font-light text-white leading-snug tracking-wide group-hover/card:text-white transition-colors duration-500">
                                      {r.title}
                                    </h4>
                                  </div>
                                  <div className="flex items-center justify-between border-t border-white/[0.03] pt-4.5 text-[9.5px] tracking-wide text-[#EBE3D5]/50 font-sans font-light">
                                    <span className="font-sans text-[#EBE3D5]/40 uppercase tracking-[0.1em]">{r.duration}</span>
                                    <span className="font-serif italic text-[#E5D1B8] font-light text-xs">{r.price}</span>
                                  </div>
                                </div>

                                {/* Deluxe inner card edge flare */}
                                <div
                                  style={{
                                    borderColor: isSelected ? 'rgba(229, 209, 184, 0.22)' : 'rgba(255,255,255,0.01)',
                                    boxShadow: isSelected 
                                      ? 'inset 0 0 15px rgba(229, 209, 184, 0.04)' 
                                      : 'none',
                                  }}
                                  className="absolute inset-0 border rounded-3xl pointer-events-none z-20 transition-all duration-[1000ms]"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <button
                          id="booking-next-to-step2"
                          onClick={() => setStep(2)}
                          data-cursor="button"
                          className="group/btn px-8.5 py-4 bg-[#E5D1B8] hover:bg-[#EBE3D5] text-[#0C0C0C] font-sans text-[9px] tracking-[0.3em] font-bold rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(229,209,184,0.18)] hover:scale-[1.03] uppercase relative overflow-hidden"
                        >
                          <span>Proceed to Scheduling</span>
                          <ArrowRight size={11} className="transform group-hover/btn:translate-x-1.5 duration-500 transition-transform stroke-[2]" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Time and Date Setup */}
                  {step === 2 && (
                    <motion.div
                      key="step2-scheduling"
                      initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        
                        {/* Left: Input Calendar Date */}
                        <div className="md:col-span-6 space-y-4">
                          <label className="font-sans text-[10px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-1">
                            Select Experience Date
                          </label>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-white/[0.015] p-4.5 border border-white/[0.08] focus:border-[#E5D1B8]/40 focus:bg-[#0C0C0C]/50 rounded-2xl font-sans text-xs tracking-wider outline-none focus:ring-0 transition-all text-white relative shadow-inner"
                          />
                          <div className="p-5.5 rounded-2.5xl bg-white/[0.01] border border-white/[0.035] shadow-sm">
                            <span className="font-sans text-[8.5px] tracking-widest text-brand-gold uppercase font-semibold block mb-1.5">
                              Lounge Policy
                            </span>
                            <p className="font-sans text-[10.5px] text-[#EBE3D5]/60 leading-relaxed font-light">
                              Please arrive precisely 15 minutes before your schedule block to accommodate the floral tea sensory induction.
                            </p>
                          </div>
                        </div>

                        {/* Right: Immersive Time Slots */}
                        <div className="md:col-span-6">
                          <label className="font-sans text-[10px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-4">
                            Select Session Block
                          </label>
                          <div className="grid grid-cols-2 gap-3.5">
                            {times.map((t) => {
                              const isSelected = time === t;
                              return (
                                <button
                                  key={t}
                                  id={`time-slot-${t.replace(/\s+/g, '-')}`}
                                  onClick={() => setTime(t)}
                                  data-cursor="button"
                                  className={`p-4 rounded-2xl border text-[9.5px] tracking-[0.2em] font-medium transition-all duration-[600ms] ease-out shortcut-pin uppercase cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#E5D1B8] border-transparent text-[#0C0C0C] shadow-md font-bold scale-[1.01]'
                                      : 'bg-white/[0.01] border-white/[0.04] text-[#EBE3D5]/70 hover:bg-white/[0.025] hover:border-white/[0.12]'
                                  }`}
                                  style={{
                                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: isSelected ? '0 10px 22px rgba(229, 209, 184, 0.15)' : 'none'
                                  }}
                                >
                                  {t}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      <div className="flex justify-between mt-8 border-t border-white/[0.04] pt-8">
                        <button
                          id="step2-back-btn"
                          onClick={() => setStep(1)}
                          data-cursor="button"
                          className="px-7 py-3.5 border border-white/[0.1] hover:border-[#E5D1B8]/40 hover:bg-white/[0.015] text-[#EBE3D5]/80 hover:text-white font-sans text-[9px] tracking-widest font-semibold rounded-full transition-all cursor-pointer uppercase bg-transparent"
                        >
                          Back
                        </button>
                        <button
                          id="booking-next-to-step3"
                          onClick={() => setStep(3)}
                          data-cursor="button"
                          className="group/btn px-8.5 py-4 bg-[#E5D1B8] hover:bg-[#EBE3D5] text-[#0C0C0C] font-sans text-[9px] tracking-[0.3em] font-bold rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(229,209,184,0.18)] hover:scale-[1.03] uppercase"
                        >
                          <span>Proceed To Custom Sensory</span>
                          <ArrowRight size={11} className="transform group-hover/btn:translate-x-1.5 duration-500 transition-transform stroke-[2]" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Sensory Custom Choices & Guest Info */}
                  {step === 3 && (
                    <motion.form
                      key="step3-sensory-credentials"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-8"
                    >
                      
                      {/* Sensory Choice dropdowns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Hospitality Beverage */}
                        <div>
                          <label className="font-sans text-[10px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-3 flex items-center gap-1.5">
                            <Coffee size={12} className="text-[#A68B5B]" />
                            <span>Chairside Beverage Pairing</span>
                          </label>
                          <select
                            value={beverage}
                            onChange={(e) => setBeverage(e.target.value)}
                            className="w-full bg-white/[0.02] p-4.5 border border-white/[0.1] rounded-2xl font-sans text-xs tracking-wider outline-none focus:border-[#E5D1B8]/40 focus:bg-[#0C0C0C]/50 transition-all text-white shadow-inner cursor-pointer"
                          >
                            {beverages.map((b) => (
                              <option key={b} value={b} className="bg-[#141414] text-white">{b}</option>
                            ))}
                          </select>
                        </div>

                        {/* Lighting selection */}
                        <div>
                          <label className="font-sans text-[10px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-3 flex items-center gap-1.5">
                            <Sparkles size={11} className="text-[#A68B5B]" />
                            <span>Sanctuary Ambient Lighting</span>
                          </label>
                          <select
                            value={lighting}
                            onChange={(e) => setLighting(e.target.value)}
                            className="w-full bg-white/[0.02] p-4.5 border border-white/[0.1] rounded-2xl font-sans text-xs tracking-wider outline-none focus:border-[#E5D1B8]/40 focus:bg-[#0C0C0C]/50 transition-all text-white shadow-inner cursor-pointer"
                          >
                            {lightChoices.map((l) => (
                              <option key={l} value={l} className="bg-[#141414] text-white">{l}</option>
                            ))}
                          </select>
                        </div>

                      </div>

                      {/* Silent appointment option toggle */}
                      <div className="bg-white/[0.01] p-5.5 rounded-2.5xl border border-white/[0.035] flex items-center justify-between shadow-sm">
                        <div className="pr-4">
                          <span className="font-sans text-[9.5px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-1">
                            Silent Sanctuary Option
                          </span>
                          <p className="font-sans text-[10px] text-[#EBE3D5]/65 leading-relaxed font-light">
                            All commentary on products, skincare physics, and steps is omitted to guarantee deep meditation.
                          </p>
                        </div>
                        <button
                          type="button"
                          id="silent-toggle-btn"
                          onClick={() => setIsSilentAppointment(!isSilentAppointment)}
                          data-cursor="button"
                          className={`w-13 h-7.5 rounded-full transition-all duration-[600ms] p-1 flex items-center cursor-pointer ${
                            isSilentAppointment ? 'bg-[#E5D1B8]' : 'bg-white/[0.02] border border-white/[0.08]'
                          }`}
                        >
                          <motion.div layout className="w-5.5 h-5.5 rounded-full bg-[#0C0C0C] shadow-md" />
                        </button>
                      </div>

                      {/* Guest Fields */}
                      <div className="border-t border-white/[0.04] pt-8 flex flex-col gap-5">
                        <span className="font-sans text-[9.5px] tracking-widest text-[#E5D1B8] uppercase font-semibold block mb-1">
                          Client Verification Details
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                          <div className="relative">
                            <User size={13} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A68B5B]/80" />
                            <input
                              type="text"
                              required
                              placeholder="Full Name"
                              value={guestName}
                              onChange={(e) => setGuestName(e.target.value)}
                              className="w-full bg-white/[0.015] pl-11 pr-4.5 py-4.5 border border-white/[0.1] rounded-2xl font-sans text-xs tracking-wider outline-none focus:border-[#E5D1B8]/40 focus:bg-[#0C0C0C]/50 transition-all text-white placeholder-neutral-500 shadow-inner"
                            />
                          </div>

                          <div className="relative">
                            <Mail size={13} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A68B5B]/80" />
                            <input
                              type="email"
                              required
                              placeholder="Email Address"
                              value={guestEmail}
                              onChange={(e) => setGuestEmail(e.target.value)}
                              className="w-full bg-white/[0.015] pl-11 pr-4.5 py-4.5 border border-white/[0.1] rounded-2xl font-sans text-xs tracking-wider outline-none focus:border-[#E5D1B8]/40 focus:bg-[#0C0C0C]/50 transition-all text-white placeholder-neutral-500 shadow-inner"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <button
                          type="button"
                          id="step3-back-btn"
                          onClick={() => setStep(2)}
                          data-cursor="button"
                          className="px-7 py-3.5 border border-white/[0.1] hover:border-[#E5D1B8]/40 hover:bg-white/[0.015] text-[#EBE3D5]/80 hover:text-white font-sans text-[9px] tracking-widest font-semibold rounded-full transition-all cursor-pointer uppercase bg-transparent"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          id="booking-submit-btn"
                          data-cursor="button"
                          className="group/btn px-8.5 py-4 bg-[#E5D1B8] hover:bg-[#EBE3D5] text-[#0C0C0C] font-sans text-[9px] tracking-[0.3em] font-bold rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(229,209,184,0.18)] hover:scale-[1.03] uppercase"
                        >
                          <span>Generate Luxury Reservation Pass</span>
                          <ArrowRight size={11} className="transform group-hover/btn:translate-x-1.5 duration-500 transition-transform stroke-[2]" />
                        </button>
                      </div>

                    </motion.form>
                  )}
                </AnimatePresence>

              </motion.div>
            ) : (
              // Luxury CONFIRMATION Pass (The Golden Transparent Ticket)
              <motion.div
                key="booking-success-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center p-2 md:p-6 relative text-white"
              >
                {/* Enhanced warm glow behind ticket */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="w-16 h-16 rounded-full bg-brand-muted-rose/10 border border-brand-muted-rose/20 flex items-center justify-center text-brand-muted-rose mb-6 z-10">
                  <Check size={28} className="animate-pulse" />
                </div>

                <span className="font-sans text-[9px] tracking-[0.4em] text-brand-muted-rose uppercase font-medium z-10 block mb-2">
                  Lounge Pass Generated
                </span>

                <h3 className="font-serif text-3xl font-light text-white mb-4 z-10 leading-none">
                  Welcome to the Sanctum, {guestName}.
                </h3>
                
                <p className="font-sans text-xs text-[#EBE3D5]/70 leading-relaxed max-w-sm mb-10 z-10 font-light">
                  A high-fidelity booking voucher has been compiled and dispatched to your email address (<span className="text-brand-muted-rose font-medium mt-0.5">{guestEmail}</span>). Show this certificate upon your arrival.
                </p>

                {/* The Ticket Pass Itself */}
                <div id="digital-reservation-pass" className="w-full max-w-md bg-[#0C0C0C] border border-brand-muted-rose/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 divide-y divide-white/[0.05]">
                  
                  {/* Top segment */}
                  <div className="p-6 bg-[#141414]/90 text-left">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-xl tracking-[0.2em] font-light text-[#EBE3D5]">AURAÉ</span>
                      <span className="font-sans text-[8px] tracking-[0.2em] font-bold text-brand-muted-rose uppercase bg-[#0C0C0C] px-3 py-1 rounded-full border border-white/10">
                        Classique Session
                      </span>
                    </div>
                    <span className="font-sans text-[8px] text-[#EBE3D5]/40 uppercase tracking-widest block">
                      Ritual Registered
                    </span>
                    <span className="font-serif text-base text-white font-normal mt-0.5 block">
                      {selectedRitual.title}
                    </span>
                  </div>

                  {/* Mid Segment */}
                  <div className="p-6 text-left grid grid-cols-2 gap-5">
                    <div>
                      <span className="font-sans text-[8px] text-[#EBE3D5]/40 uppercase tracking-widest block">
                        Calendar Date
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#EBE3D5] mt-1 block">
                        {date}
                      </span>
                    </div>

                    <div>
                      <span className="font-sans text-[8px] text-[#EBE3D5]/40 uppercase tracking-widest block">
                        Treatment Hour
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#EBE3D5] mt-1 block">
                        {time}
                      </span>
                    </div>

                    <div>
                      <span className="font-sans text-[8px] text-[#EBE3D5]/40 uppercase tracking-widest block">
                        Sensory Beverage
                      </span>
                      <span className="font-sans text-xs text-[#EBE3D5]/90 font-light mt-1 block">
                        {beverage}
                      </span>
                    </div>

                    <div>
                      <span className="font-sans text-[8px] text-[#EBE3D5]/40 uppercase tracking-widest block">
                        Sanctuary Mood
                      </span>
                      <span className="font-sans text-xs text-[#EBE3D5]/90 font-light mt-1 block">
                        {lighting} {isSilentAppointment ? '• Silent' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Aesthetic bar codes */}
                  <div className="px-6 py-4 bg-[#141414]/90 flex flex-col items-center justify-center gap-2">
                    <div className="w-full flex items-center justify-between gap-[2px] opacity-30">
                      {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5].map((w, idx) => (
                        <div key={idx} className="h-6 bg-brand-muted-rose rounded-sm" style={{ width: `${w * 0.45 + 1}px` }} />
                      ))}
                    </div>
                    <span className="font-sans text-[7px] tracking-[0.3em] font-semibold text-brand-muted-rose/60 uppercase">
                      ID: AUR-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>

                </div>

                <button
                  id="reset-booking-btn"
                  onClick={resetBooking}
                  data-cursor="button"
                  className="mt-10 px-8 py-3 bg-white text-[#0C0C0C] hover:bg-brand-muted-rose hover:text-[#0C0C0C] text-[10px] tracking-widest font-semibold rounded-full duration-400 transition-all uppercase cursor-pointer"
                >
                  Schedule Another Aura Journey
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
