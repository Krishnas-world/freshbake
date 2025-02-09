"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <section
            className="w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <div className="absolute inset-0 backdrop-blur-[1px]"></div>
            <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
                <div className="rounded-3xl p-4 sm:p-6 lg:p-12 bg-white shadow-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-black text-[#2D1810]">Contact Us</h1>
                        <p className="text-gray-700 mt-2">Get in touch with us for any queries or orders.</p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Left - Contact Details */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <PhoneCall className="w-6 h-6 text-orange-500" />
                                <span className="text-lg font-semibold">7488577653</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <Mail className="w-6 h-6 text-orange-500" />
                                <span className="text-lg font-semibold">info@myfreshbake.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <MapPin className="w-6 h-6 text-orange-500" />
                                <span className="text-lg font-semibold">Shiv Mandir Pipra Chowk, Near G.D College, Begusarai</span>
                            </div>

                            <Link
                                href={`https://wa.me/7488577653?text=${encodeURIComponent("Hi")}`}
                                target="_blank"
                                className="bg-green-500 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                Chat on WhatsApp
                            </Link>
                        </div>

                        {/* Right - Contact Form */}
                        <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white py-3 rounded-full font-bold shadow-md hover:bg-orange-600 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="mt-10 w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.4547262889525!2d86.1218766!3d25.4154087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI0JzU1LjUiTiA4NsKwMDcnMTguOCJF!5e3!3m2!1sen!2sin!4v1707471930000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
