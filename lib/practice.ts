/**
 * Centralized practice metadata — single source of truth for both clinics.
 *
 * Consumed by:
 * - components/layout/footer.tsx
 * - components/sections/locations-bold.tsx
 * - components/ui/whatsapp-float.tsx
 * - components/forms/booking-form.tsx
 * - app/contact/page.tsx
 * - app/practice/page.tsx
 * - app/book-appointment/page.tsx
 * - app/layout.tsx (root @graph JSON-LD)
 *
 * If you need to change clinic hours, addresses, or phone numbers, change them
 * here and the change will propagate across the site.
 */

export type ClinicId = "attibele" | "hsr-layout";

export interface ClinicHours {
  /** Day-of-week names matching schema.org (Monday..Sunday) */
  dayOfWeek: string[];
  /** Time in HH:mm */
  opens: string;
  /** Time in HH:mm */
  closes: string;
  /** Display label, e.g. "Mon – Sat" */
  label: string;
  /** Display value, e.g. "10:00 AM – 6:00 PM" */
  display: string;
}

export interface Clinic {
  id: ClinicId;
  /** Long, user-facing name e.g. "Raghava Multispeciality Hospital" */
  name: string;
  /** Short locality label e.g. "Attibele" */
  shortLocality: string;
  /** Composite display label e.g. "Raghava Hospital, Attibele" */
  displayLabel: string;
  /** Lead-routing email for this clinic */
  leadEmail: string;
  /** Full street address as a single string */
  address: string;
  /** Address split into schema.org PostalAddress components */
  postal: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  /** International dialing form, e.g. "+91-9980031006" */
  phone: string;
  /** Digits-only form usable in tel: links and wa.me URLs, e.g. "919980031006" */
  phoneDigits: string;
  /** Embedded Google Maps `src` for an <iframe> */
  mapEmbedSrc: string;
  /** Public Google Maps link */
  mapLink: string;
  /** Schema.org `sameAs` link for the place */
  sameAs: string;
  /** Areas served (used in JSON-LD `areaServed`) */
  areaServed: string[];
  /** Opening hours for both display and JSON-LD */
  hours: ClinicHours[];
}

export const ATTIBELE_CLINIC: Clinic = {
  id: "attibele",
  name: "Raghava Multispeciality Hospital",
  shortLocality: "Attibele",
  displayLabel: "Raghava Hospital, Attibele",
  leadEmail: "raghavahospital2002@gmail.com",
  address:
    "39, Sarjapura - Attibele Rd, opposite Canara Bank (formerly Syndicate Bank), Attibele, Bengaluru, Karnataka 562107",
  postal: {
    streetAddress:
      "39, Sarjapura - Attibele Rd, opposite Canara Bank (formerly Syndicate Bank), Attibele, Bengaluru, Karnataka 562107",
    addressLocality: "Attibele, Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "562107",
    addressCountry: "IN",
  },
  phone: "+91-9980031006",
  phoneDigits: "919980031006",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Sri+Raghava+Childrens+and+General+Hospital+Attibele+Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6?sa=X&ved=1t:2428&ictx=111",
  sameAs:
    "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6",
  areaServed: [
    "Attibele",
    "Anekal",
    "Bommasandra",
    "Chandapura",
    "Hosur Road",
    "Electronic City",
  ],
  hours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
      label: "Mon – Sat",
      display: "10:00 AM – 6:00 PM",
    },
  ],
};

export const HSR_CLINIC: Clinic = {
  id: "hsr-layout",
  name: "Health Nest Hospital",
  shortLocality: "HSR Layout",
  displayLabel: "Health Nest Hospital, HSR Layout",
  leadEmail: "healthnest2010@yahoo.in",
  address:
    "1162, 24th Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
  postal: {
    streetAddress:
      "1162, 24th Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
    addressLocality: "HSR Layout, Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
  phone: "+91-9449031003",
  phoneDigits: "919449031003",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Health+Nest+Hospital+HSR+Layout+Bengaluru&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68?sa=X&ved=1t:2428&ictx=111",
  sameAs:
    "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68",
  areaServed: [
    "HSR Layout",
    "Koramangala",
    "BTM Layout",
    "Bellandur",
    "Sarjapur Road",
  ],
  hours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
      label: "Mon – Sat",
      display: "10:00 AM – 8:00 PM",
    },
  ],
};

/** Primary clinic. Used by default for tel:/WhatsApp CTAs and for the root `Physician.telephone`. */
export const PRIMARY_CLINIC: Clinic = ATTIBELE_CLINIC;

/** Both clinics in display order (primary first). */
export const CLINICS: Clinic[] = [ATTIBELE_CLINIC, HSR_CLINIC];

/** Marketing / master archive BCC. Use env override if available. */
export const MARKETING_BCC =
  process.env.MARKETING_BCC_EMAIL ?? "drnitinmarketing@gmail.com";

/** Shared contact email displayed publicly. */
export const PRACTICE_EMAIL = "contact@drnitinsunku.com";

/** Lookup a clinic by its id (the same id used in the BookingForm select). */
export function getClinicById(id: string): Clinic | undefined {
  return CLINICS.find((c) => c.id === id);
}

/** Build a JSON-LD `OpeningHoursSpecification[]` for a clinic. */
export function clinicOpeningHoursSpec(clinic: Clinic) {
  return clinic.hours.map((h) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  }));
}

/** Build a JSON-LD `PostalAddress` for a clinic. */
export function clinicPostalAddress(clinic: Clinic) {
  return {
    "@type": "PostalAddress" as const,
    ...clinic.postal,
  };
}
