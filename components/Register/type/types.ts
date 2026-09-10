export type Tab = 'customer' | 'partner' | 'candidate';

export interface CustomerData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
}

export interface PartnerData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  website: string;
}

export interface CandidateData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio: string;
}
