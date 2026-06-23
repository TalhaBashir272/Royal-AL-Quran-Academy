import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, Sparkles, BookOpen, User, Mail, Phone, Calendar, Clock } from 'lucide-react';
import { COURSES } from '../data';
import { EnrollmentForm } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'trial' | 'regular';
  defaultCourseId?: string;
}

export default function EnrollmentModal({ isOpen, onClose, defaultType = 'trial', defaultCourseId }: EnrollmentModalProps) {
  const [form, setForm] = useState<EnrollmentForm>({
    fullName: '',
    email: '',
    phone: '',
    preferredCourse: COURSES[0].id,
    preferredTeacher: 'any',
    studentAgeGroup: 'kids',
    classTiming: 'evening',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<EnrollmentForm>>({});

  // Safely synchronize defaultCourseId and reset form when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setForm(prev => ({
        ...prev,
        preferredCourse: defaultCourseId || COURSES[0].id
      }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, defaultCourseId]);

  const getWhatsAppUrl = () => {
    const selectedCourse = COURSES.find(c => c.id === form.preferredCourse)?.title || form.preferredCourse;
    const prefTeacherMap = {
      any: 'Any Teacher (Male/Female)',
      male: 'Male Teacher',
      female: 'Female Teacher'
    };
    const ageGroupMap = {
      kids: 'Child (Under 15)',
      adults: 'Adult (15+)'
    };
    const timingMap = {
      morning: 'Morning (6:00 AM - 12:00 PM)',
      afternoon: 'Afternoon (12:00 PM - 5:00 PM)',
      evening: 'Evening (5:00 PM - 9:00 PM)',
      night: 'Night (9:00 PM - Midnight)'
    };

    const text = `Assalamu Alaikum Royal Al Quran Academy,

I would like to register for a class. Here are my enrollment details:

• Student Name: ${form.fullName}
• Email Address: ${form.email}
• Phone / WhatsApp: ${form.phone}
• Selected Course: ${selectedCourse}
• Preferred Teacher: ${prefTeacherMap[form.preferredTeacher] || form.preferredTeacher}
• Student Age Group: ${ageGroupMap[form.studentAgeGroup] || form.studentAgeGroup}
• Class Timing: ${timingMap[form.classTiming] || form.classTiming}
• Message / Requirements: ${form.notes || 'None'}

Please confirm my scheduling. Thank you!`;

    return `https://wa.me/923420061867?text=${encodeURIComponent(text)}`;
  };

  const getEmailUrl = () => {
    const selectedCourse = COURSES.find(c => c.id === form.preferredCourse)?.title || form.preferredCourse;
    const prefTeacherMap = {
      any: 'Any Teacher (Male/Female)',
      male: 'Male Teacher',
      female: 'Female Teacher'
    };
    const ageGroupMap = {
      kids: 'Child (Under 15)',
      adults: 'Adult (15+)'
    };
    const timingMap = {
      morning: 'Morning (6:00 AM - 12:00 PM)',
      afternoon: 'Afternoon (12:00 PM - 5:00 PM)',
      evening: 'Evening (5:00 PM - 9:00 PM)',
      night: 'Night (9:00 PM - Midnight)'
    };

    const subject = `New Enrollment Request - ${form.fullName}`;
    const body = `Assalamu Alaikum Royal Al Quran Academy,

I would like to register for a class. Here are my enrollment details:

• Student Name: ${form.fullName}
• Email Address: ${form.email}
• Phone / WhatsApp: ${form.phone}
• Selected Course: ${selectedCourse}
• Preferred Teacher: ${prefTeacherMap[form.preferredTeacher] || form.preferredTeacher}
• Student Age Group: ${ageGroupMap[form.studentAgeGroup] || form.studentAgeGroup}
• Class Timing: ${timingMap[form.classTiming] || form.classTiming}
• Message / Requirements: ${form.notes || 'None'}

Please confirm my scheduling. Thank you!`;

    return `mailto:royalalquranacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const validate = () => {
    const tempErrors: Partial<EnrollmentForm> = {};
    if (!form.fullName.trim()) tempErrors.fullName = 'Full name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) tempErrors.phone = 'Phone/WhatsApp number is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save submission locally
    const existingSubmissions = JSON.parse(localStorage.getItem('royal_quran_enrollments') || '[]');
    const newSubmission = {
      ...form,
      id: Math.random().toString(36).substring(2, 9),
      type: defaultType,
      date: new Date().toISOString()
    };
    localStorage.setItem('royal_quran_enrollments', JSON.stringify([...existingSubmissions, newSubmission]));

    setSubmitted(true);

    // Try to open WhatsApp automatically to instantly deliver details
    const waUrl = getWhatsAppUrl();
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Auto open blocked:', err);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      preferredCourse: COURSES[0].id,
      preferredTeacher: 'any',
      studentAgeGroup: 'kids',
      classTiming: 'evening',
      notes: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="enrollment-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="enrollment-modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-royal-gold/30 bg-gradient-to-b from-[#032e18] to-[#011a0d] shadow-2xl shadow-emerald-950/50"
          >
            {/* Elegant Islamic Arch Border decoration */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute right-4 top-4 text-emerald-300 hover:text-royal-gold transition-colors duration-200"
              aria-label="Close Modal"
            >
              <X className="h-6 w-6" />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8">
                {/* Title */}
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center justify-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Royal Journey of Faith</span>
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                    {defaultType === 'trial' ? 'Start Your 3-Day Free Trial' : 'Enroll in Premium Classes'}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-200/80 max-w-md mx-auto">
                    Fill out this simple form. No credit card required. Our admission counselor will reach you on WhatsApp within hours!
                  </p>
                </div>

                {/* Form */}
                <form id="enrollment-form-element" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <User className="h-3 w-3 text-royal-gold" /> Student Full Name
                      </label>
                      <input
                        type="text"
                        className={`w-full bg-emerald-950/60 border ${errors.fullName ? 'border-red-500' : 'border-emerald-800/60'} rounded-lg px-4 py-2.5 text-white placeholder-emerald-700/60 focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200`}
                        placeholder="e.g. Bilal Ahmad"
                        value={form.fullName}
                        onChange={e => setForm(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <Mail className="h-3 w-3 text-royal-gold" /> Email Address
                      </label>
                      <input
                        type="email"
                        className={`w-full bg-emerald-950/60 border ${errors.email ? 'border-red-500' : 'border-emerald-800/60'} rounded-lg px-4 py-2.5 text-white placeholder-emerald-700/60 focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200`}
                        placeholder="e.g. bilal@gmail.com"
                        value={form.email}
                        onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <Phone className="h-3 w-3 text-royal-gold" /> Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        className={`w-full bg-emerald-950/60 border ${errors.phone ? 'border-red-500' : 'border-emerald-800/60'} rounded-lg px-4 py-2.5 text-white placeholder-emerald-700/60 focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200`}
                        placeholder="e.g. +1 (555) 019-2834"
                        value={form.phone}
                        onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Course Selection */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <BookOpen className="h-3 w-3 text-royal-gold" /> Desired Course
                      </label>
                      <select
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-lg px-4 py-2.5 text-white focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200"
                        value={form.preferredCourse}
                        onChange={e => setForm(prev => ({ ...prev, preferredCourse: e.target.value }))}
                      >
                        {COURSES.map(course => (
                          <option key={course.id} value={course.id} className="bg-emerald-950 text-white">
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Teacher Preference */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <User className="h-3 w-3 text-royal-gold" /> Teacher Preference
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['any', 'male', 'female'] as const).map(pref => (
                          <button
                            key={pref}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, preferredTeacher: pref }))}
                            className={`px-3 py-2 text-xs font-medium rounded-lg capitalize border transition-all duration-200 ${
                              form.preferredTeacher === pref
                                ? 'bg-royal-gold text-emerald-950 border-royal-gold'
                                : 'bg-emerald-950/40 text-emerald-200 border-emerald-800/60 hover:border-royal-gold/40'
                            }`}
                          >
                            {pref}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Age Group */}
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-royal-gold" /> Student Age Group
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['kids', 'adults'] as const).map(group => (
                          <button
                            key={group}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, studentAgeGroup: group }))}
                            className={`px-3 py-2 text-xs font-medium rounded-lg capitalize border transition-all duration-200 ${
                              form.studentAgeGroup === group
                                ? 'bg-royal-gold text-emerald-950 border-royal-gold'
                                : 'bg-emerald-950/40 text-emerald-200 border-emerald-800/60 hover:border-royal-gold/40'
                            }`}
                          >
                            {group === 'kids' ? 'Child (Under 15)' : 'Adult (15+)'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timing Preference */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-royal-gold" /> Preferred Timing (UTC)
                    </label>
                    <select
                      className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-lg px-4 py-2.5 text-white focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200"
                      value={form.classTiming}
                      onChange={e => setForm(prev => ({ ...prev, classTiming: e.target.value }))}
                    >
                      <option value="morning" className="bg-emerald-950">Morning (6:00 AM - 12:00 PM)</option>
                      <option value="afternoon" className="bg-emerald-950">Afternoon (12:00 PM - 5:00 PM)</option>
                      <option value="evening" className="bg-emerald-950">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="night" className="bg-emerald-950">Night (9:00 PM - Midnight)</option>
                    </select>
                  </div>

                  {/* Special Notes / Language requirement */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1.5">
                      Special Requirements / Message
                    </label>
                    <textarea
                      rows={2}
                      className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-lg px-4 py-2 text-white placeholder-emerald-700/60 focus:border-royal-gold focus:outline-none text-sm transition-colors duration-200"
                      placeholder="Specify if English/Urdu/Arabic speaking teachers are needed, or any physical learning limits..."
                      value={form.notes}
                      onChange={e => setForm(prev => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-300 via-royal-gold to-amber-500 text-emerald-950 font-bold py-3 px-6 rounded-lg text-sm uppercase tracking-wider shadow-lg hover:shadow-royal-gold/20 flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Free Sessions</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-10 text-center overflow-y-auto max-h-[85vh]"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-royal-gold/10 text-royal-gold">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-emerald-100/90 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Congratulations <span className="text-[#fbbf24] font-bold">{form.fullName}</span>, your trial request has been registered.
                </p>

                {/* Instant Action Prompt */}
                <div className="border border-emerald-800/40 bg-emerald-950/40 rounded-xl p-4 sm:p-5 max-w-md mx-auto mb-6">
                  <span className="text-[10px] uppercase font-bold text-[#fbbf24] tracking-wider block mb-2">
                    ⚡ Instant Enrollment Option
                  </span>
                  <p className="text-xs text-emerald-200/90 leading-relaxed mb-3">
                    Submit your form details directly via WhatsApp or Email to get instantly verified:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:brightness-110 active:scale-95 text-white font-extrabold px-5 py-2.5 rounded-full text-[10px] tracking-wider uppercase transition-all duration-200 shadow-md shadow-green-950/40"
                    >
                      <span>💬 WhatsApp Support</span>
                    </a>
                    <a
                      href={getEmailUrl()}
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 active:scale-95 text-emerald-950 font-extrabold px-5 py-2.5 rounded-full text-[10px] tracking-wider uppercase transition-all duration-200 shadow-md shadow-amber-950/40"
                    >
                      <span>✉️ Email Details</span>
                    </a>
                  </div>
                </div>

                {/* Details Tracker */}
                <div className="bg-[#000d06]/60 border border-royal-gold/15 rounded-xl p-4 max-w-md mx-auto mb-6 text-left space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-royal-gold mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>WHAT HAPPENS NEXT?</span>
                  </div>
                  <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                    1. <strong>Verification:</strong> Our team will contact you using the details submitted.
                  </p>
                  <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                    2. <strong>Teacher Allocation:</strong> We match you with our expert <span className="capitalize text-[#fbbf24] font-medium">{form.preferredTeacher === 'any' ? 'male/female' : form.preferredTeacher}</span> Qari.
                  </p>
                  <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                    3. <strong>First Session:</strong> A confirmation alert will be sent to the phone <span className="text-white font-medium">{form.phone}</span>.
                  </p>
                </div>

                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReset}
                    className="bg-emerald-900/60 border border-royal-gold/25 text-royal-gold hover:bg-emerald-850 px-6 py-2 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-200"
                  >
                    Return to Academy Page
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
