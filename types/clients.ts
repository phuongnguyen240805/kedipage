// src/types/clients.ts
export interface Button {
  label: string;
  variant?: 'outline' | 'default';
}

export interface ClientData {
  id: string;
  layout: 'layout1' | 'layout2' | 'layout3';
  clientLogo: string;
  clientName: string;
  clientRole: string;
  clientDescription: string;
  companySummary: string;
  youtubeVideoId: string;
  leftImage: string;
  rightImage: string;
  buttons: Button[];
  title?: string; // ✅ giờ là optional
  subtitle?: string; // đã optional sẵn
}
