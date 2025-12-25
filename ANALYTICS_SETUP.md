# Analytics Setup Guide

This landing page includes comprehensive tracking for Google Analytics 4 and Meta Pixel (Facebook/Instagram Ads).

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google Analytics 4 Measurement ID
# Get this from: https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Meta Pixel ID (Facebook/Instagram Ads)
# Get this from: https://business.facebook.com/events_manager
# Format: XXXXXXXXXXXXXXX (numeric)
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

## Tracked Events

### Page-Level Tracking
- **Page View**: Automatically tracked on landing
- **Scroll Depth**: 25%, 50%, 75%, 100% milestones
- **Time on Page**: 10s, 30s, 60s, 120s milestones
- **Exit Intent**: Mouse leaving viewport

### Button Clicks
- **Hero CTA Buttons**: "Call Now" and "Book Appointment"
- **Final CTA Buttons**: Bottom section CTAs
- **Phone Number Clicks**: All tel: links

### Form Tracking
- **Form Start**: User focuses on first field
- **Field Interactions**: Each field interaction
- **Form Submit**: When form is submitted
- **Form Success**: Successful submission
- **Form Error**: Submission errors

### Conversion Events
- **Lead**: Form submission
- **Contact**: Form success
- **Phone Click**: Phone number clicks

## UTM Parameter Tracking

All events automatically capture UTM parameters:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

## Viewing Analytics

### Google Analytics 4
1. Go to https://analytics.google.com/
2. Navigate to Reports > Real-time to see live events
3. Navigate to Reports > Engagement > Events to see all tracked events

### Meta Pixel
1. Go to https://business.facebook.com/events_manager
2. Select your pixel
3. Click "Test Events" to see real-time events
4. View "Overview" for aggregated data

## Development Mode

In development, all events are logged to the browser console with a 📊 prefix for easy debugging.

## Custom Events

To track custom events, use the analytics utilities:

```typescript
import { trackEvent, trackConversion, trackButtonClick } from '@/lib/analytics';

// Track custom event
trackEvent({
  action: 'custom_action',
  category: 'Custom Category',
  label: 'Custom Label',
  value: 100,
  metadata: { key: 'value' }
});

// Track conversion
trackConversion('lead', { source: 'custom_source' });

// Track button click
trackButtonClick('Button Name', 'Button Location', { custom: 'data' });
```
