# Enquiry Link Tracking Implementation

This document shows how to implement tracking for "Enquire Now" links so you can know which service users are interested in.

## How It Works

1. **URL Parameters**: Add service information to contact form URLs
2. **Auto-fill Form**: Contact form automatically pre-fills with service details
3. **Enhanced Data**: Form submission includes service, location, and source information
4. **Better Insights**: You'll know exactly what users are enquiring about

## Link Examples

### Nursery Locations

```jsx
// Rhydlafar Nursery
<Link 
  to="/contact?service=day-nursery&location=rhydlafar&source=rhydlafar-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Pentyrch Wrap Around
<Link 
  to="/contact?service=wrap-around-care&location=pentyrch&source=pentyrch-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Radyr Wrap Around
<Link 
  to="/contact?service=wrap-around-care&location=radyr&source=radyr-page" 
  className="btn-primary"
>
  Enquire Now
</Link>
```

### Specific Services

```jsx
// Food & Nutrition
<Link 
  to="/contact?service=food-nutrition&source=food-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Age Groups
<Link 
  to="/contact?service=age-groups&source=age-groups-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Staff & Team
<Link 
  to="/contact?service=staff-information&source=staff-page" 
  className="btn-primary"
>
  Enquire Now
</Link>
```

### Funding & Fees

```jsx
// Fees & Funding
<Link 
  to="/contact?service=fees-funding&source=fees-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Government Funding
<Link 
  to="/contact?service=government-funding&source=funding-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Tax-Free Childcare
<Link 
  to="/contact?service=tax-free-childcare&source=tax-free-page" 
  className="btn-primary"
>
  Enquire Now
</Link>
```

### About Sections

```jsx
// Our Mission
<Link 
  to="/contact?service=general-inquiry&source=mission-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Our Story
<Link 
  to="/contact?service=general-inquiry&source=story-page" 
  className="btn-primary"
>
  Enquire Now
</Link>

// Our Approach
<Link 
  to="/contact?service=general-inquiry&source=approach-page" 
  className="btn-primary"
>
  Enquire Now
</Link>
```

## URL Parameter Options

### Service Types
- `day-nursery` - Full day nursery care
- `wrap-around-care` - Before/after school care
- `food-nutrition` - Meal plans and dietary info
- `age-groups` - Age-specific care information
- `staff-information` - Team and staff details
- `fees-funding` - Pricing and funding options
- `government-funding` - Government childcare funding
- `tax-free-childcare` - Tax-free childcare scheme
- `general-inquiry` - General questions

### Locations
- `rhydlafar` - Main nursery location
- `pentyrch` - Pentyrch wrap around
- `radyr` - Radyr wrap around
- `cardiff` - General Cardiff area

### Sources
- `rhydlafar-page` - From Rhydlafar nursery page
- `pentyrch-page` - From Pentyrch page
- `radyr-page` - From Radyr page
- `food-page` - From Food & Nutrition page
- `age-groups-page` - From Age Groups page
- `staff-page` - From Staff page
- `fees-page` - From Fees page
- `funding-page` - From Funding page
- `tax-free-page` - From Tax-Free Childcare page
- `mission-page` - From Our Mission page
- `story-page` - From Our Story page
- `approach-page` - From Our Approach page

## What You'll Receive

When someone submits the contact form, you'll get an email with:

- **Name, Email, Phone** - Contact details
- **Subject** - Auto-generated based on service
- **Message** - Pre-filled with service context
- **Service** - What they're enquiring about
- **Location** - Which location they're interested in
- **Source** - Which page they came from
- **Timestamp** - When they submitted
- **User Agent** - Browser/device info

## Example Email You'll Receive

```
Subject: Enquiry about day-nursery at rhydlafar

Name: Jane Doe
Email: jane@example.com
Phone: 029 1234 5678
Service: day-nursery
Location: rhydlafar
Source: rhydlafar-page
Message: I'm interested in learning more about day-nursery at rhydlafar. Please provide me with more information about availability, pricing, and next steps.
```

## Implementation Steps

1. **Update Contact Component** ✅ (Already done)
2. **Update all "Enquire Now" links** with appropriate parameters
3. **Test the flow** to ensure data is captured correctly
4. **Monitor your emails** to see the enhanced information

## Benefits

- **Better Lead Qualification** - Know exactly what services people want
- **Improved Response** - Tailor your responses to their specific needs
- **Analytics** - Track which services generate the most interest
- **User Experience** - Forms are pre-filled with relevant context
- **Professional Appearance** - Shows you understand their needs
