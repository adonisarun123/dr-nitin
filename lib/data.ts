import { Bone, Activity, HeartPulse, UserPlus, Stethoscope, Microscope } from "lucide-react";

export const siteConfig = {
    name: "Dr. Nitin Sunku",
    description: "Orthopedic & Sports Medicine Specialist in HSR Layout, Bangalore",
    address: "1162, 24th Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91-9449031003",
    email: "contact@drnitinsunku.com",
};

export const servicesData = [
    {
        slug: "acl-care",
        title: "ACL Care",
        shortDesc: "Expert diagnosis and arthroscopic reconstruction for ACL tears.",
        fullDesc: "The Anterior Cruciate Ligament (ACL) is crucial for knee stability. Dr. Nitin specializes in arthroscopic ACL reconstruction, ensuring a safe return to sports and daily activities.",
        icon: Activity,
        color: "bg-blue-50 text-blue-600",
    },
    {
        slug: "meniscal-care",
        title: "Meniscal Care",
        shortDesc: "Minimally invasive treatment for meniscus tears used in sports.",
        fullDesc: "Meniscus tears are common in athletes. We offer meniscus repair and partial meniscectomy using advanced arthroscopic techniques to preserve the knee joint.",
        icon: Bone,
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        slug: "sports-medicine",
        title: "Sports Medicine",
        shortDesc: "Comprehensive care for sports-related injuries and rehabilitation.",
        fullDesc: "From sprains to complex ligament injuries, our sports medicine program is designed to get athletes back in the game with personalized treatment plans.",
        icon: HeartPulse,
        color: "bg-green-50 text-green-600",
    },
    {
        slug: "knee-replacement",
        title: "Knee Replacement",
        shortDesc: "Total and partial knee replacement surgeries for chronic pain.",
        fullDesc: "For severe arthritis, knee replacement surgery can restore mobility and eliminate pain. Dr. Nitin uses the latest implants and techniques for long-lasting results.",
        icon: UserPlus,
        color: "bg-orange-50 text-orange-600",
    },
    {
        slug: "hip-replacement",
        title: "Hip Replacement",
        shortDesc: "Advanced hip replacement techniques for mobility restoration.",
        fullDesc: "Hip replacement surgery helps patients suffering from hip arthritis or fractures regain their quality of life with reduced pain and improved function.",
        icon: Bone,
        color: "bg-purple-50 text-purple-600",
    },
    {
        slug: "shoulder-care",
        title: "Shoulder Care",
        shortDesc: "Treatment for rotator cuff tears, dislocations, and frozen shoulder.",
        fullDesc: "Shoulder pain can be debilitating. We treat rotator cuff tears, shoulder instability, and frozen shoulder with both conservative and surgical options.",
        icon: Stethoscope,
        color: "bg-cyan-50 text-cyan-600",
    },
    {
        slug: "bone-fracture",
        title: "Bone Fracture",
        shortDesc: "Emergency collision and trauma care for all types of fractures.",
        fullDesc: "Rapid and precise treatment for fractures ensuring proper alignment and healing.",
        icon: Microscope,
        color: "bg-red-50 text-red-600",
    },
    {
        slug: "spine-care",
        title: "Spine Care",
        shortDesc: "Diagnosis and management of back pain and spinal disorders.",
        fullDesc: "Comprehensive evaluation and non-surgical/surgical management of spinal conditions.",
        icon: Activity,
        color: "bg-emerald-50 text-emerald-600",
    },
];

export const teamData = [
    {
        name: "Dr. Nitin N Sunku",
        role: "Orthopedic & Sports Medicine Specialist",
        qualifications: "MBBS, MS Ortho, Fellowship in Arthroscopy & Sports Medicine",
        bio: "Dr. Nitin is the lead consultant with over 7 years of specialized experience. He is the Team Doctor for Bengaluru FC and consults at top hospitals in Bangalore.",
        image: "/doctor-placeholder.jpg" // Ideally replace with real path
    },
    {
        name: "Mr. Vijayan",
        role: "Senior Physiotherapist",
        qualifications: "BPTh/BPT, MPTh/MPT (Musculoskeletal)",
        bio: "Mr. Vijayan specializes in post-operative rehabilitation and sports injury recovery, ensuring patients regain full function quickly.",
        image: "/physio-placeholder.jpg"
    }
];

export const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        condition: "Ankle Sprain",
        quote: "Dr. Nitin was prompt, responsive and honest. He explained my ankle injury clearly and offered options instead of pushing unnecessary treatment.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah K.",
        condition: "Knee Pain",
        quote: "Honest advice & no unnecessary scans. Dr. Nitin is truly patient-centric. I felt very comfortable during the consultation.",
        rating: 5
    },
    {
        id: 3,
        name: "Rajesh M.",
        condition: "Sports Injury",
        quote: "Recovered fully after his prescribed physiotherapy. Highly recommended for any sports related injuries!",
        rating: 5
    },
    {
        id: 4,
        name: "Priya S.",
        condition: "Back Pain",
        quote: "Very approachable and explains condition in detail. Best ortho in HSR layout used.",
        rating: 5
    },
    {
        id: 5,
        name: "Amit B.",
        condition: "Shoulder Dislocation",
        quote: "Excellent diagnosis and treatment plan. I was back to playing badminton in 3 months.",
        rating: 5
    }
];

export const blogPosts = [
    {
        slug: "common-causes-knee-pain",
        title: "5 Common Causes of Knee Pain in Active Adults",
        excerpt: "Knee pain can sideline you from your favorite activities. Learn about the most common offenders, from runner's knee to meniscus tears.",
        date: "Dec 1, 2025",
        category: "Knee Care",
        content: `
      <h2>Introduction</h2>
      <p>Knee pain is a frequent complaint among active adults...</p>
      <h2>1. Runner's Knee</h2>
      <p>Also known as patellofemoral pain syndrome...</p>
      <h2>2. Meniscus Tears</h2>
      <p>A sudden twist or turn can lead to a tear...</p>
      <h2>When to see a doctor?</h2>
      <p>If you experience swelling, locking, or instability...</p>
    `
    },
    {
        slug: "acl-tear-prevention",
        title: "Can ACL Tears Be Prevented? Tips for Athletes",
        excerpt: "ACL injuries are devastating for athletes. Discover evidence-based training strategies to reduce your risk of injury.",
        date: "Nov 20, 2025",
        category: "Sports Medicine",
        content: "..."
    },
    {
        slug: "ergonomics-back-pain",
        title: "Work From Home: Is Your Chair Hurting Your Back?",
        excerpt: "Poor posture during long work hours is a leading cause of back pain. Here's how to set up an ergonomic workspace.",
        date: "Nov 10, 2025",
        category: "Spine Care",
        content: "..."
    }
];
