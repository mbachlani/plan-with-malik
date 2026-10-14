import { ServiceItem, TestimonialItem, StatItem, FAQItem, CarrierItem } from '../types';

export const CONTACT_INFO = {
  phone: '416-830-0762',
  phoneFormatted: '(416) 830-0762',
  phoneTel: 'tel:+14168300762',
  email: 'malik.bachlani@gmail.com',
  emailMailto: 'mailto:malik.bachlani@gmail.com',
  address: 'Greater Toronto Area, Ontario (Serving Province-Wide & Across Canada)',
};

export const HERO_DATA = {
  eyebrow: 'INDEPENDENT INSURANCE & FINANCIAL ADVISOR',
  headingLine1: 'Protect Your Future.',
  headingLine2: 'Secure What Matters.',
  description:
    'Navigating life and health insurance shouldn’t be stressful or confusing. As an independent licensed advisor across Ontario & Canada, I compare solutions from over 15 leading carriers to build tailored, cost-effective coverage for your family, mortgage, and business.',
  trustPoints: [
    { label: 'Licensed Independent Advisor', icon: 'shield-check' },
    { label: 'Personalized Custom Quotes', icon: 'sliders' },
    { label: 'Lifelong Support & Claims Care', icon: 'heart-handshake' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    shortDescription:
      'Term & Permanent solutions that guarantee your family’s financial stability, cover mortgages, and build tax-sheltered wealth.',
    fullDescription:
      'Life insurance is the bedrock of any sound family financial plan. Whether you need affordable 10, 20, or 30-year Term coverage to protect your children and replace your income, or Permanent / Whole Life policies with cash value accumulation for estate succession, I match you with the strongest insurer for your health profile.',
    iconName: 'heart-handshake',
    keyBenefits: [
      'Tax-free lump sum payout to your designated beneficiaries',
      'Covers mortgage balances, household debt, and living expenses',
      'Option for convertible & renewable term policies without medical exams',
      'Whole Life & Universal Life options for tax-sheltered estate transfer',
    ],
    idealFor: [
      'Parents with young children or dependent family members',
      'Homeowners with substantial mortgage debt',
      'Business owners requiring key person or buy-sell insurance',
      'Individuals looking to pass down wealth tax-efficiently',
    ],
    typicalCoverage: '$250,000 to $5,000,000+ custom-tailored to debt & income',
    faqHighlight: 'What is the difference between Term and Whole Life? Term covers specific high-risk years affordably, while Whole Life protects for life and builds equity.',
  },
  {
    id: 'critical-illness',
    title: 'Critical Illness Insurance',
    shortDescription:
      'Lump-sum cash payments upon diagnosis of cancer, heart attack, or stroke, allowing you to focus 100% on recovery without financial worry.',
    fullDescription:
      'A major illness shouldn’t compromise your life savings. Critical Illness insurance pays you a tax-free cash lump sum (typically 30 days after diagnosis of up to 25+ covered conditions) to use however you see fit: experimental treatments, mortgage payments, private nursing, or taking time off work.',
    iconName: 'shield-alert',
    keyBenefits: [
      'Tax-free lump-sum payment spent entirely at your discretion',
      'Covers cancer, heart attack, stroke, bypass surgery, and 20+ other conditions',
      'Optional Return-of-Premium (ROP) rider: get 100% of your money back if you stay healthy',
      'Access to world-class medical second opinion services (Best Doctors / Teladoc)',
    ],
    idealFor: [
      'Primary household earners where illness would halt family income',
      'Self-employed professionals with no corporate sick leave',
      'Anyone with a family history of heart disease, stroke, or cancer',
    ],
    typicalCoverage: '$50,000 to $500,000+ tax-free lump sum',
    faqHighlight: 'Can I get my premiums back if I never make a claim? Yes! With a Return of Premium rider, every dollar paid can be returned if you stay healthy.',
  },
  {
    id: 'disability-insurance',
    title: 'Disability Insurance',
    shortDescription:
      'Monthly income replacement if injury or illness prevents you from working. Protect your greatest asset: your earning ability.',
    fullDescription:
      'Your ability to earn an income over your career is worth millions of dollars. Disability insurance provides predictable, tax-free monthly income replacement if an accident, mental health challenge, or chronic illness keeps you from performing your job duties.',
    iconName: 'umbrella',
    keyBenefits: [
      'Up to 60-70% of gross earnings replaced with tax-free monthly benefits',
      'Both Short-Term and Long-Term disability protections available',
      'Own-Occupation definitions available for specialized professionals',
      'Cost of Living Adjustment (COLA) riders to guard against inflation',
    ],
    idealFor: [
      'Self-employed entrepreneurs, freelancers, and contractors',
      'Salaried employees with insufficient group employer disability caps',
      'High-income professionals (physicians, accountants, tech leads, trades)',
    ],
    typicalCoverage: '$1,500 to $10,000+/month continuous income replacement',
    faqHighlight: 'Doesn’t EI or worker’s compensation cover disability? EI is limited to just a few weeks and small amounts; private disability covers you comprehensively 24/7.',
  },
  {
    id: 'health-dental',
    title: 'Health & Dental Insurance',
    shortDescription:
      'Comprehensive personal & family coverage for prescription medications, dental visits, vision care, physiotherapy, and massage.',
    fullDescription:
      'Provincial healthcare (like OHIP) covers hospital visits and doctors, but leaves huge gaps for prescription drugs, regular dental cleanings, restorative dental, prescription glasses, and paramedical practitioners. We offer guaranteed-issue and comprehensive plans to keep your out-of-pocket costs predictable.',
    iconName: 'stethoscope',
    keyBenefits: [
      'Prescription drug coverage up to 80-100% with direct pay drug cards',
      'Basic, preventative, and major dental (crowns, bridges, dentures)',
      'Vision exams, prescription lenses, frames, and contact allowances',
      'Paramedical visits: Physiotherapy, Chiropractor, Massage, Psychology, Naturopath',
    ],
    idealFor: [
      'Self-employed individuals and small business owners',
      'Contractors, gig workers, and retirees losing group benefits',
      'Families seeking additional paramedical and dental coverage',
    ],
    typicalCoverage: 'Customized plans starting from basic essential to deluxe family packages',
    faqHighlight: 'Can I get approved if I already have pre-existing medical conditions? Yes, we offer guaranteed-issue plans with no medical questions asked.',
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    shortDescription:
      'Emergency medical, trip cancellation, and baggage coverage whether traveling abroad or exploring other Canadian provinces.',
    fullDescription:
      'A medical emergency outside Canada can cost tens of thousands of dollars per day in out-of-country hospital fees. Our travel insurance plans provide up to $5,000,000 to $10,000,000 in emergency medical coverage, 24/7 emergency multilingual assistance, and trip interruption protection.',
    iconName: 'plane',
    keyBenefits: [
      'Up to $10,000,000 emergency medical hospital and ambulance coverage',
      'Multi-trip annual plans for frequent flyers and business commuters',
      'Trip cancellation, baggage loss, and flight delay compensation riders',
      'Visitors to Canada & Super Visa medical insurance compliant plans',
    ],
    idealFor: [
      'Canadians traveling to the USA or international destinations',
      'Snowbirds wintering in warmer climates',
      'Parents and grandparents visiting on Canadian Super Visas',
      'International students and foreign workers in Canada',
    ],
    typicalCoverage: '$100,000 to $10,000,000 emergency medical protection',
    faqHighlight: 'Does provincial health insurance cover me while traveling out-of-province or out-of-country? Provincial health plans cover less than 5% of international healthcare costs.',
  },
  {
    id: 'financial-planning',
    title: 'Financial & Retirement Planning',
    shortDescription:
      'Complementary wealth solutions including RRSP, TFSA, RESP for your children’s education, and principal-guaranteed segregated funds.',
    fullDescription:
      'Pairing protection with long-term wealth growth creates true peace of mind. We assist families in establishing high-yield Tax-Free Savings Accounts (TFSA), Registered Retirement Savings Plans (RRSP), Registered Education Savings Plans (RESP with government grants), and Segregated Funds that offer creditor protection and principal guarantees.',
    iconName: 'trending-up',
    keyBenefits: [
      'RESP strategy maximizing Canadian Education Savings Grants (CESG)',
      'Tax-advantaged retirement income planning through RRSP & TFSA portfolios',
      'Segregated Funds offering 75-100% principal and death benefit guarantees',
      'Estate bypass: direct designated beneficiaries avoiding probate delays',
    ],
    idealFor: [
      'Parents saving for post-secondary education with government grant matching',
      'Professionals optimizing their tax bracket through smart retirement contributions',
      'Conservative investors and business owners seeking capital preservation',
    ],
    typicalCoverage: 'Integrated retirement & education savings portfolios',
    faqHighlight: 'How does the government match money in an RESP? The Canada Education Savings Grant (CESG) provides 20% on the first $2,500 contributed annually per child.',
  },
];

export const STATS_DATA: StatItem[] = [
  {
    number: '500+',
    label: 'Canadian Families Protected',
    icon: 'users',
  },
  {
    number: '10+',
    label: 'Years Industry Experience',
    icon: 'award',
  },
  {
    number: '15+',
    label: 'Top-Tier Insurance Carriers',
    icon: 'building-2',
  },
  {
    number: '5.0★',
    label: 'Client Satisfaction Rating',
    icon: 'star',
  },
];

export const CARRIERS_DATA: CarrierItem[] = [
  { name: 'Manulife', category: 'Life & Health', rating: 'A+ Rated' },
  { name: 'Sun Life', category: 'Life & Group', rating: 'A+ Rated' },
  { name: 'Canada Life', category: 'Wealth & Life', rating: 'A+ Rated' },
  { name: 'Desjardins Insurance', category: 'Living Benefits', rating: 'A+ Rated' },
  { name: 'iA Financial Group', category: 'Life & Savings', rating: 'A+ Rated' },
  { name: 'Empire Life', category: 'Individual Coverage', rating: 'A+ Rated' },
  { name: 'BMO Insurance', category: 'Term & Critical Illness', rating: 'A+ Rated' },
  { name: 'Equitable Life', category: 'Mutual Protection', rating: 'A+ Rated' },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'David & Sarah M.',
    roleOrLocation: 'Oakville, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    quote:
      'Malik took all the anxiety out of getting life insurance after we bought our first home. He compared 6 different carriers right in front of us and saved us over $65 a month compared to what our mortgage broker quoted!',
    coveragePurchased: '20-Year Term Life & Critical Illness',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya K.',
    roleOrLocation: 'Mississauga, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    quote:
      'As an independent IT contractor, I had zero safety net if I ever got sick. Malik set me up with a customized disability and health plan. His transparent explanations and genuine care are unmatched in this industry.',
    coveragePurchased: 'Disability & Extended Health Plan',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Marcus T.',
    roleOrLocation: 'Toronto, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote:
      'When my business partner and I needed key person insurance, Malik structured everything seamlessly. He worked with our corporate accountant and made the process swift and painless. Highly recommended!',
    coveragePurchased: 'Corporate Life & Buy-Sell Coverage',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Elena & Roberto G.',
    roleOrLocation: 'Brampton, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    quote:
      'We were new to Canada and confused by how the healthcare system worked. Malik patiently walked us through super visa travel insurance for our parents and health coverage for our kids. A true blessing to work with.',
    coveragePurchased: 'Super Visa Travel & Family Health',
    rating: 5,
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How does working with an independent advisor differ from a bank or single insurance company?',
    answer:
      'A captive agent at a bank or single insurer can only sell you that one company’s products—regardless of whether the pricing or underwriting rules suit your medical history. As an independent advisor, I work for YOU, not the insurance company. I have direct broker contracts with over 15 leading Canadian insurers (Manulife, Sun Life, Canada Life, Desjardins, etc.) to shop the entire market on your behalf for the best rate and best policy structure.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Does it cost more to use an independent broker instead of buying directly?',
    answer:
      'No! In Canada, insurance rates are regulated by law. You pay the exact same premium whether you buy through an advisor or directly through the carrier. My advisory services, quotes, policy reviews, and lifelong claims support come at zero extra cost to you.',
  },
  {
    id: 'faq-3',
    category: 'life',
    question: 'How much life insurance coverage does a typical family actually need?',
    answer:
      'A standard rule of thumb is 7 to 10 times your annual gross income plus enough to extinguish your mortgage and major debts, plus $50,000–$100,000 per child for post-secondary education. During our free consultation, we run a precise Needs Analysis to calculate the exact figure so you are neither underinsured nor paying for coverage you don’t need.',
  },
  {
    id: 'faq-4',
    category: 'critical',
    question: 'Why do I need Critical Illness if I already have provincial healthcare (like OHIP)?',
    answer:
      'Provincial health insurance covers standard hospital stays and doctors, but it does NOT pay your mortgage, buy cutting-edge medications not on the provincial formulary, replace lost spousal income if your partner takes time off work to care for you, or fund private treatment abroad. Critical illness pays you a tax-free cash cheque to use however you choose.',
  },
  {
    id: 'faq-5',
    category: 'disability',
    question: 'I have disability coverage through my employer. Isn’t that enough?',
    answer:
      'Group employer disability plans often have strict monthly caps (e.g., maximum $3,000/mo), are taxable if the employer pays the premium, and evaporate the moment you change jobs, get laid off, or transition into contracting. Having an individual supplemental policy locks in portable, tax-free protection that follows you anywhere.',
  },
  {
    id: 'faq-6',
    category: 'health',
    question: 'Can I apply for insurance if I have pre-existing medical conditions or take medication?',
    answer:
      'Absolutely. Different insurance companies have vastly different underwriting guidelines for conditions like hypertension, diabetes, asthma, or depression. Because I represent 15+ insurers, I know exactly which carrier is most lenient for your specific health history, maximizing your approval odds at standard rates. We also offer guaranteed-issue plans with no medical exams.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Discovery Call',
    description: 'A friendly 15-minute conversation over phone or Zoom to understand your family’s goals, budget, and existing coverage.',
    icon: 'phone-call',
  },
  {
    step: '02',
    title: 'Market Comparison',
    description: 'I search 15+ top Canadian insurance providers to find the most competitive pricing and underwriting terms for you.',
    icon: 'search-check',
  },
  {
    step: '03',
    title: 'Tailored Recommendation',
    description: 'We review a straightforward, jargon-free summary of your top 2-3 options with transparent side-by-side cost breakdowns.',
    icon: 'file-text',
  },
  {
    step: '04',
    title: 'Seamless Digital Setup & Lifelong Care',
    description: 'Easy e-signatures from the comfort of home. I remain your dedicated personal advisor for annual reviews and claims.',
    icon: 'check-circle-2',
  },
];
