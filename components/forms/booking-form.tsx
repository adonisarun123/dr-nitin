"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trackFormEvent, getUTMParameters } from "@/lib/analytics";

interface BookingFormProps {
    source?: string;
}

export function BookingForm({ source = "website" }: BookingFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        condition: "",
        preferredLocation: "",
        preferredDate: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const formStarted = useRef(false);
    const fieldsInteracted = useRef<Set<string>>(new Set());

    // Track form start on first field focus
    const handleFieldFocus = (fieldName: string) => {
        if (!formStarted.current) {
            formStarted.current = true;
            trackFormEvent('booking_form', 'start', {
                source,
                utm_params: getUTMParameters(),
            });
        }

        // Track field interaction
        if (!fieldsInteracted.current.has(fieldName)) {
            fieldsInteracted.current.add(fieldName);
            trackFormEvent('booking_form', 'field_interaction', {
                field_name: fieldName,
                source,
            });
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Add source suffix to identify leads from ads
            const submissionData = {
                ...formData,
                source: source === "ads" ? "google-meta-ads" : source,
                submittedAt: new Date().toISOString(),
            };

            // Here you would typically send to your backend/CRM
            // For now, we'll simulate the submission
            console.log("Form submitted:", submissionData);

            // Track form submission
            trackFormEvent('booking_form', 'submit', {
                source,
                condition: formData.condition,
                location: formData.preferredLocation,
                utm_params: getUTMParameters(),
            });

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSuccess(true);

            // Track successful submission
            trackFormEvent('booking_form', 'success', {
                source,
                condition: formData.condition,
                location: formData.preferredLocation,
                utm_params: getUTMParameters(),
            });

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    condition: "",
                    preferredLocation: "",
                    preferredDate: "",
                    message: "",
                });
                setIsSuccess(false);
                formStarted.current = false;
                fieldsInteracted.current.clear();
            }, 3000);
        } catch (err) {
            setError("Something went wrong. Please try again or call us directly.");
            console.error("Form submission error:", err);

            // Track form error
            trackFormEvent('booking_form', 'error', {
                source,
                error_message: err instanceof Error ? err.message : 'Unknown error',
                utm_params: getUTMParameters(),
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                </h3>
                <p className="text-gray-600 mb-4">
                    Your appointment request has been received.
                </p>
                <p className="text-gray-600">
                    We'll contact you within 24 hours to confirm your appointment.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your full name"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('phone')}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="10-digit mobile number"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                />
            </div>

            {/* Condition */}
            <div>
                <label htmlFor="condition" className="block text-sm font-semibold text-gray-700 mb-2">
                    What brings you in? <span className="text-red-500">*</span>
                </label>
                <select
                    id="condition"
                    name="condition"
                    required
                    value={formData.condition}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('condition')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
                >
                    <option value="">Select your condition</option>
                    <option value="knee-pain">Knee Pain</option>
                    <option value="sports-injury">Sports Injury</option>
                    <option value="acl-tear">ACL/Meniscus Tear</option>
                    <option value="shoulder-pain">Shoulder Pain</option>
                    <option value="back-pain">Back/Spine Pain</option>
                    <option value="hip-pain">Hip Pain</option>
                    <option value="fracture">Fracture/Trauma</option>
                    <option value="arthritis">Arthritis</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Preferred Location */}
            <div>
                <label htmlFor="preferredLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Location <span className="text-red-500">*</span>
                </label>
                <select
                    id="preferredLocation"
                    name="preferredLocation"
                    required
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('preferredLocation')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
                >
                    <option value="">Select location</option>
                    <option value="hsr-layout">HSR Layout</option>
                    <option value="attibele">Attibele</option>
                </select>
            </div>

            {/* Preferred Date */}
            <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                </label>
                <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('preferredDate')}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us more about your condition or any specific concerns..."
                />
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Book Appointment
                    </>
                )}
            </button>

            <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our team regarding your appointment.
            </p>
        </form>
    );
}
